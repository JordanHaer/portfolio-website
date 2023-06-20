---
id: 2
title: Styling with CSS
date: 2023-03-24
readTime: 5
tags: [CSS]
image: "/css.jpg"
---

### Introduction

CSS (Cascading Style Sheets) allows us to enhance the visual appeal of our web pages. Understanding CSS is essential for creating stylish and engaging user interfaces.

### Getting Started with CSS

CSS utilises selectors to target specific HTML elements and apply styles to them. Here's an example of how we link a CSS file to an HTML document:

```HTML
<!-- index.html -->
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Welcome to My Blog!</h1>
    <p>This is a sample paragraph.</p>
  </body>
</html>
```

In the above HTML code, we have a basic structure with a heading `<h1>` and a paragraph `<p>`. To style these elements, we link an external CSS file `styles.css` to our HTML document. This is how we style those elements using CSS:

```CSS
/* styles.css */
h1 {
  color: red;
  font-size: 24px;
}

p {
  color: blue;
  font-size: 16px;
}
```

In the CSS code above, we have defined styles for the `h1` and `p` elements. We set the color and font size properties to achieve the desired visual appearance. In the browser when viewing the page the colour of the heading text will be red and large and the text below will be blue and slighly smaller.

### Exploring Selectors and Properties

CSS offers a wide range of selectors and properties to select and style elements.

#### Class Selectors

Class selectors allow us to style multiple elements with the same class name. We define a class using the `.class-name` syntax in CSS and apply it to HTML elements using the `class` attribute. For example:

```HTML
<p class="highlight">This is a highlighted paragraph.</p>
```

```CSS
.highlight {
  background-color: yellow;
  font-weight: bold;
}
```

The above code applies a yellow background color and bold font weight to any element with the `highlight` class.

#### ID Selectors

ID selectors target a specific element with a unique ID. We define an ID using the `#id-name` syntax in CSS and apply it to HTML elements using the `id` attribute. For example:

```HTML
<p id="intro">This is the introduction paragraph.</p>
```

```CSS
#intro {
  font-style: italic;
}
```

In the above code, the introduction paragraph is styled with an italic font style using the `#intro` ID selector. Many elements can be styled with the same class, but only one element can be styled with an ID selector.

#### Common CSS Properties

CSS provides a vast array of properties to control various aspects of element styling. Here are a few commonly used properties:

- `color`: Sets the text color.
- `font-size`: Specifies the font size.
- `background-color`: Sets the background color.
- `margin`: Controls the margin space around an element.
- `padding`: Defines the padding space within an element.

### Responsive Design with CSS

In the era of mobile devices, responsive design is necessary when creating web pages. CSS offers functionality to create responsive layouts that adapt to different screen sizes. One commonly used approach is media queries:

```CSS
@media (max-width: 768px) {
  /* Styles applied when the screen width is 768 pixels or less */
  .title {
    font-size: 12px;
  }
}
```

In the above code, the styles within the media query are applied when the screen width is 768 pixels or less. In this example, we adjust the font size of the elements with the class "title" to 12 pixels, ensuring they fit well on smaller screens.

### Conclusion

CSS empowers web development with visual appeal and responsiveness. It separates presentation from content, enabling stunning designs across devices. Essential for modern web development.
