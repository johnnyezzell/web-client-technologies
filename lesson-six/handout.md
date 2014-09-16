Web Client Technologies
=======================

Lesson Six - RequireJS
----------------

###Topics

####AMD, it's not just a off brand processor manufacturer!

AMD stands for Asynchronous Module Definition.  AMD started as a part of the CommonJS specification.

The Good:

- Allows you to define reusable modules
- Helps you avoid the global namespace
- You can mix modules and global variables
- Asynchronous means that things aren't downloaded until they are needed

The Bad:

- Asynchronous means that somethings may not be loaded when they are needed
- Can be difficult to guarantee
- If you want all JavaScript to be loaded through AMD, you have to wrap your libraries in define wrapper.
- Wrapping libraries in define wrappers can be difficult if the library has dependencies

####RequireJS

RequireJS is the most commonly used AMD implementation.  It is used to provide define and require methods with allows us to create and consume modules.

- RequireJS fully supports AMD
- Implementing RequireJS modules can be straight forward

####ES6 Modules

ES6 modules are the official specification for modules which are part of the EcmaScript 6.

- Module support that will be built into the browser
- You can use ES6 modules now with a transpiler

### Reference Sites

- http://www.github.com/johnnyezzell/web-technology-series - The github that contains all the handouts and sample code for this series
- http://www.requirejs.org - RequireJS's home page
- http://github.com/google/traceur-compiler - ES6 Transpiler by Google
- https://github.com/esnext/es6-module-transpiler - Square's ES6 Module Transpiler
