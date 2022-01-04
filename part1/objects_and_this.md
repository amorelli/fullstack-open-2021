# Object methods and "this"

---

-   "this" keyword is relevant when defining methods on objects.
-   When using React Hooks, and arrow functions, we can avoid having to use
    "this".
-   "this" refers to the object on which a method exists when it is called.

```js
const arto = {
    name: "Arto Hellas",
    greet: function () {
        console.log("hello, my name is " + this.name);
    },
};
```

-   If we create a reference to the method, the scope of "this" defaults to the
    global object scope.

```js
const referenceToMethod = arto.greet;
referenceToMethod(); // returns "hello, my name is undefined"
```

-   One way to preserve the correct scope is to use the _bind()_ method.

```js
setTimeout(arto.greet.bind(arto), 1000);
```

-   Using arrow functions, we can avoid such problems, but arrow functions
    should not be used to define object methods, because "this" will not work at
    all.
