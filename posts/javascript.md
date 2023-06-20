---
id: 3
title: JavaScript Logic
date: 2023-04-03
readTime: 5
tags: [CSS, HTML]
image: "/javascript.jpg"
---

### Introduction

JavaScript is a popular high level programming language that brings interactivity and functionality to web page as it is able to run in the browser.

### Getting Started with JavaScript

To use JavaScript in our web pages it can be included directly in an HTML file using the `<script>` tag or in an external JavaScript file linked to the HTML document. Let&#39;s start with a simple example:

```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>My JavaScript Journey</title>
  </head>
  <body>
    <h1>Welcome to My JavaScript Blog Post!</h1>
    <p>JavaScript makes web pages interactive</p>
    <script src="script.js"></script>
  </body>
</html>
```

In the above HTML code, we have included an external JavaScript file named `script.js` using the `<script>` tag. This allows us to separate our JavaScript code from the HTML document for better organisation and maintainability.

### Exploring JavaScript Fundamentals

When learning a new programming language it is important to grasp the fundermentals.

#### Variables and Data Types

In JavaScript, variables are used to store and manipulate data. We can declare variables using the `var`, `let`, or `const` keywords. JavaScript supports various data types, including numbers, strings, booleans, arrays, objects, and more.

```JavaScript
// Variable declaration and data types
var name = "John";
let age = 25;
const PI = 3.14;
```

#### Functions and Control Flow

Functions allow us to reuse blocks of code, enhancing code organisation and reusability. JavaScript supports conditional statements (`if`, `else if`, `else`) and loops (`for`, `while`) for controlling the flow of execution.

```JavaScript
// Function declaration and control flow
function greet(name) {
  if (name === "Alice") {
    return "Hello, Alice!";
  } else {
    return "Hello, stranger!";
  }
}

let result = greet("Bob");
console.log(result); // Output: "Hello, stranger!"
```

### DOM Manipulation

One of JavaScript's key strengths is its ability to interact with the Document Object Model (DOM), enabling us to manipulate HTML elements dynamically. We can select and modify elements, listen to events, and create interactive web experiences.

```JavaScript
// DOM manipulation example
let heading = document.querySelector("h1");
heading.textContent = "Welcome to My JavaScript Blog!";
```

### Conclusion

JavaScript empowers us to create interactive web experiences and transform static web pages into dynamic applications.
