import tomatoSaladImg from "./images/tomato-salad.png";
import fattoushImg from "./images/fattoush.png";
import beetrootSaladImg from "./images/beetroot-salad.png";
import caesarSaladImg from "./images/caesar-salad.png";
import cheeseBoardImg from "./images/cheese-board.png";
import classicBurgerImg from "./images/classic-burger.png";
import falafelBurgerImg from "./images/falafel-burger.png";
import redefineBurgerImg from "./images/redefine-burger.png";
import friesImg from "./images/fries.png";
import grilledVeggiesImg from "./images/grilled-veggies.png";
import sweetPotatoImg from "./images/sweet-potato.png";
import baklavaImg from "./images/baklava.png";
import lavaCakeImg from "./images/lava-cake.png";
import aperolImg from "./images/aperol.png";
import sangriaImg from "./images/sangria.png";
import whiskeyImg from "./images/whiskey.png";
import mimosaImg from "./images/mimosa.png";
import lemonadeImg from "./images/lemonade.png";
import icedTeaImg from "./images/iced-tea.png";
import cokeImg from "./images/coke.png";

const MenuPage = {
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

        this.menuHeader = this.createEl("div", "menu-header");
        this.menuHeader_h2 = this.createEl("h2");

        // Food section
        this.foodSection = this.createEl("section", "food");

        // Salads
        this.salads = this.createEl("div", "salads");
        this.salads_h2 = this.createEl("h2");

        this.menuItem1 = this.createEl("div", "menu-item-1");
        this.menuItem1_img = this.createEl("img");
        this.menuItem1_h3 = this.createEl("h3");
        this.menuItem1_p = this.createEl("p");
        this.menuItem1_span = this.createEl("span", "price");

        this.menuItem2 = this.createEl("div", "menu-item-2");
        this.menuItem2_img = this.createEl("img");
        this.menuItem2_h3 = this.createEl("h3");
        this.menuItem2_p = this.createEl("p");
        this.menuItem2_span = this.createEl("span", "price");

        this.menuItem3 = this.createEl("div", "menu-item-3");
        this.menuItem3_img = this.createEl("img");
        this.menuItem3_h3 = this.createEl("h3");
        this.menuItem3_p = this.createEl("p");
        this.menuItem3_span = this.createEl("span", "price");

        this.menuItem4 = this.createEl("div", "menu-item-4");
        this.menuItem4_img = this.createEl("img");
        this.menuItem4_h3 = this.createEl("h3");
        this.menuItem4_p = this.createEl("p");
        this.menuItem4_span = this.createEl("span", "price");

        this.menuItem5 = this.createEl("div", "menu-item-5");
        this.menuItem5_img = this.createEl("img");
        this.menuItem5_h3 = this.createEl("h3");
        this.menuItem5_p = this.createEl("p");
        this.menuItem5_span = this.createEl("span", "price");

        // Burgers
        this.burgers = this.createEl("div", "burgers");
        this.burgers_h2 = this.createEl("h2");

        this.menuItem6 = this.createEl("div", "menu-item-6");
        this.menuItem6_img = this.createEl("img");
        this.menuItem6_h3 = this.createEl("h3");
        this.menuItem6_p = this.createEl("p");
        this.menuItem6_span = this.createEl("span", "price");

        this.menuItem7 = this.createEl("div", "menu-item-7");
        this.menuItem7_img = this.createEl("img");
        this.menuItem7_h3 = this.createEl("h3");
        this.menuItem7_p = this.createEl("p");
        this.menuItem7_span = this.createEl("span", "price");

        this.menuItem8 = this.createEl("div", "menu-item-8");
        this.menuItem8_img = this.createEl("img");
        this.menuItem8_h3 = this.createEl("h3");
        this.menuItem8_p = this.createEl("p");
        this.menuItem8_span = this.createEl("span", "price");

        // Sides
        this.sides = this.createEl("div", "sides");
        this.sides_h2 = this.createEl("h2");

        this.menuItem9 = this.createEl("div", "menu-item-9");
        this.menuItem9_img = this.createEl("img");
        this.menuItem9_h3 = this.createEl("h3");
        this.menuItem9_p = this.createEl("p");
        this.menuItem9_span = this.createEl("span", "price");

        this.menuItem10 = this.createEl("div", "menu-item-10");
        this.menuItem10_img = this.createEl("img");
        this.menuItem10_h3 = this.createEl("h3");
        this.menuItem10_p = this.createEl("p");
        this.menuItem10_span = this.createEl("span", "price");

        this.menuItem11 = this.createEl("div", "menu-item-11");
        this.menuItem11_img = this.createEl("img");
        this.menuItem11_h3 = this.createEl("h3");
        this.menuItem11_p = this.createEl("p");
        this.menuItem11_span = this.createEl("span", "price");

        // Desserts
        this.dessert = this.createEl("div", "dessert");
        this.dessert_h2 = this.createEl("h2");

        this.menuItem12 = this.createEl("div", "menu-item-12");
        this.menuItem12_img = this.createEl("img");
        this.menuItem12_h3 = this.createEl("h3");
        this.menuItem12_p = this.createEl("p");
        this.menuItem12_span = this.createEl("span", "price");

        this.menuItem13 = this.createEl("div", "menu-item-13");
        this.menuItem13_img = this.createEl("img");
        this.menuItem13_h3 = this.createEl("h3");
        this.menuItem13_p = this.createEl("p");
        this.menuItem13_span = this.createEl("span", "price");

        // Drinks section
        this.drinksSection = this.createEl("section", "drinks");

        // Alcohol
        this.alcohol = this.createEl("div", "alcohol");
        this.alcohol_h2 = this.createEl("h2");

        this.menuItem14 = this.createEl("div", "menu-item-14");
        this.menuItem14_img = this.createEl("img");
        this.menuItem14_h3 = this.createEl("h3");
        this.menuItem14_p = this.createEl("p");
        this.menuItem14_span = this.createEl("span", "price");

        this.menuItem15 = this.createEl("div", "menu-item-15");
        this.menuItem15_img = this.createEl("img");
        this.menuItem15_h3 = this.createEl("h3");
        this.menuItem15_p = this.createEl("p");
        this.menuItem15_span = this.createEl("span", "price");

        this.menuItem16 = this.createEl("div", "menu-item-16");
        this.menuItem16_img = this.createEl("img");
        this.menuItem16_h3 = this.createEl("h3");
        this.menuItem16_p = this.createEl("p");
        this.menuItem16_span = this.createEl("span", "price");

        this.menuItem17 = this.createEl("div", "menu-item-17");
        this.menuItem17_img = this.createEl("img");
        this.menuItem17_h3 = this.createEl("h3");
        this.menuItem17_p = this.createEl("p");
        this.menuItem17_span = this.createEl("span", "price");

        // Soft Drinks
        this.softDrinks = this.createEl("div", "soft-drinks");
        this.softDrinks_h2 = this.createEl("h2");

        this.menuItem18 = this.createEl("div", "menu-item-18");
        this.menuItem18_img = this.createEl("img");
        this.menuItem18_h3 = this.createEl("h3");
        this.menuItem18_p = this.createEl("p");
        this.menuItem18_span = this.createEl("span", "price");

        this.menuItem19 = this.createEl("div", "menu-item-19");
        this.menuItem19_img = this.createEl("img");
        this.menuItem19_h3 = this.createEl("h3");
        this.menuItem19_p = this.createEl("p");
        this.menuItem19_span = this.createEl("span", "price");

        this.menuItem20 = this.createEl("div", "menu-item-20");
        this.menuItem20_img = this.createEl("img");
        this.menuItem20_h3 = this.createEl("h3");
        this.menuItem20_p = this.createEl("p");
        this.menuItem20_span = this.createEl("span", "price");
    },

    textFilling() {
        this.menuHeader_h2.textContent = "Our Menu";

        // Salads
        this.salads_h2.textContent = "Salads";

        this.menuItem1_img.src = tomatoSaladImg;
        this.menuItem1_img.alt = "Tomato Salad";
        this.menuItem1_h3.textContent = "Tomato Salad";
        this.menuItem1_p.textContent = "Fresh tomatoes, herbs, and a splash of balsamic.";
        this.menuItem1_span.textContent = "₪38";

        this.menuItem2_img.src = fattoushImg;
        this.menuItem2_img.alt = "Fattoush";
        this.menuItem2_h3.textContent = "Fattoush";
        this.menuItem2_p.textContent = "Traditional Levantine salad with crispy pita.";
        this.menuItem2_span.textContent = "₪36";

        this.menuItem3_img.src = beetrootSaladImg;
        this.menuItem3_img.alt = "Beetroot & Walnut";
        this.menuItem3_h3.textContent = "Beetroot & Walnut";
        this.menuItem3_p.textContent = "Roasted beetroot with crunchy walnuts and herbs.";
        this.menuItem3_span.textContent = "₪42";

        this.menuItem4_img.src = caesarSaladImg;
        this.menuItem4_img.alt = "Caesar Salad";
        this.menuItem4_h3.textContent = "Caesar Salad";
        this.menuItem4_p.textContent = "Romaine lettuce, parmesan, croutons & Caesar dressing.";
        this.menuItem4_span.textContent = "₪39";

        this.menuItem5_img.src = cheeseBoardImg;
        this.menuItem5_img.alt = "Cheese Board";
        this.menuItem5_h3.textContent = "Cheese Board";
        this.menuItem5_p.textContent = "Assortment of fine cheeses with fruit & crackers.";
        this.menuItem5_span.textContent = "₪44";

        // Burgers
        this.burgers_h2.textContent = "Burgers";

        this.menuItem6_img.src = classicBurgerImg;
        this.menuItem6_img.alt = "Classic Beef Burger";
        this.menuItem6_h3.textContent = "Classic Beef Burger";
        this.menuItem6_p.textContent = "Grilled beef patty with tomato, lettuce and sauce.";
        this.menuItem6_span.textContent = "₪58";

        this.menuItem7_img.src = falafelBurgerImg;
        this.menuItem7_img.alt = "Falafel Burger";
        this.menuItem7_h3.textContent = "Falafel Burger (V)";
        this.menuItem7_p.textContent = "Chickpea patty with tahini and pickles.";
        this.menuItem7_span.textContent = "₪44";

        this.menuItem8_img.src = redefineBurgerImg;
        this.menuItem8_img.alt = "Redefine Burger";
        this.menuItem8_h3.textContent = "Redefine Burger (V)";
        this.menuItem8_p.textContent = "Plant-based patty with lettuce and smoky mayo.";
        this.menuItem8_span.textContent = "₪49";

        // Sides
        this.sides_h2.textContent = "Sides";

        this.menuItem9_img.src = friesImg;
        this.menuItem9_img.alt = "Fries";
        this.menuItem9_h3.textContent = "Fries";
        this.menuItem9_p.textContent = "Classic salted potato fries.";
        this.menuItem9_span.textContent = "₪18";

        this.menuItem10_img.src = grilledVeggiesImg;
        this.menuItem10_img.alt = "Grilled Veggies";
        this.menuItem10_h3.textContent = "Grilled Veggies";
        this.menuItem10_p.textContent = "Chargrilled vegetables with olive oil drizzle.";
        this.menuItem10_span.textContent = "₪24";

        this.menuItem11_img.src = sweetPotatoImg;
        this.menuItem11_img.alt = "Sweet Potato Wedges";
        this.menuItem11_h3.textContent = "Sweet Potato Wedges";
        this.menuItem11_p.textContent = "Oven-roasted sweet potatoes with aioli.";
        this.menuItem11_span.textContent = "₪22";

        // Desserts
        this.dessert_h2.textContent = "Desserts";

        this.menuItem12_img.src = baklavaImg;
        this.menuItem12_img.alt = "Baklava";
        this.menuItem12_h3.textContent = "Baklava";
        this.menuItem12_p.textContent = "Flaky layers of pastry with honey and nuts.";
        this.menuItem12_span.textContent = "₪28";

        this.menuItem13_img.src = lavaCakeImg;
        this.menuItem13_img.alt = "Chocolate Lava Cake";
        this.menuItem13_h3.textContent = "Chocolate Lava Cake";
        this.menuItem13_p.textContent = "Rich molten chocolate center in a soft cake.";
        this.menuItem13_span.textContent = "₪32";

        // Alcohol
        this.alcohol_h2.textContent = "Alcohol";

        this.menuItem14_img.src = aperolImg;
        this.menuItem14_img.alt = "Aperol Spritz";
        this.menuItem14_h3.textContent = "Aperol Spritz";
        this.menuItem14_p.textContent = "Light and bubbly cocktail with orange notes.";
        this.menuItem14_span.textContent = "₪38";

        this.menuItem15_img.src = sangriaImg;
        this.menuItem15_img.alt = "White Sangria";
        this.menuItem15_h3.textContent = "White Sangria";
        this.menuItem15_p.textContent = "Refreshing blend of wine, citrus, and apple.";
        this.menuItem15_span.textContent = "₪36";

        this.menuItem16_img.src = whiskeyImg;
        this.menuItem16_img.alt = "Whiskey Sour";
        this.menuItem16_h3.textContent = "Whiskey Sour";
        this.menuItem16_p.textContent = "Bourbon whiskey shaken with citrus and sugar.";
        this.menuItem16_span.textContent = "₪42";

        this.menuItem17_img.src = mimosaImg;
        this.menuItem17_img.alt = "Mimosa";
        this.menuItem17_h3.textContent = "Mimosa";
        this.menuItem17_p.textContent = "Orange juice and sparkling wine cocktail.";
        this.menuItem17_span.textContent = "₪34";

        // Soft Drinks
        this.softDrinks_h2.textContent = "Soft Drinks";

        this.menuItem18_img.src = lemonadeImg;
        this.menuItem18_img.alt = "Lemonade";
        this.menuItem18_h3.textContent = "Homemade Lemonade";
        this.menuItem18_p.textContent = "Fresh lemon, mint and touch of honey.";
        this.menuItem18_span.textContent = "₪16";

        this.menuItem19_img.src = icedTeaImg;
        this.menuItem19_img.alt = "Mint Ice Tea";
        this.menuItem19_h3.textContent = "Mint Ice Tea";
        this.menuItem19_p.textContent = "Cold brew tea with fresh mint infusion.";
        this.menuItem19_span.textContent = "₪16";

        this.menuItem20_img.src = cokeImg;
        this.menuItem20_img.alt = "Coca-Cola";
        this.menuItem20_h3.textContent = "Coca-Cola";
        this.menuItem20_p.textContent = "Classic chilled Coke.";
        this.menuItem20_span.textContent = "₪10";
    },

    appending() {
        this.mainContent.appendChild(this.main);

        this.main.appendChild(this.menuHeader);
        this.menuHeader.appendChild(this.menuHeader_h2);

        this.main.appendChild(this.foodSection);
        this.main.appendChild(this.drinksSection);

        // Food section
        this.foodSection.appendChild(this.salads);
        this.foodSection.appendChild(this.burgers);
        this.foodSection.appendChild(this.sides);
        this.foodSection.appendChild(this.dessert);

        // Salads
        this.salads.appendChild(this.salads_h2);

        this.salads.appendChild(this.menuItem1);
        this.menuItem1.appendChild(this.menuItem1_img);
        this.menuItem1.appendChild(this.menuItem1_h3);
        this.menuItem1.appendChild(this.menuItem1_p);
        this.menuItem1.appendChild(this.menuItem1_span);

        this.salads.appendChild(this.menuItem2);
        this.menuItem2.appendChild(this.menuItem2_img);
        this.menuItem2.appendChild(this.menuItem2_h3);
        this.menuItem2.appendChild(this.menuItem2_p);
        this.menuItem2.appendChild(this.menuItem2_span);

        this.salads.appendChild(this.menuItem3);
        this.menuItem3.appendChild(this.menuItem3_img);
        this.menuItem3.appendChild(this.menuItem3_h3);
        this.menuItem3.appendChild(this.menuItem3_p);
        this.menuItem3.appendChild(this.menuItem3_span);

        this.salads.appendChild(this.menuItem4);
        this.menuItem4.appendChild(this.menuItem4_img);
        this.menuItem4.appendChild(this.menuItem4_h3);
        this.menuItem4.appendChild(this.menuItem4_p);
        this.menuItem4.appendChild(this.menuItem4_span);

        this.salads.appendChild(this.menuItem5);
        this.menuItem5.appendChild(this.menuItem5_img);
        this.menuItem5.appendChild(this.menuItem5_h3);
        this.menuItem5.appendChild(this.menuItem5_p);
        this.menuItem5.appendChild(this.menuItem5_span);

        // Burgers
        this.burgers.appendChild(this.burgers_h2);

        this.burgers.appendChild(this.menuItem6);
        this.menuItem6.appendChild(this.menuItem6_img);
        this.menuItem6.appendChild(this.menuItem6_h3);
        this.menuItem6.appendChild(this.menuItem6_p);
        this.menuItem6.appendChild(this.menuItem6_span);

        this.burgers.appendChild(this.menuItem7);
        this.menuItem7.appendChild(this.menuItem7_img);
        this.menuItem7.appendChild(this.menuItem7_h3);
        this.menuItem7.appendChild(this.menuItem7_p);
        this.menuItem7.appendChild(this.menuItem7_span);

        this.burgers.appendChild(this.menuItem8);
        this.menuItem8.appendChild(this.menuItem8_img);
        this.menuItem8.appendChild(this.menuItem8_h3);
        this.menuItem8.appendChild(this.menuItem8_p);
        this.menuItem8.appendChild(this.menuItem8_span);

        // Sides
        this.sides.appendChild(this.sides_h2);

        this.sides.appendChild(this.menuItem9);
        this.menuItem9.appendChild(this.menuItem9_img);
        this.menuItem9.appendChild(this.menuItem9_h3);
        this.menuItem9.appendChild(this.menuItem9_p);
        this.menuItem9.appendChild(this.menuItem9_span);

        this.sides.appendChild(this.menuItem10);
        this.menuItem10.appendChild(this.menuItem10_img);
        this.menuItem10.appendChild(this.menuItem10_h3);
        this.menuItem10.appendChild(this.menuItem10_p);
        this.menuItem10.appendChild(this.menuItem10_span);

        this.sides.appendChild(this.menuItem11);
        this.menuItem11.appendChild(this.menuItem11_img);
        this.menuItem11.appendChild(this.menuItem11_h3);
        this.menuItem11.appendChild(this.menuItem11_p);
        this.menuItem11.appendChild(this.menuItem11_span);

        // Desserts
        this.dessert.appendChild(this.dessert_h2);

        this.dessert.appendChild(this.menuItem12);
        this.menuItem12.appendChild(this.menuItem12_img);
        this.menuItem12.appendChild(this.menuItem12_h3);
        this.menuItem12.appendChild(this.menuItem12_p);
        this.menuItem12.appendChild(this.menuItem12_span);

        this.dessert.appendChild(this.menuItem13);
        this.menuItem13.appendChild(this.menuItem13_img);
        this.menuItem13.appendChild(this.menuItem13_h3);
        this.menuItem13.appendChild(this.menuItem13_p);
        this.menuItem13.appendChild(this.menuItem13_span);

        // Drinks section
        this.drinksSection.appendChild(this.alcohol);
        this.drinksSection.appendChild(this.softDrinks);

        // Alcohol
        this.alcohol.appendChild(this.alcohol_h2);

        this.alcohol.appendChild(this.menuItem14);
        this.menuItem14.appendChild(this.menuItem14_img);
        this.menuItem14.appendChild(this.menuItem14_h3);
        this.menuItem14.appendChild(this.menuItem14_p);
        this.menuItem14.appendChild(this.menuItem14_span);

        this.alcohol.appendChild(this.menuItem15);
        this.menuItem15.appendChild(this.menuItem15_img);
        this.menuItem15.appendChild(this.menuItem15_h3);
        this.menuItem15.appendChild(this.menuItem15_p);
        this.menuItem15.appendChild(this.menuItem15_span);

        this.alcohol.appendChild(this.menuItem16);
        this.menuItem16.appendChild(this.menuItem16_img);
        this.menuItem16.appendChild(this.menuItem16_h3);
        this.menuItem16.appendChild(this.menuItem16_p);
        this.menuItem16.appendChild(this.menuItem16_span);

        this.alcohol.appendChild(this.menuItem17);
        this.menuItem17.appendChild(this.menuItem17_img);
        this.menuItem17.appendChild(this.menuItem17_h3);
        this.menuItem17.appendChild(this.menuItem17_p);
        this.menuItem17.appendChild(this.menuItem17_span);

        // Soft Drinks
        this.softDrinks.appendChild(this.softDrinks_h2);

        this.softDrinks.appendChild(this.menuItem18);
        this.menuItem18.appendChild(this.menuItem18_img);
        this.menuItem18.appendChild(this.menuItem18_h3);
        this.menuItem18.appendChild(this.menuItem18_p);
        this.menuItem18.appendChild(this.menuItem18_span);

        this.softDrinks.appendChild(this.menuItem19);
        this.menuItem19.appendChild(this.menuItem19_img);
        this.menuItem19.appendChild(this.menuItem19_h3);
        this.menuItem19.appendChild(this.menuItem19_p);
        this.menuItem19.appendChild(this.menuItem19_span);

        this.softDrinks.appendChild(this.menuItem20);
        this.menuItem20.appendChild(this.menuItem20_img);
        this.menuItem20.appendChild(this.menuItem20_h3);
        this.menuItem20.appendChild(this.menuItem20_p);
        this.menuItem20.appendChild(this.menuItem20_span);
    },
};

export default function renderMenu() {
    MenuPage.init();
}