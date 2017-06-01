"use strict";

class Mediator {
    setCustomer(customer) {
        this.customer = customer;
    }
    
    setWorker(worker) {
        this.worker = worker;
    }

    send(message, sender) {
        if (sender instanceof Customer) {
            this.worker.notify(message);
        } else if (sender instanceof Worker) {
            this.customer.notify(message);
        }
    }
}

class Customer {
    constructor(mediator) {
        this.mediator = mediator;
    }

    send(message) {
        this.mediator.send(message, this);
    }

    notify(message) {
        console.log('customer read:', message);
    }
}

class Worker {
    constructor(mediator) {
        this.mediator = mediator;
    }

    send(message) {
        this.mediator.send(message, this);
    }

    notify(message) {
        console.log('worker read:', message);
    }
}


const mediator = new Mediator();
const customer = new Customer(mediator);
const worker = new Worker(mediator);

mediator.setCustomer(customer);
mediator.setWorker(worker);

customer.send('hello');
worker.send('hi');
