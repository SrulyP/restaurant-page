import "./styles.css";
import mimosaImg from "./images/mimosa-cocktail-with-dark-background.jpg";


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
        this.hours_h4 = this.createEl("h4");

        this.sun = this.createEl("div", "hours-row");
        this.sun_day = this.createEl("span", "day");
        this.sun_time = this.createEl("span", "time");

        this.mon = this.createEl("div", "hours-row");
        this.mon_day = this.createEl("span", "day");
        this.mon_time = this.createEl("span", "time");

        this.tue = this.createEl("div", "hours-row");
        this.tue_day = this.createEl("span", "day");
        this.tue_time = this.createEl("span", "time");

        this.wed = this.createEl("div", "hours-row");
        this.wed_day = this.createEl("span", "day");
        this.wed_time = this.createEl("span", "time");

        this.thu = this.createEl("div", "hours-row");
        this.thu_day = this.createEl("span", "day");
        this.thu_time = this.createEl("span", "time");

        this.fri = this.createEl("div", "hours-row");
        this.fri_day = this.createEl("span", "day");
        this.fri_time = this.createEl("span", "time");

        this.sat = this.createEl("div", "hours-row");
        this.sat_day = this.createEl("span", "day");
        this.sat_time = this.createEl("span", "time");

        this.iframe = document.createElement("iframe");
    },

    textFilling() {
        this.top_h2.textContent = "Welcome to Méli";
        this.top_h3.textContent = "Restaurant and Bar";
        this.top_p.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt ipsa, reprehenderit velit voluptates voluptatem alias. Libero esse rem modi ipsam! Id nam cum quas repellat natus.";
        this.middle_img.src = mimosaImg;
        this.middle_h3.textContent = "Our Location";

        this.address_h4.textContent = "Address";
        this.address_p.textContent = "123 Tel Aviv-Yafo";

        this.phone_h4.textContent = "Phone";
        this.phone_p.textContent = "052-2P9-XY91";

        this.hours_h4.textContent = "Hours";

        this.sun_day.textContent = "Sun:";
        this.sun_time.textContent = "12:00 - 20:00";

        this.mon_day.textContent = "Mon:";
        this.mon_time.textContent = "12:00 - 23:30";

        this.tue_day.textContent = "Tue:";
        this.tue_time.textContent = "12:00 - 23:30";

        this.wed_day.textContent = "Wed:";
        this.wed_time.textContent = "12:00 - 23:30";

        this.thu_day.textContent = "Thu:";
        this.thu_time.textContent = "12:00 - 0:00";

        this.fri_day.textContent = "Fri:";
        this.fri_time.textContent = "0:00 - 16:00";

        this.sat_day.textContent = "Sat:";
        this.sat_time.textContent = "Closed";

        this.iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13521.862426146177!2d34.78655379742339!3d32.08369963337272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0xc1fb72a2c0963f90!2sTel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1753264409090!5m2!1sen!2sil";
        this.iframe.style.border = "0";
        this.iframe.allowFullscreen = true;
        this.iframe.loading = "lazy";
        this.iframe.referrerPolicy = "no-referrer-when-downgrade";
    },

    appending() {
        this.mainContent.appendChild(this.main);

        this.main.appendChild(this.top);
        this.top.appendChild(this.top_h2);
        this.top.appendChild(this.top_h3);
        this.top.appendChild(this.top_p);

        this.main.appendChild(this.middle);
        this.middle.appendChild(this.middle_img);
        this.middle.appendChild(this.location_and_info);

        this.location_and_info.appendChild(this.middle_h3);
        this.location_and_info.appendChild(this.information);
        this.location_and_info.appendChild(this.iframe);

        this.information.appendChild(this.address);
        this.address.appendChild(this.address_h4);
        this.address.appendChild(this.address_p);

        this.information.appendChild(this.phone);
        this.phone.appendChild(this.phone_h4);
        this.phone.appendChild(this.phone_p);

        this.information.appendChild(this.hours);
        this.hours.appendChild(this.hours_h4);

        this.sun.appendChild(this.sun_day);
        this.sun.appendChild(this.sun_time);
        this.hours.appendChild(this.sun);

        this.mon.appendChild(this.mon_day);
        this.mon.appendChild(this.mon_time);
        this.hours.appendChild(this.mon);

        this.tue.appendChild(this.tue_day);
        this.tue.appendChild(this.tue_time);
        this.hours.appendChild(this.tue);

        this.wed.appendChild(this.wed_day);
        this.wed.appendChild(this.wed_time);
        this.hours.appendChild(this.wed);

        this.thu.appendChild(this.thu_day);
        this.thu.appendChild(this.thu_time);
        this.hours.appendChild(this.thu);

        this.fri.appendChild(this.fri_day);
        this.fri.appendChild(this.fri_time);
        this.hours.appendChild(this.fri);

        this.sat.appendChild(this.sat_day);
        this.sat.appendChild(this.sat_time);
        this.hours.appendChild(this.sat);
    },
};

Index.init();
