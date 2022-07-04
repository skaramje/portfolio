import { Container } from './container.js';
class IoContainer {
    constructor(ids, classList) {
        this.classList = classList;
        this.ids = ids;
        this.element = document.createElement('div');
        this.inputContainer = new Container(ids.inputContainer, classList.inputContainer);
        this.outputContainer = new Container(ids.outputContainer, classList.outputContainer);
    }

    render() {
        this.element.id = this.ids.ioContainer;
        this.element.appendChild(this.inputContainer.element);
        this.element.appendChild(this.outputContainer.element);
    }

    style() {
        this.element.classList.add(...this.classList.ioContainer);
        this.inputContainer.style();
        this.outputContainer.style();
    }
}
export { IoContainer };