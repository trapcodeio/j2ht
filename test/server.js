const path = require('path');
const xpresser = require('xpresser');

// Initialise Xpresser
const $ = xpresser({
    env: 'development',
    name: 'J2h Test Server',
    paths: {
        base: path.resolve(__dirname + '/../'),
        controllers: 'base://test',

        views: 'base://test/views'
    }
});


// Add Routes on boot
$.on.boot((next) => {
    $.router.get('/', 'Test@index');
    $.router.get('/about', 'Test@about');
    return next();
});

// Boot
$.boot();