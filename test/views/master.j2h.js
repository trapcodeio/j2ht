const { Section, Container } = require("./bulma-components");
const { Elements, RawHtml } = require("../../");
const { Doctype, Body, Html } = require("../../elements");

module.exports = (...contents) => {
    return Elements(
        Doctype(),
        Html(
            RawHtml(`
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    <title>Hello Bulma!</title>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css">
                </head>
            `),
            Body(Section(Container(...contents)))
        ).attr("lang", "en")
    );
};
