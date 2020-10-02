const {pretty, RawHtml, Elements, HTMLElement} = require('../index');
const {
    Doctype, Head, Title,
    Body, H2, H5, Html,
} = require('../elements');

const user = 'paul!';


const Element = (element, contents) => new HTMLElement(element).content(contents);

const template = Elements(
    Doctype(),
    Html(
        Head(Title('My First App')),
        Body(
            H2('Hello World'),
            RawHtml(`<h5>A message from RawHtml</h5>`),

            user === 'paul' ?
                H5('Hey Paul 👋') : H5('Hey unknown user! 😏'),

            Element('navbar', [
                Element('menu', []).class('menu')
            ]).class('navbar')
        ),
    )
);

console.log(pretty(template));