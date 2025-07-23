import "./styles.css";

const Index = {
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
        this.main = this.createEl("main");

        this.top = this.createEl("div", "top");
        this.top_h2 = this.createEl("h2");
        this.top_h3 = this.createEl("h3");
        this.top_p = this.createEl("p");

        this.middle = this.createEl("div", "middle");
        this.middle_img = this.createEl("img");
        this.location_and_info = this.createEl("div", "location-and-info");
        this.middle_h3 = this.createEl("h3");

        this.information = this.createEl("div", "information");

        this.address = this.createEl("div", "address");
        this.address_h4 = this.createEl("h4");
        this.address_p = this.createEl("p");

        this.phone = this.createEl("div", "phone");
        this.phone_h4 = this.createEl("h4");
        this.phone_p = this.createEl("p");

        this.hours = this.createEl("div", "hours");
        this.hours_row = this.createEl("div", "hours-row");
        this.hours_span_day = this.createEl("span", "day");
        this.hours_span_time = this.createEl("span", "time");

        this.iframe = document.createElement("iframe");
    },

    textFilling() {
        this.top_h2.textContent = "Welcome to Méli";
        this.top_h3.textContent = "Restaurant and Bar";
        this.top_p.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt ipsa, reprehenderit velit voluptates voluptatem alias. Libero esse rem modi ipsam! Id nam cum quas repellat natus.";
    },

    appending() {
        this.mainContent.appendChild(this.main);
        this.main.appendChild(this.top);
        this.top.appendChild(this.top_h2);
        this.top.appendChild(this.top_h3);
        this.top.appendChild(this.top_p);
    }
};

Index.init();
