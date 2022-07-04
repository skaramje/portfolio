class Container {
    constructor(id, classList) {
        this.element = document.createElement('div');
        this.id = id;
        this.classList = classList;
    }
    render() {
        this.element.id = this.id;
    }
    style() {
        this.element.classList.add(...this.classList);
    }
}

export { Container };