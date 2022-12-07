class Form {

    method = 'GET';
    items = [];
    constructor(container, method, action) {
        this.container = document.querySelector(container);
        this.method = method;
        this.action = action;
    }

    addItem(item) {
        this.items.push(item)
    }

    render() {
        let formElement = document.createElement('form');
        formElement.setAttribute('method', this.method)
    }
}

class Input {

    required = false;
    _type = 'text';

    constructor(name, label) {
        this.name = name;
        this.label = label;
    } 

    get type() {
        return this._type;
    }

    set type(t) {
        //console.log(t)
        if(['text', 'password', 'email', 'submit'].includes(t)) {
            //console.log(t)
            this._type = t;
            
        } else {
            throw new Error(`Input "${t}" type doens't exist`)
        }
    }


}
class Button extends Input {
    constructor(label) {
        super('', label)
        this.type = 'submit'
    }
}

//DEPLOYMENT

//Form
let form = new Form('formArea', 'POST', 'htts://google.com.br' )

//Email
let email = new Input('email', 'Digite seu email');
email.type = 'email';
email.required = true;
form.addItem(email);

//Password
let password = new Input('password', 'Digite sua senha');
password.type = 'password'
password.required = true;
form.addItem(password);

//Button
let button = new Button('Enviar')
form.addItem(button);

console.log(form.items);





