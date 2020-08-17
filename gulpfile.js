const connect = require('gulp-connect');
const { watchHTML, buildHTML } = require('./tasks/html');
const { watchSCSS, buildSCSS } = require('./tasks/scss');
const { watchJS, buildJS } = require('./tasks/js');
const { watchIMG, buildIMG } = require('./tasks/images');
const { watchMEDIA, buildMEDIA } = require('./tasks/media');

function dev(done) {
    watchHTML();
    watchSCSS();
    watchJS();
    watchIMG();
    watchMEDIA();
    connect.server({
        livereload: true,
        root: "tmp"
    })
    done()
}
function build(done) {
    buildHTML();
    buildSCSS();
    buildJS();
    buildIMG();
    buildMEDIA();
    done()
}
exports.default = dev;
exports.build = build;