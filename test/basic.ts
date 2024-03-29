import { pretty, RawHtml, Elements, el } from "../index";
import { Doctype, Head, Title, Body, H2, H5, Html } from "../elements";

const template = (user: string) =>
    Elements(
        Doctype(),
        Html(
            Head(Title("My First App")),
            Body(
                H2("Hello World"),
                RawHtml(`<h5>A message from RawHtml</h5>`),

                user === "paul" ? H5("Hey Paul 👋") : H5("Hey unknown user!! 😏"),

                el("Navbar", el("menu").class("menu")).class("navbar")
            )
        )
    );

console.time("TIME");
// console.log(pretty(template("!paul"), { ocd: true }));
console.log(template("!paul"));
console.timeEnd("TIME");
