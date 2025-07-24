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

        // About header
        this.aboutHeader = this.createEl("div", "about-header");
        this.aboutHeader_h2 = this.createEl("h2");

        // History section
        this.historySection = this.createEl("section", "history");
        this.historySection_h2 = this.createEl("h2");
        this.historySection_p1 = this.createEl("p");
        this.historySection_p2 = this.createEl("p");
        this.historySection_p3 = this.createEl("p");

        // Contact section
        this.contactSection = this.createEl("section", "contact");
        this.contactSection_h2 = this.createEl("h2");
        this.contactSection_p = this.createEl("p");

        this.contactInfo = this.createEl("div", "contact-info");

        this.contactItem1 = this.createEl("div", "contact-item");
        this.contactItem1_h3 = this.createEl("h3");
        this.contactItem1_p = this.createEl("p");

        this.contactItem2 = this.createEl("div", "contact-item");
        this.contactItem2_h3 = this.createEl("h3");
        this.contactItem2_p = this.createEl("p");

        this.contactItem3 = this.createEl("div", "contact-item");
        this.contactItem3_h3 = this.createEl("h3");
        this.contactItem3_p = this.createEl("p");
    },

    textFilling() {
        this.aboutHeader_h2.textContent = "About Méli";

        // History section
        this.historySection_h2.textContent = "History of Méli";
        this.historySection_p1.textContent = "Founded in 2018 in the heart of Tel Aviv, Méli began as a dream to bring authentic Mediterranean flavors with a modern twist to our vibrant community. Our name 'Méli' comes from the Greek word for honey, reflecting our commitment to the natural sweetness and warmth that defines Mediterranean hospitality.";
        this.historySection_p2.textContent = "What started as a small family kitchen has grown into a beloved neighborhood gathering place. We source our ingredients from local farmers and artisans, ensuring that every dish tells a story of tradition, quality, and passion. From our handcrafted falafels to our signature cocktails, each item on our menu represents years of perfecting recipes passed down through generations.";
        this.historySection_p3.textContent = "Today, Méli stands as more than just a restaurant, we're a community hub where friends gather, families celebrate, and strangers become friends over shared meals. Our commitment to sustainability, local sourcing, and authentic flavors continues to drive everything we do.";

        // Contact section
        this.contactSection_h2.textContent = "Get in Touch";
        this.contactSection_p.textContent = "We'd love to hear from you! Whether you have questions about our menu, want to make a reservation, or are interested in private events, don't hesitate to reach out.";

        this.contactItem1_h3.textContent = "Phone";
        this.contactItem1_p.textContent = "052-2P9-XY91";

        this.contactItem2_h3.textContent = "Email";
        this.contactItem2_p.textContent = "about@Méli-tlv.com";

        this.contactItem3_h3.textContent = "Address";
        this.contactItem3_p.textContent = "123 Tel Aviv, Israel";
    },

    appending() {
        this.mainContent.appendChild(this.main);

        this.main.appendChild(this.aboutHeader);
        this.aboutHeader.appendChild(this.aboutHeader_h2);

        this.main.appendChild(this.historySection);
        this.historySection.appendChild(this.historySection_h2);
        this.historySection.appendChild(this.historySection_p1);
        this.historySection.appendChild(this.historySection_p2);
        this.historySection.appendChild(this.historySection_p3);

        this.main.appendChild(this.contactSection);
        this.contactSection.appendChild(this.contactSection_h2);
        this.contactSection.appendChild(this.contactSection_p);
        this.contactSection.appendChild(this.contactInfo);

        this.contactInfo.appendChild(this.contactItem1);
        this.contactItem1.appendChild(this.contactItem1_h3);
        this.contactItem1.appendChild(this.contactItem1_p);

        this.contactInfo.appendChild(this.contactItem2);
        this.contactItem2.appendChild(this.contactItem2_h3);
        this.contactItem2.appendChild(this.contactItem2_p);

        this.contactInfo.appendChild(this.contactItem3);
        this.contactItem3.appendChild(this.contactItem3_h3);
        this.contactItem3.appendChild(this.contactItem3_p);
    },
};

export default function renderAbout() {
    AboutPage.init();
}