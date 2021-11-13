const indexPage = require("./views/index.j2h");
const aboutPage = require("./views/about.j2h");
const pretty = require("pretty");
const shouldPretty = false;

module.exports = {
    index(http) {
        const isRegister = http.query("register", false);

        const html = indexPage(isRegister);
        return shouldPretty ? pretty(html) : html;
    },

    about(http) {
        return shouldPretty ? pretty(aboutPage) : aboutPage;
    }
};
