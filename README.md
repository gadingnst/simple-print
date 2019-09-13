# Simple Print

[![GitHub](https://img.shields.io/github/license/sutanlab/simple-print)](https://github.com/sutanlab/simple-print) [![Build Status](https://travis-ci.org/sutanlab/simple-print.svg?branch=master)](https://travis-ci.org/sutanlab/simple-print) [![npm](https://img.shields.io/npm/dt/simple-print.svg)](https://www.npmjs.com/package/simple-print) [![npm](https://img.shields.io/bundlephobia/min/simple-print.svg)](https://unpkg.com/simple-print/lib/bundle/simple-print.min.js) [![GitHub issues](https://img.shields.io/github/issues/sutanlab/simple-print.svg)](https://github.com/sutanlab/simple-print/issues)

> Simple Javascript utility to print html element easier.

## Getting started

##### See [Demo Here](https://jsfiddle.net/sutanlab/d72ke1sL)

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

### 2. With CDN

```html
<!-- PRODUCTION BUILD -->
<script src="https://unpkg.com/simple-print/lib/bundle/simple-print.min.js"></script>

<!-- OR -->

<!-- DEVELOPMENT BUILD -->
<script src="https://unpkg.com/simple-print/lib/bundle/simple-print-dev.js"></script>
```

## How to Use

### Simple use 
```js
var print = new SimplePrint({
    styles: [
        'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
        'assets/css/your.css'
    ]
})

function btnClick() {
	print.render(document.getElementById('element-to-print'))
}
```

### With advanced options and callback
```js
var element = document.getElementById('element-to-print') 

var opts = {
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

var print = new SimplePrint(opts)

function btnClick() {
	// you can assign your new options like this
    print.options = {
        styles: [
            'your-path/other-style.css'
        ]
    }

    print.render(element, function() {
        console.log('Printing completed or was cancelled!')
    })
}
```

---

Feel free to contribute [simple-print](https://github.com/sutanlab/simple-print) 🙂

Copyright © 2019 by Sutan Gading Fadhillah Nasution