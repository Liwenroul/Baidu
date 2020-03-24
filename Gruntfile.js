module.exports=function(grunt){
  grunt.initConfig({
    htmlmin:{
      options:{
          removeComments:true,
          collapseWhitespace:true
      },
      files:{
          src:'./index.html',
          dest:'dist/index.html'
      }
    },
    cssmin:{
      'dist/baidu.min.css':'baidu.css'
    },
    uglify:{
      'dist/baidu.min.js':'baidu.js'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default',['htmlmin','cssmin','uglify']);
};