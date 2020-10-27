import HtmlElement = require('./lib/HtmlElement');
import {RawHtml} from "./index";
import {HtmlElementContent} from "./lib/custom_types";

/**
 * <head>
 * @return {HtmlElement}
 * @constructor
 * @param contents
 */
export const Head = (...contents: HtmlElementContent[]) => new HtmlElement('head').contents(contents);

/**
 * <meta>
 * @return {HtmlElement}
 * @constructor
 */
export const Meta = () => new HtmlElement('meta').noContent();

/**
 * <body>
 * @return {HtmlElement}
 * @constructor
 * @param contents
 */
export const Body = (...contents: HtmlElementContent[]) => new HtmlElement('body').contents(contents);

/**
 * <textarea>
 * @return {HtmlElement}
 * @constructor
 */
export const Textarea = (content: HtmlElementContent) => new HtmlElement('textarea').content(content);

/**
 * <input/>
 * @param type
 * @param name
 * @return {HtmlElement}
 * @constructor
 */
export const Input = (type: string, name: string) => {
    const element = new HtmlElement('input');
    if (type)
        element.attr({type})

    if (name)
        element.attr({name})

    return element.noContent()
}

/**
 * <template/>
 * @return {HtmlElement}
 * @constructor
 */
export const Template = () => new HtmlElement('template');

/**
 * <br/>
 * @return {HtmlElement}
 * @constructor
 */
export const Br = () => new HtmlElement('br').noContent();

/**
 * <div>
 * @return {HtmlElement}
 * @constructor
 * @param contents
 */
export const Div = (...contents: HtmlElementContent[]) => new HtmlElement('div').contents(contents);

/**
 * <h1>
 * @return {HtmlElement}
 * @constructor
 * @param contents
 */
export const H1 = (...contents: HtmlElementContent[]) => new HtmlElement('h1').contents(contents);

/**
 * <h2>
 * @param contents
 * @return {HtmlElement}
 * @constructor
 */
export const H2 = (...contents: HtmlElementContent[]) => new HtmlElement('h2').contents(contents);

/**
 * <h3>
 * @param contents
 * @return {HtmlElement}
 * @constructor
 */
export const H3 = (...contents: HtmlElementContent[]) => new HtmlElement('h3').contents(contents);

/**
 * <h4>
 * @param contents
 * @return {HtmlElement}
 * @constructor
 */
export const H4 = (...contents: HtmlElementContent[]) => new HtmlElement('h4').contents(contents);

/**
 * <h5>
 * @param contents
 * @return {HtmlElement}
 * @constructor
 */
export const H5 = (...contents: HtmlElementContent[]) => new HtmlElement('h5').contents(contents);

/**
 * <h6>
 * @param contents
 * @return {HtmlElement}
 * @constructor
 */
export const H6 = (...contents: HtmlElementContent[]) => new HtmlElement('h6').contents(contents);


/**
 * <p>
 * @param contents
 * @return {HtmlElement}
 * @constructor
 */
export const P = (...contents: HtmlElementContent[]) => new HtmlElement('p').contents(contents);

/**
 * <span>
 * @return {HtmlElement}
 * @constructor
 */
export const Span = (...contents: HtmlElementContent[]) => new HtmlElement('span').contents(contents);

/**
 * <button>
 * @param contents
 * @return {HtmlElement}
 * @constructor
 */
export const Button = (...contents: HtmlElementContent[]) => new HtmlElement('button').contents(contents);

/**
 * <script>
 * @param contents
 * @return {HtmlElement}
 * @constructor
 */
export const Script = (...contents: HtmlElementContent[]) => new HtmlElement('script').contents(contents);

/**
 * <label>
 * @param contents
 * @return {HtmlElement}
 * @constructor
 */
export const Label = (...contents: HtmlElementContent[]) => new HtmlElement('label').contents(contents);

/**
 * <html>
 * @param contents
 * @return {HtmlElement}
 * @constructors
 */
export const Html = (...contents: HtmlElementContent[]) => new HtmlElement('html').contents(contents);

/**
 * <!DOCTYPE html>
 * @param content
 * @return {*}
 * @constructor
 */
export const Doctype = () => RawHtml(`<!DOCTYPE html>`)

/**
 * <title>
 * @param content
 * @return {HtmlElement}
 */
export const Title = (content: string) => new HtmlElement('title').content(content)

/**
 * <link>
 * @return {HtmlElement}
 */
export const Link = () => new HtmlElement('link').noContent();

/**
 * <section>
 * @param contents
 * @return {HtmlElement}
 * @constructor
 */
export const Section = (...contents: HtmlElementContent[]) => new HtmlElement('section').contents(contents);

/**
 * <form>
 * @param contents
 * @return {HtmlElement}
 * @constructor
 */
export const Form = (...contents: HtmlElementContent[]) => new HtmlElement('form').contents(contents);