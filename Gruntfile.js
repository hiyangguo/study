'user strict';
/**
 * Created by YG on 2015/4/27.
 */


module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    var config = {
        app: 'famibao',
        dist: 'dist',
        server:{
            port: 9000,
            hostname: '*', //默认就是这个值，可配置为本机某个 IP，localhost 或域名
            livereload: 35729  //声明给 watch 监听的端口
        }
    }

    grunt.initConfig({
        config: config,
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            dist_all: {
                files: [
                    {
                        expand: true,
                        //源路径
                        cwd: '<%= config.app %>/',
                        src: ['**/*', '!less/**/*', '!less'],
                        //目标路径
                        dest: '<%= config.dist %>/',
                        //更改目标文件名的后缀
                        //ext: '.min.html',
                        //从什么地方开始修改后缀名
                        //first从第一个.开始 eg:index.max.html => index.min.html
                        //last从最后一个.开始 eg:index.max.html => index.max.min.html
                        //extDot: "last",
                        //展开平铺 为true 则复制后的文件 在目标文件夹的根目录 忽略其他中间目录
                        flatten: false
                        //后缀名重命名 在执行flatten后执行
                        /*rename: function (dest, src) {
                         return dest + "js/" + src;
                         }*/
                    }
                ]
            },
            dist_dev: {
                files: [
                    {
                        expand: true,
                        //源路径
                        cwd: '<%= config.app %>/',
                        src: ['**/*'],
                        //目标路径
                        dest: '<%= config.dist %>/',
                        //更改目标文件名的后缀
                        //ext: '.min.html',
                        //从什么地方开始修改后缀名
                        //first从第一个.开始 eg:index.max.html => index.min.html
                        //last从最后一个.开始 eg:index.max.html => index.max.min.html
                        //extDot: "last",
                        //展开平铺 为true 则复制后的文件 在目标文件夹的根目录 忽略其他中间目录
                        flatten: false
                        //后缀名重命名 在执行flatten后执行
                        /*rename: function (dest, src) {
                         return dest + "js/" + src;
                         }*/
                    }
                ]
            },
            css: {
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/css/',//css目录下
                    src: '**/*.css',//所有css文件
                    dest: '<%= config.dist %>/css/'//输出到此目录下
                    //ext: '.min.js'//修改后缀名
                }]
            },
            compass:{
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>',//css目录下
                    src: ['**/*', '!sass/**/*', '!images/sprites/**/*','!images/retina-version/**/*'],//所有css文件
                    dest: '<%= config.dist %>'//输出到此目录下
                }]
            }
        },
        //文件删除
        clean: {
            dist: {
                src: ['<%= config.dist %>/**/*'],
                //系统定义 保留文件夹
                //filter:'isFile'
                //自定义保留文件夹
                /*filter:function(filepath){
                 return (!grunt.file.isDir(filepath));
                 },*/
                //命中以.开头的文件
                //dot:true,

                //匹配路径的basename
                //matchBase:true,

                //处理动态的src=>dist的文件映射
                expand: true
            },
            lessMap:{
                src: ['<%= config.app %>/css/**/*.css.map'],
                expand: true
            },
            server: '.temp'
        },
        /**
         * [template 编译html 模板引擎handlebars]
         */
        template: {
            dev: {
                engine: 'handlebars',
                cwd: 'handlebars/tpl/',
                partials: ['handlebars/tpl/fixtures/**/*.hbs'],
                data: 'handlebars/tpl/data.json',
                options: {},
                files: [{
                    expand: true,
                    cwd:'handlebars/tpl/',
                    src: ['*.hbs'],
                    dest: 'handlebars/',
                    ext: '.html'
                }]
            }
        },
        compass: {                  // Task
            dist: {                   // Target
                options: {              // Target options
                    sassDir: '<%= config.app %>/sass',
                    cssDir: '<%= config.app %>/css',
                    environment: 'production'
                }
            },
            dev: {                    // Another target
                options: {
                    sassDir: '<%= config.app %>/sass',
                    cssDir: '<%= config.app %>/css',
                    imagesDir:'<%= config.app %>/images',
                    fontDir:'<%= config.app %>/fonts',
                    outputStyle: 'expanded',
                    debugInfo:true,
                    noLineComments:false,
                    environment: 'development'
                }
            }
        },
        uglify:    {
            /**
             * [seajs 合并Seajs扩展文件，并混淆压缩]
             */
            seajs: {
                files: {
                    "src/lib/vendor/sea.js": ["src/lib/vendor/seajs/*.js"]
                }
            },
            /**
             * [all 混淆压缩所以的页面模块文件]
             */
            all:   {
                files: [{
                    expand: true,
                    cwd:    'dist/',
                    src:    ['**/*.js'],
                    dest:   'dist/',
                    ext:    '.js'
                }]
            }
        }
    });


    var taskDefault = [];
    taskDefault.push('template');
    taskDefault.push('copy:dist_dev');

    var taskCompass = [];
    taskCompass.push('clean:dist')
    taskCompass.push('compass:dev');
    taskCompass.push('copy:compass');

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-template-html');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //创建dev工程
    grunt.registerTask('build_dev',taskDefault);
    grunt.registerTask('build_compass',taskCompass);

}
