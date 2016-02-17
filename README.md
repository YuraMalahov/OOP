# OOP

Basics

1 - Abstraction

2 - Encapsulation

3 - Polymorphism

4 - Inheritance

******************************************************************

Principes

1 - Encapsulate what varies.

    Identify the aspects of your application that vary 
    and separate them from what stays the same. (example Strategy)

2 - Program to interface, not implementations.

    The declared type of the variables should be a supertype, 
    so that the objects assigned to those variables can be 
    of any concrete implementation of the supertype. (example Strategy)
    
3 - Favor composition over inheritance.

    Creating system using composition gives you a lot more flexibility.
    Not only does it let you encapsulate a family of algorithms into their
    own set of classes, but it also lets you change behavior at runtime
    as long as the object you're composing with implements the correct 
    behavior interface. (example Strategy)

4 - Strive for loosely coupled designs between objects that interact.

    The only thing the subject knows about an object is that it implements a 
    certain interface. (example Observer)

5 - Classes should be open for extension but closed for modification. (OCP)

    Our goal is to allow classes to be easily extended to incorporate new behavior 
    without modifying existing code. (example Decorator)

6 - Depend on abstractions. Do not depend on concrete classes. (DIP)

    It suggests that our high-level component should not depend on our low-level 
    components; rather; they both depend on abstractions.

    - No variable should hold a reference to a concreate class.
    - No class should derive from a concrete class.
    - No method should override an implemented method of any of its base classes.
    (example Factory)

7 - Only talk to your friends.

    The principle tell us that we should only invoke methods that belongs to:
    - The objects itself.
    - Objects passed in as a parameter to the method.
    - Any object the method creates or instantiates.
    - Any components of the object.
    (example Facade)

8 - Don't call us, we'll call you.

    We allow low-level components to hook themselves into a system, 
    but the high-level components determine when they are needed, and how.
    (example Template Method)

9 - A class should have only one reason to change. (SRP)

    Hawing two ways to change increases the probability the class will change
    in the future, and when it does, it's going to affect two aspects of your design.

    The principe guides us to assign each responsibility to one class,
    and only one class.

10 - A class should never be forced to implement an interface that it doesn’t use 
    or class shouldn’t be forced to depend on methods they do not use. (ISP)
    
11 - If S is a subtype of T, then objects of type T may be replaced with objects of type S 
    without altering any of the desirable properties of that program. (LSP)

******************************************************************

Patterns

  1 - Strategy
  
    defines a family of algorithms, encapsulates each one, and make them 
    interchangeable. Strategy lets the algorithm vary idependently from clients 
    that use it.

  2 - Observer
  
    defines a one-to-many dependency between objects so that when one object 
    changes state, all of its dependents are notified and updated automatically.
  
  3 - Decorator
  
    attaches additional responsibilities to an object dynamically. Decorators 
    provide a flexible alternative to subclassing for extending functionality.

  4 - Factory Method
  
    defines an interface for creating an object, but lets subclasses decide 
    which class to instantiate. Factory Method lets a class defer instantiation 
    to subclasses.  

  5 - Abstract Factory
  
    provides an interface for creating families of related or dependent objects 
    without specifying their concrete classes.

  6 - Singleton
  
    ensures a class has only one instance, and provides a global point of access
    to it.
    
  7 - Command
  
    encapsulates a request as an object, thereby letting you parameterize 
    other objects with different requests, queue or log requests, and support
    undoable operations.
    
  8 - Adapter
  
    converts the interface of a class into another interface the clients expect.
    Adapter lets classes work together that couldn't otherwise beacause of 
    incompatible interfaces.

  9 - Facade
  
    provides a unified interface to a set of interfaces in a subsystem. Facade 
    defines a higher-level interface that makes the subsystem easier to use.

  10 - Template Method
  
    defines the skeleton of an algorithm in a method, deferring some steps to
    subclasses. Themplate Method lets subclasses redefine certain steps of an 
    algorithm without changing the algorithm's structure.

  11 - Iterator
  
    provides a way to access the elements of an aggregate object sequentially
    without exposing its underlying representations.
    
  12 - Composite
  
    allows you to compose objects into three structures to represent part-whole
    hierarchies. Composite lets clients treat individual objects and compositions
    of objects uniformly.
    
  13 - State
  
    allows an object to alter its behavior when its internal state changes. 
    The object will appear to change its class.
    
  14 - Proxy
    
    provides a surrogate or placeholder for another object to control access to it.

  15 - Builder
  
    separate the construction of a complex object from its representation. 
    By doing so the same construction process can create different representations.
    
  16 - Prototype
  
    it is used when the type of objects to create is determined by a prototypical instance,
    which is cloned to produce new objects.

  17 - Mediator

    communication between objects is encapsulated with a mediator object. Objects no longer      
    communicate directly with each other, but instead communicate through the mediator. 
    This reduces the dependencies between communicating objects, thereby lowering the coupling.

******************************************************************
******************************************************************

