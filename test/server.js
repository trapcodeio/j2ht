const path = require('path');
const xpresser = require('xpresser');

const $ = xpresser({
    name: 'J2h Test Server',
    paths: {
        base: path.resolve(__dirname + '/../'),
        controllers: 'base://test',

        views: 'base://test/views'
    }
});

$.on.boot((next) => {
    $.router.get('/', 'Test@index');
    $.router.get('/about', 'Test@about');
    return next()
})

$.boot();