const indexPage = require('./views/index.j2h');
const aboutPage = require('./views/about.j2h')
const pretty = require('pretty');
const shouldPretty = true;

module.exports = {
    index(http) {
        const isRegister = http.query('register', false);

        const html = indexPage(isRegister);
        return shouldPretty ? pretty(html) : html
    },

    about(http){
        const html = aboutPage();
        return shouldPretty ? pretty(html) : html
    }
}