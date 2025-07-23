import "./styles.css";

const App = {
    init() {
        this.cacheDom();
        this.render();
        this.appending();
    },

    cacheDom() {
        this.mainContent = document.querySelector("#content");
    },

    render() {
        this.main = document.createElement("main");
    },

    appending() {
        this.mainContent.appendChild(this.main);
    },
};

App.init();
