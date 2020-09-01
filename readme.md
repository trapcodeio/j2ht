# J2ht (Under Development)
J2ht is a **Javascript to html template Engine** created for no reason at the time of posting.

The idea came when I stumbled upon this library [html-creator](https://www.npmjs.com/package/html-creator), and before then i have always wanted to **extend** html without using any template engine just some codes, and I ended up with a template engine lol. 

It may feel weird when you think about it but I find it kinda fun and hope you do too.

## Installation
### Npm
```shell script
npm i j2ht
```
### Yarn
```shell script
yarn add j2ht
```

## Demo
If you clone this repo there are some examples you can examine using your I.D.E

* node tests/basic.js  - A basic console example
* node tests/server.js  - A server example using [Xpresser](https://www.npmjs.com/package/xpresser)
* node tests/merge.js  - An example showing how to import views and merge them.

## Basic Usage
```javascript
const {pretty, RawHtml, Elements} = require('j2ht');
const { Doctype, Head, Title, Body, H2, H5 } = require('j2ht/elements');

const user = 'paul';

const template = Elements(
    Doctype(),
    Html(
        Head(Title('My First App')),
        Body(
             H2('Hello World'),
             RawHtml(`<h5>A message from RawHtml</h5>`),
            
             // Conditional views. 
             () => user === 'paul' ?
                 H5('Hey Paul 👋') : H5('Hey unknown user! 😏')
        ),
    )
)

console.log(pretty(template));
```

This will return
```html
<!DOCTYPE html>
<html>
  <head>
    <title>My First App</title>
  </head>

  <body>
    <h2>Hello World</h2>
    <h5>A message from RawHtml</h5>
    <h5>Hey Paul 👋</h5>
  </body>

</html>
```


### For Merging Views only
File Structure
```
-html
    -footer.html
    -header.html
    -Home.html
app.js
```

**app.js**
```javascript
const {pretty, Elements, FromFile} = require('j2ht');

const template2 = Elements(
    FromFile(__dirname + '/html/header.html'),
    FromFile(__dirname + '/html/Home.html'),
    FromFile(__dirname + '/html/footer.html'),
)

console.log(pretty(template2));
```

## Elements
For now only few html elements are out of the box. i will add new ones in the near future.
But adding yours is not difficult.

if you take a look at the `elements.js` file you can see how default elements are created.
<br/> For example `<div>` was created using the following line

```javascript
const {HTMLElement} = require('j2ht');
exports.Div = (...contents) => new HTMLElement('div').content(contents);

// To create a table element
exports.Table = (...contents) => new HTMLElement('table').content(contents);
```

Every `HTMLElement` instance has a `render()` method that builds it and returns html data
```javascript
const {Div, H1} = require('j2ht/elements');

const component = Div(H1('Hello World'))

console.log(component.render());
```
Calling `.render()` will render and return
```html
<div><h1>Hello World</h1></div>
```


## Components
j2ht being javascript can be easily extendable.

Lets make a bulma buttons component `bulma-buttons.js`
```javascript
const {Button} = require('j2ht/elements');

exports.PrimaryButton = (...content) => Button(...content).class('button is-primary');
exports.SuccessButton = (...content) => Button(...content).class('button is-success');
```

Notice how we always use spread operators? this is because of the syntax concept where Elements are functions, and their arguments are child contents.
```javascript
const {Div} = require('j2ht/elements');
const {PrimaryButton, DangerButton} = require('./bulma-buttons');

Div(
    PrimaryButton('Save'),
    DangerButton('Cancel')
)
```
`Div` is a function while `H1` and `H2` are arguments. you can also pass them as an array.
```javascript
Div([
    PrimaryButton('Save'),
    DangerButton('Cancel')
])
```
Both will render
```html
<div>
    <button class="button is-primary">Save</button>
    <button class="button is-danger">Cancel</button>
</div>
```

I will keep adding more features and maybe along the line i will find more use for it.
<br/>
Feel free to contribute if you like this project.
