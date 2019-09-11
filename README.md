# Simple Print

> Lightweight utility to print html element easier.

## Getting started

### 1. Use Package with NPM or YARN with ES6 import

```bash
# with npm
$ npm i simple-print --save

# or with yarn
$ yarn add simple-print
```

```js
import SimplePrint from 'simple-print'
```

### 2. All in minified js

```html
<script src="https://unpkg.com/simple-print/lib/bundle/simple-print.min.js"></script>
```

## How to Use

### Simple use 
```js
SimplePrint.options = {
    styles: [
        'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
        'assets/css/your.css'
    ]
}

SimplePrint.render(document.getElementById('element-to-print'))
```

### With more options and callback
```js
const element = document.getElementById('element-to-print') 

const opts = {
    name: '_blank',
    specs: [
        'fullscreen=yes',
        'titlebar=yes',
        'scrollbars=yes'
    ],
    styles: [
        'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
    ]
}

SimplePrint.options = opts

SimplePrint.render(element, function() {
    console.log('Printing completed or was cancelled!')
})
```

---

Feel free to contribute [simple-print](https://github.com/sutanlab/simple-print) 🙂

Copyright © 2019 by Sutan Gading Fadhillah Nasution