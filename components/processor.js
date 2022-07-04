import { Header } from "./header.js";
import { Navigation } from "./navigation.js";
import { Container } from "./container.js";
import { IoContainer } from "./io-container.js";

class Processor {
    constructor (structure) {
        this.element = document.createElement('div')
        this.ids = structure.ids
        this.classList = structure.classList

        this.header = new Header(structure.ids.header, structure.classList.header, structure.title)
        this.navigation = new Navigation(structure.ids.navigation, structure.classList.navigation, structure.buttons)
        this.container = new IoContainer(structure.ids.ioContainer, structure.classList.ioContainer)
    }

    render(){
        this.element.id = this.ids.processor;
        this.header.render();
        this.navigation.render();
        this.container.render();

        this.element.appendChild(this.header.element);
        this.element.appendChild(this.navigation.element);
        this.element.appendChild(this.container.element);
    }

    style(){
        this.element.classList.add(...this.classList.processor)
        this.header.style()
        this.navigation.style()
        this.container.style()
    }
    
    activate(){
        this.navigation.activate()
    }
}
export { Processor }