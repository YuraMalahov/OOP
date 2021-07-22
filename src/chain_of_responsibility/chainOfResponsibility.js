"use strict";

class Handler {
    constructor(type, nextHandler) {
        this.type = type;
        this.nextHandler = nextHandler;
    }

    handle(req, type) {
        if (type === this.type) {
            console.log("im handle this", req, this.type);
        } else if (this.nextHandler instanceof Handler) {
            console.log("move to next");
            this.nextHandler.handle(req, type);
        } else {
            console.log("unhandled", req);
        }
    }
}

const handler1 = new Handler(1);
const handler2 = new Handler(2);
const handler3 = new Handler(3);

handler1.nextHandler = handler2;
handler2.nextHandler = handler3;

handler1.handle({x: "secret"}, 1);
console.log("------------------------");
handler1.handle({x: "secret"}, 2);
console.log("------------------------");
handler1.handle({x: "secret"}, 3);
console.log("------------------------");
handler1.handle({x: "secret"}, 4);
