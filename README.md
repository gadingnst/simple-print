# Simple Print

[![GitHub](https://img.shields.io/github/license/sutanlab/simple-print)](https://github.com/sutanlab/simple-print) [![Build Status](https://travis-ci.org/sutanlab/simple-print.svg?branch=master)](https://travis-ci.org/sutanlab/simple-print) [![npm](https://img.shields.io/npm/dt/simple-print.svg)](https://www.npmjs.com/package/simple-print) [![npm](https://img.shields.io/bundlephobia/min/simple-print.svg)](https://unpkg.com/simple-print/lib/bundle/simple-print.min.js) [![GitHub issues](https://img.shields.io/github/issues/sutanlab/simple-print.svg)](https://github.com/sutanlab/simple-print/issues)

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