# Classes

---

```js
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("hello, my name is " + this.name);
    }
}

const adam = new Person("Adam", 35);
adam.greet(); // hello, my name is Adam
```

-   Classes in JS are built on prototypes
-   **Hoisting**: An important difference between function declarations and
    class declarations is that while functions can be called in code that
    appears before they are defined, classes must be defined before they can be
    constructed.

```js
const p = new Rectangle(); // ReferenceError

class Rectangle {}
```

-   A **constructor** can use the super keyword to call the constructor of the
    super class.

```js
const obj = {
    foo: function () {
        // ...
    },
};
```

using ES6 can be shortened to

```js
const obj = {
    foo() {
        // ...
    },
};
```

-   **Generators** are functions that can be exited and later re-entered. Their
    context (variable bindings) will be saved across re-entrances.

```js
function* idMaker() {
    var index = 0;
    while (true) yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
// ...
```

-   Calling a generator function does not execute its body immediately; an
    iterator object for the function is returned instead. When the iterator's
    next() method is called, the generator function's body is executed until the
    first yield expression, which specifies the value to be returned from the
    iterator or, with yield\*, delegates to another generator function.
-   The asterisk (\*) in the shorthand syntax must be before the generator
    property name. (That is, \* idMaker(){} will work, but idMaker \*(){} will
    not.)
-   The **get** syntax binds an object property to a function that will be
    called when that property is looked up.

```js
const obj = {
    log: ["a", "b", "c"],
    get latest() {
        if (this.log.length === 0) {
            return undefined;
        }
        return this.log[this.log.length - 1];
    },
};

console.log(obj.latest);
// expected output: "c"
```

-   The **set** syntax binds an object property to a function to be called when
    there is an attempt to set that property.

```js
const language = {
    set current(name) {
        this.log.push(name);
    },
    log: [],
};

language.current = "EN";
language.current = "FA";

console.log(language.log);
// expected output: Array ["EN", "FA"]
```

-   The **static** keyword defines a static method or property for a class.
    Static members (properties and methods) are called without instantiating
    their class and cannot be called through a class instance.

```js
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static displayName = "Point";
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.displayName; // undefined
p1.distance; // undefined
p2.displayName; // undefined
p2.distance; // undefined

console.log(Point.displayName); // "Point"
console.log(Point.distance(p1, p2)); // 7.0710678118654755
```

-   The **extends** keyword is used in class declarations or class expressions
    to create a class as a child of another class.

```js
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name); // call the super class constructor and pass in the name parameter
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}

let d = new Dog("Mitzie");
d.speak(); // Mitzie barks.
```
