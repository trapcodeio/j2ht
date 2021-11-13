const { Div, Section, Button } = require("../../elements");

exports.Section = (...contents) => Section(...contents).class("section");
exports.Container = (...contents) => Div(...contents).class("container");
exports.Columns = (...contents) => Div(...contents).class("columns");
exports.Column = (size, contents) => Div(...contents).class(`column is-${size}`);

exports.FormField = (...contents) => Div(...contents).class("form-field mt-5");
exports.Control = (...contents) => Div(...contents).class("control");
exports.PrimaryButton = (content) => Button(content).class("button is-primary");
exports.DarkButton = (content) => Button(content).class("button is-dark");
