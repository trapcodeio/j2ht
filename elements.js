const HTMLElement = require('./lib/HTMLElement');
const {RawHtml} = require('./index')

/**
 * <head>
 * @param content
 * @return {HTMLElement}
 * @constructor
 */
exports.Head = (...content) => new HTMLElement('head').content(content);

/**
 * <meta>
 * @return {HTMLElement}
 * @constructor
 */
exports.Meta = () => new HTMLElement('meta').noContent();

/**
 * <body>
 * @param content
 * @return {HTMLElement}
 * @constructor
 */
exports.Body = (...content) => new HTMLElement('body').content(content);

/**
 * <textarea>
 * @return {HTMLElement}
 * @constructor
 */
exports.Textarea = (...content) => new HTMLElement('textarea').content();

/**
 * <input/>
 * @param type
 * @param name
 * @return {HTMLElement}
 * @constructor
 */
exports.Input = (type, name) => {
    const element = new HTMLElement('input');
    if (type)
        element.attr({type})

    if (name)
        element.attr({name})

    return element.noContent()
}

exports.Template = () => new HTMLElement('template');

/**
 * <br/>
 * @return {HTMLElement}
 * @constructor
 */
exports.Br = () => new HTMLElement('br').noContent();

/**
 * <div>
 * @return {HTMLElement}
 * @constructor
 * @param contents
 */
exports.Div = (...contents) => new HTMLElement('div').content(contents);

/**
 * <h1>
 * @return {HTMLElement}
 * @constructor
 * @param contents
 */
exports.H1 = (...contents) => new HTMLElement('h1').content(contents);

/**
 * <h2>
 * @param contents
 * @return {HTMLElement}
 * @constructor
 */
exports.H2 = (...contents) => new HTMLElement('h2').content(contents);

/**
 * <h3>
 * @param contents
 * @return {HTMLElement}
 * @constructor
 */
exports.H3 = (...contents) => new HTMLElement('h3').content(contents);

/**
 * <h4>
 * @param contents
 * @return {HTMLElement}
 * @constructor
 */
exports.H4 = (...contents) => new HTMLElement('h4').content(contents);

/**
 * <h5>
 * @param contents
 * @return {HTMLElement}
 * @constructor
 */
exports.H5 = (...contents) => new HTMLElement('h5').content(contents);

/**
 * <h6>
 * @param contents
 * @return {HTMLElement}
 * @constructor
 */
exports.H6 = (...contents) => new HTMLElement('h6').content(contents);


/**
 * <p>
 * @param contents
 * @return {HTMLElement}
 * @constructor
 */
exports.P = (...contents) => new HTMLElement('p').content(contents);

/**
 * <span>
 * @return {HTMLElement}
 * @constructor
 */
exports.Span = (...contents) => new HTMLElement('span').content(contents);

/**
 * <button>
 * @param contents
 * @return {HTMLElement}
 * @constructor
 */
exports.Button = (...contents) => new HTMLElement('button').content(contents);

/**
 * <script>
 * @param contents
 * @return {HTMLElement}
 * @constructor
 */
exports.Script = (...contents) => new HTMLElement('script').content(contents);

/**
 * <label>
 * @param contents
 * @return {HTMLElement}
 * @constructor
 */
exports.Label = (...contents) => new HTMLElement('label').content(contents);

/**
 * <html>
 * @param contents
 * @return {HTMLElement}
 * @constructors
 */
exports.Html = (...contents) => new HTMLElement('html').content(contents);

/**
 * <!DOCTYPE html>
 * @param content
 * @return {*}
 * @constructor
 */
exports.Doctype = () => RawHtml(`<!DOCTYPE html>`)

/**
 * <title>
 * @param content
 * @return {HTMLElement}
 */
exports.Title = (content) => new HTMLElement('title').content(content)

/**
 * <link>
 * @return {HTMLElement}
 */
exports.Link = () => new HTMLElement('link').noContent();

/**
 * <section>
 * @param content
 * @return {HTMLElement}
 * @constructor
 */
exports.Section = (...content) => new HTMLElement('section').content(content);