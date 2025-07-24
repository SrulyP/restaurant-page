import "./css/styles.css";
import "./css/home.css";
import "./css/menu.css";
import "./css/about.css";

import renderHome from "./scripts/home";
import renderMenu from "./scripts/menu";
import renderAbout from "./scripts/about";

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
