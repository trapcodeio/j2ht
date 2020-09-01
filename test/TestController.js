const indexPage = require('./views/index.j2h');
const aboutPage = require('./views/about.j2h')
const pretty = require('pretty');

module.exports = {
    index() {
        const html = indexPage(true);
        const shouldPretty = false;
        return shouldPretty ? pretty(html) : html
    },

    about(http){
        const html = aboutPage();
        const shouldPretty = false;
        return shouldPretty ? pretty(html) : html
        // return http.view('index');
    }
}