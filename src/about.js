const AboutPage = {
    init() {
        this.cacheDom();
        this.render();
        this.textFilling();
        this.appending();
    },

    cacheDom() {
        this.mainContent = document.querySelector("#content");
    },

    createEl(tag, className = null) {
        const el = document.createElement(tag);
        if (className) el.classList.add(className);
        return el;
    },

    render() {
        this.mainContent.innerHTML = "";
        
        this.main = this.createEl("main");
    },

    textFilling() {
    },

    appending() {
        this.mainContent.appendChild(this.main);
    },
};

export default function renderAbout() {
    AboutPage.init();
}

