Web Client Technologies
=======================

Lesson Two - JavaScript Basics
----------------

###Topics

####The Dos and Do Nots

Below are just a few things you can do to write better JavaScript.

- Do use === instead of == unless you have a good reason.
- Do **NOT** place your JavaScript directly in your HTML files.
- Do **NOT** create global variables in JavaScript unless you need to
- Do use camel case when naming your arguments, methods, and properties
- Do use proper case when naming your constructor functions
- Do use closures to create private functions
- Do **NOT** access the DOM more than necessary
- Do create namespaces if you must have global objects or methods
- Do **NOT** add properties or functions to existing object (Array, Object, etc) - (Unless you know what you're doing!)

####JavaScript Data Types

People often call JavaScript a *weakly* typed language.  However, it is actually dynamically typed.  Below are the types supported by EcmaScript 5: 

- String
- Number 
- Boolean
- Array 
- Object 
- Null 
- Undefined

Also, there are a couple of other objects that are always available:

- Date
- Math

We'll discuss:

- Cool or strange things we should know about the above types
- Basic type checking
- Basic type conversion
- undefined vs null

####JavaScript - Funky Fresh Functional Language

JavaScript is a functional language.  It's also designed to operate asynchronously.

- Functions can be passed around in variables
- Functions are used to create objects
- Callback functions are used A LOT and can lead to callback hell
- Promises can help with callback hell, however, we'll leave promises for when we discuss jQuery next
- The **this** keyword is always at the function scope, except when it's **not**.  It depends on how the function is called.  We'll talk about this in detail.

####Closing the gap with Closures

Closures are a powerful concept in JavaScript.  Don't let them scare you though.  We're Professionals!

During this session we'll discuss the following:

- What are closures?
- When should I use closures?

### Reference Sites

- http://www.github.com/johnnyezzell/web-technology-series - The github that contains all the handouts and sample code for this series
- http://www.w3schools.com/js - Great site with lots of JavaScript information
- http://www.addyosmani.com/resources/essentialjsdesignpatterns/book - Free online book that covers JavaScript Design Patterns
