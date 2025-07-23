import "./styles.css";

const Index = {
    init() {
        this.cacheDom();
        this.render();
        this.textFilling()
        this.appending();
    },

    cacheDom() {
        this.mainContent = document.querySelector("#content");
    },

    render() {
        this.main = document.createElement("main");
        this.top = document.createElement("div");
        this.top_h2 = document.createElement("h2");
        this.top_h3 = document.createElement("h3");
        this.top_p = document.createElement("p");
    },

    appending() {
        this.mainContent.appendChild(this.main);
        this.main.appendChild(this.top);
        this.top.appendChild(this.top_h2);
        this.top.appendChild(this.top_h3);
        this.top.appendChild(this.top_p);
    },

    textFilling() {
        this.top_h2.textContent = "Welcome to Méli";
        this.top_h3.textContent = "Restaurant and Bar";
        this.top_p.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt ipsa, reprehenderit velit voluptates voluptatem alias. Libero esse rem modi ipsam! Id nam cum quas repellat natus.";


    },
};

Index.init();
