'use strict';

module.exports = function (gulp, plugins, config, env) {
    return function () {
        gulp.src(config.dirUiRoot + 'src/typography/style.scss')
            .pipe(plugins.sass({
                outputStyle: env.prod ? 'compressed' : 'expanded',
                sourceComments: !env.prod
            }).on('error', plugins.sass.logError))
            .pipe(plugins.concatCss('typography.css'))
            .pipe(plugins.prefixer())
            //.pipe(cssmin())
            .pipe(env.prod || env.minify
                ? plugins.csso()
                : plugins.gutil.noop()
            )
            .pipe(gulp.dest(config.dirUiBuild))
            ;
    }
};