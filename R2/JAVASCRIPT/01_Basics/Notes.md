# JavaScript Data Types - Notes

## Official Documentation

* ECMAScript: [https://tc39.es/ecma262/](https://tc39.es/ecma262/)
* Mozilla Developer Network (MDN): [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## JavaScript Data Types

JavaScript has two main types of data types:

1. **Primitive**
2. **Non-Primitive / Reference**

---

## 1. Primitive Data Types (7 Types)

Primitive values are **immutable** (they cannot be changed).

| Data Type   | Example                                     | Description                        |
| ----------- | ------------------------------------------- | ---------------------------------- |
| `Number`    | `42`, `3.14`                                | Integers & floating point numbers  |
| `String`    | `'hello'`, `"JS"`                           | Sequence of characters             |
| `Boolean`   | `true`, `false`                             | Logical values                     |
| `Undefined` | `let x;`                                    | Variable declared but not assigned |
| `Null`      | `null`                                      | Intentional absence of value       |
| `Symbol`    | `Symbol('id')`                              | Unique and immutable identifiers   |
| `BigInt`    | `1234567890123456789012345678901234567890n` | For large integers                 |

### Notes:

* `typeof null` gives **"object"** → This is a well-known **JavaScript bug**.
* `BigInt` was introduced in **ES2020**.

---

## 2. Non-Primitive / Reference Data Types

Reference data types work via **memory reference** and are **mutable** (they can be changed).

| Data Type  | Example                        | Description                       |
| ---------- | ------------------------------ | --------------------------------- |
| `Object`   | `{name: 'Vikash', age: 25}`    | Collection of key-value pairs     |
| `Array`    | `[1, 2, 3]`                    | Ordered list (actually an object) |
| `Function` | `function greet() {}`          | Callable object                   |
| Others     | `Date`, `RegExp`, `Map`, `Set` | Specialized built-in objects      |

### Important:

All reference types are **internally objects**:

```js
typeof []            // "object"
typeof function(){}  // "function" (special kind of object)
typeof {}            // "object"
```

---

Happy Coding! 🚀
