class Button {
    constructor (id, classList, onClickEvent, textContent){
        this.element = document.createElement('button');
        this.id = id;
        this.classList = classList;
        this.onClickEvent = onClickEvent;
        this.textContent = textContent;
    }
    render(){
        this.element.id = this.id;
        this.element.textContent = this.textContent;
    }
    style(){
        this.element.classList.add(...this.classList);
    }
    activate(){
        this.element.addEventListener('click', this.onClickEvent);
    }
}

export { Button }