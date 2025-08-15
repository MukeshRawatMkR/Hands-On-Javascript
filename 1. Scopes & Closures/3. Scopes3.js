/*
JavaScript is considered a hybrid language: it is both interpreted and compiled.

- Traditionally, JavaScript was interpreted by browsers: the source code was read and executed line by line.
- Modern JavaScript engines (like V8 in Chrome, SpiderMonkey in Firefox) use Just-In-Time (JIT) compilation:
    - The engine parses the code and compiles frequently used parts into machine code for faster execution.
    - Less-used code may still be interpreted.

Behind the scenes:
1. The JavaScript engine parses the source code and creates an Abstract Syntax Tree (AST).
2. The engine interprets the code and executes it.
3. For performance, the engine identifies "hot" code (code that runs often) and compiles it to optimized machine code.
4. The engine may de-optimize and re-optimize code as needed.

Summary:
- JavaScript starts as interpreted, but modern engines compile parts of it for speed.
- This hybrid approach makes JavaScript fast and flexible.
*/


/*
steps as soon as we run the JS code:
1. The engine parses the code and creates an AST.
2. The engine interprets the code and executes it, and the engine names are V8 (Chrome), SpiderMonkey (Firefox), and JavaScriptCore (Safari).
3. Hot code is compiled to machine code, hot code is code that is executed frequently and benefits from optimization, for example, tight loops or frequently called functions.
4. De-optimization may occur if assumptions are invalidated, in this case, the engine may revert to interpretation or recompile the code with different assumptions, for example, if the types of variables change or if the code is no longer considered hot.

and many other optimizations are possible, depending on the specific JavaScript engine and the code being executed.

*/