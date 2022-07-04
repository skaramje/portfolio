class Header {
    constructor(id, classList, textContent) {
        this.element = document.createElement('h5');
        this.id = id;
        this.classList = classList;
        this.textContent = textContent;
    }
    render(){
        this.element.id = this.id;
        this.element.textContent = this.textContent;
    }
    style(){
        this.element.classList.add(...this.classList);
    }
}
export { Header }