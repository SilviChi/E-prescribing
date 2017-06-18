import jquery from 'jquery';
import Handlebars from 'handlebars';

class Template {
    constructor(name) {
        this.name = name;
    }
    load() {
        var name = this.name;
        return new Promise(function (resolve, reject) {
            var aKeyName = localStorage.key(name)
            console.log(aKeyName);
            var url = 'templates/' + name + '.handlebars'

            if (aKeyName && aKeyName > -1) {
                resolve(localStorage.getItem(name));
                return;
            }
            $.ajax({
                url: url, //why we need this
                success: function (data) {
                    localStorage.setItem(name, data);
                    resolve(data)
                },
                error: function (err) { reject(err) }
            })
        });
    }
    show(selector, params) {
        var name = this.name;
        console.log("loading " + this.name + " on " + selector);
        this.load().then(templateHTML => {
            console.log("template: " + name + " loaded");
            let template = Handlebars.compile(templateHTML);
            $(selector).html(template(params));
        })
    }
}
export default Template;
