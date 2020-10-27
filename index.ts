import fs = require('fs');
import pretty = require('pretty');
import HtmlElement = require('./lib/HtmlElement');
import {HtmlElementContent} from "./lib/custom_types";

/**
 * RawHtml
 * @return {HtmlElement}
 * @constructor
 * @param contents
 */
export const RawHtml = (...contents: HtmlElementContent[]) => {
    for (const index in contents) {
        const val = contents[index];
        if (typeof val === "string") {
            contents[index] = val.trim()
        }
    }

    return new HtmlElement('').contents(contents);
};


/**
 * Builds an array of elements
 * @param contents
 * @return {*}
 * @constructor
 */
export const Elements = (...contents: any[]): string => HtmlElement.buildContent(contents, {excludeHTMLtag: true});

/**
 * Load contents from file.
 * @param filePath
 * @constructor
 */
export const FromFile = (filePath: string) => RawHtml(fs.readFileSync(filePath).toString());

/**
 * Create Element Tags on the fly
 * @param element
 * @param contents
 */
export const el = (element: any, ...contents: any[]) => new HtmlElement(element).contents(contents);


export {HtmlElement, pretty};