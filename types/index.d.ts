import pretty = require('pretty');
import HtmlElement = require('./lib/HtmlElement');
import { HtmlElementContent } from "./lib/custom_types";
/**
 * RawHtml
 * @return {HtmlElement}
 * @constructor
 * @param contents
 */
export declare const RawHtml: (...contents: HtmlElementContent[]) => HtmlElement;
/**
 * Builds an array of elements
 * @param contents
 * @return {*}
 * @constructor
 */
export declare const Elements: (...contents: any[]) => string;
/**
 * Load contents from file.
 * @param filePath
 * @constructor
 */
export declare const FromFile: (filePath: string) => HtmlElement;
/**
 * Create Element Tags on the fly
 * @param element
 * @param contents
 */
export declare const el: (element: any, ...contents: any[]) => HtmlElement;
export { HtmlElement, pretty };
