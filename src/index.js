import "./styles.css";
import "./menu.css";

import renderHome from "./home";
import renderMenu from "./menu";
import renderAbout from "./about";

const Index = {
    init() {
        this.cacheDom();
        this.addEvents();
        renderHome();
    },

    cacheDom() {
        this.homeBtn = document.querySelector("#home");
        this.menuBtn = document.querySelector("#menu");
        this.aboutBtn = document.querySelector("#about");
    },

    addEvents() {
        this.homeBtn.addEventListener("click", renderHome);
        this.menuBtn.addEventListener("click", renderMenu);
        this.aboutBtn.addEventListener("click", renderAbout);
    },
};

Index.init();
