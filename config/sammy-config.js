import Sammy from 'sammy';
import Template from 'template';
import jquery from 'jquery';

var start = function () {
    console.log("Starting...")
    var sammy = Sammy('#main', function () {
        console.log(this);
        this.get('/', function () {
            this.redirect('#/home');
        })
        this.get('#/home', function () {
        })
        this.get('#/register', function () {
            new Template('register').show('.container-regbar', {});
        })
        this.get('#/showlogin', function () {
            new Template('regbar').show('.container-regbar', {});
        });
        this.post('#/login', function(){

        })

        var current_user = false;        
        this.around(function checkLoggedIn(callback) {
            // /session returns a JSON representation of the logged in user
            // or an empty object
            if (this.path.indexOf('login') > -1 ||
                this.path.indexOf('register') > -1) {
                callback();
                return;
            }
            if (!current_user) {
                this.redirect('#/showlogin');
                // $.getJSON('/session', function (json) {
                //     if (json.login) {
                //         // show the user as logged in
                //         current_user = json;
                //         // execute the route path
                //         callback();
                //     } else {
                //         // show the user as not logged in
                //         current_user = false;
                //         // the context of aroundFilters is an EventContext
                //         this.redirect('#/login');
                //     }
                // });

            } else {
                // execute the route path
                callback();
            }
        });        
    })

    ;
    sammy.run('#/home');
}

export default {
    start: start
};
