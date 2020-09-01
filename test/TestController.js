const indexPage = require('./views/index.j2h');
const aboutPage = require('./views/about.j2h')
const pretty = require('pretty');

module.exports = {
    index(http) {
        const isRegister = http.query('register', false);

        const html = indexPage(isRegister);
        const shouldPretty = false;
        return shouldPretty ? pretty(html) : html
    },

    about(http){
        const html = aboutPage();
        const shouldPretty = false;
        return shouldPretty ? pretty(html) : html
    }
}