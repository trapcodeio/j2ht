import HtmlElement = require('./lib/HtmlElement');
import { HtmlElementContent } from "./lib/custom_types";
/**
 * <head>
 * @return {HtmlElement}
 * @constructor
 * @param contents
 */
export declare const Head: (...contents: HtmlElementContent[]) => HtmlElement;
/**
 * <meta>
 * @return {HtmlElement}
 * @constructor
 */
export declare const Meta: () => HtmlElement;
/**
 * <body>
 * @return {HtmlElement}
 * @constructor
 * @param contents
 */
export declare const Body: (...contents: HtmlElementContent[]) => HtmlElement;
/**
 * <textarea>
 * @return {HtmlElement}
 * @constructor
 */
export declare const Textarea: (content: HtmlElementContent) => HtmlElement;
/**
 * <input/>
 * @param type
 * @param name
 * @return {HtmlElement}
 * @constructor
 */
export declare const Input: (type: string, name: string) => HtmlElement;
/**
 * <template/>
 * @return {HtmlElement}
 * @constructor
 */
export declare const Template: () => HtmlElement;
/**
 * <br/>
 * @return {HtmlElement}
 * @constructor
 */
export declare const Br: () => HtmlElement;
/**
 * <div>
 * @return {HtmlElement}
 * @constructor
 * @param contents
 */
export declare const Div: (...contents: HtmlElementContent[]) => HtmlElement;
/**
 * <h1>
 * @return {HtmlElement}
 * @constructor
 * @param contents
 */
export declare const H1: (...contents: HtmlElementContent[]) => HtmlElement;
/**
 * <h2>
 * @param contents
 * @return {HtmlElement}
 * @constructor
 */
export declare const H2: (...contents: HtmlElementContent[]) => HtmlElement;
/**
 * <h3>
 * @param contents
 * @return {HtmlElement}
 * @constructor
 */
export declare const H3: (...contents: HtmlElementContent[]) => HtmlElement;
/**
 * <h4>
 * @param contents
 * @return {HtmlElement}
 * @constructor
 */
export declare const H4: (...contents: HtmlElementContent[]) => HtmlElement;
/**
 * <h5>
 * @param contents
 * @return {HtmlElement}
 * @constructor
 */
export declare const H5: (...contents: HtmlElementContent[]) => HtmlElement;
/**
 * <h6>
 * @param contents
 * @return {HtmlElement}
 * @constructor
 */
export declare const H6: (...contents: HtmlElementContent[]) => HtmlElement;
/**
 * <p>
 * @param contents
 * @return {HtmlElement}
 * @constructor
 */
export declare const P: (...contents: HtmlElementContent[]) => HtmlElement;
/**
 * <span>
 * @return {HtmlElement}
 * @constructor
 */
export declare const Span: (...contents: HtmlElementContent[]) => HtmlElement;
/**
 * <button>
 * @param contents
 * @return {HtmlElement}
 * @constructor
 */
export declare const Button: (...contents: HtmlElementContent[]) => HtmlElement;
/**
 * <script>
 * @param contents
 * @return {HtmlElement}
 * @constructor
 */
export declare const Script: (...contents: HtmlElementContent[]) => HtmlElement;
/**
 * <label>
 * @param contents
 * @return {HtmlElement}
 * @constructor
 */
export declare const Label: (...contents: HtmlElementContent[]) => HtmlElement;
/**
 * <html>
 * @param contents
 * @return {HtmlElement}
 * @constructors
 */
export declare const Html: (...contents: HtmlElementContent[]) => HtmlElement;
/**
 * <!DOCTYPE html>
 * @param content
 * @return {*}
 * @constructor
 */
export declare const Doctype: () => HtmlElement;
/**
 * <title>
 * @param content
 * @return {HtmlElement}
 */
export declare const Title: (content: string) => HtmlElement;
/**
 * <link>
 * @return {HtmlElement}
 */
export declare const Link: () => HtmlElement;
/**
 * <section>
 * @param contents
 * @return {HtmlElement}
 * @constructor
 */
export declare const Section: (...contents: HtmlElementContent[]) => HtmlElement;
/**
 * <form>
 * @param contents
 * @return {HtmlElement}
 * @constructor
 */
export declare const Form: (...contents: HtmlElementContent[]) => HtmlElement;
