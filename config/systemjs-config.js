System.config({
    transpiler: 'plugin-babel',   //for work with es2015

    map: {
        'plugin-babel': '../node_modules/systemjs-plugin-babel/plugin-babel',
        'systemjs-babel-build': '../node_modules/systemjs-plugin-babel/systemjs-babel-browser',
        'source-map' : '../node_modules/source-map/source-map',
        sammy:'../node_modules/sammy/lib/sammy',
        jquery:'../node_modules/jquery/dist/jquery',
        handlebars: '../node_modules/handlebars/dist/cjs/handlebars',
        'firebase-config': '../config/firebase-config',
        template: '../js/template',
        router: '../config/sammy-config',
        main : '../js/main'
    },
     packages: {
        '/': {
            defaultExtension: 'js'
        }
    }
})