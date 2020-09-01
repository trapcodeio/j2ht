const Master = require('./master.j2h');
const {RawHtml, H3} = require("../../elements");

module.exports = () =>{
    return Master(
        RawHtml(`<h1 class="is-size-1"> Our About Page</h1>`),
        H3(`We don't have much to say here`).class('is-size-3'),
        RawHtml(`<h5 class="is-size-4"> A smaller text</h5>`),
    )
}