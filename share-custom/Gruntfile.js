module.exports = function (grunt) {
    // 任务配置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // 压缩文件
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            compressjs: {
                files: {
                    './build/share.min.js': ['./lib/share.js']
                }
            }
        },
        // 语法检查
        jshint: {
            files: ['lib/*.js']
        },
        // 监听文件变动
        watch: {
            scripts: {
                files: ['lib/*.js'],
                tasks: ['jshint', 'uglify: compressjs']
            }
        }
    });

    // 插件加载
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 任务注册
    grunt.registerTask('default', ['jshint', 'uglify', 'watch'])
}