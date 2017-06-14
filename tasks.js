'use strict';

module.exports = function(gulp, plugins, config, env){
    config.dirUiRoot = process.cwd() + '/';
    config.dirUiBuild = config.dirUiRoot + 'build/';

    function getUiTask(name) {
        return require(config.dirUiRoot + 'tasks/' + name)(gulp, plugins, config, env);
    }

    // DEFINE TASKS
    gulp.task('ui:hints', getUiTask('hints'));
};