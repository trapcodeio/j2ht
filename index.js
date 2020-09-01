const fs = require('fs');
exports.pretty = require('pretty')
const HTMLElement = require('./lib/HTMLElement');

/**
 * RawHtml
 * @return {HTMLElement}
 * @constructor
 * @param contents
 */
const RawHtml = (...contents) => {
    for (const index in contents) {
        const val = contents[index];
        if (typeof val === "string") {
            contents[index] = val.trim()
        }
    }

    return new HTMLElement('').content(contents);
};
exports.RawHtml = RawHtml;


/**
 * Builds an array of elements
 * @param contents
 * @return {*}
 * @constructor
 */
const Elements = (...contents) => HTMLElement.buildContent(contents, {excludeHTMLtag: true});
exports.Elements = Elements;

exports.FromFile = (filePath) => RawHtml(fs.readFileSync(filePath).toString());

exports.HTMLElement = HTMLElement