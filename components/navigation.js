import { Button } from "./button.js";

class Navigation {
    constructor(ids, classList, buttons){
        this.element = document.createElement('nav');
        this.buttons = buttons;
        this.classList = classList;
        this.ids = ids;
    }
    render(){
        let buttonObjects = [];
        this.element.id = this.ids.navigation;
        for (let key in this.buttons){
            let button = new Button(this.ids.buttons[key], this.classList.buttons[key], this.buttons[key], key);
            button.render();
            buttonObjects.push(button);
        }

        this.buttons = buttonObjects;

        for(let i = 0; i < this.buttons.length; i++){
            this.element.appendChild(this.buttons[i].element);
        }
    }

    style(){
        this.element.classList.add(...this.classList.navigation)
        for (let i = 0; i < this.buttons.length; i++){
            this.buttons[i].style();
        }
    }

    activate(){
        for (let i = 0; i < this.buttons.length; i++){
            this.buttons[i].activate()
        }
    }
}

export { Navigation }