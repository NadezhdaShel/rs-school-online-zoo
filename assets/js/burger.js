//Burger Menu
function Burger(setting) {
    let privates = {};
    privates.setting = setting;
    privates.navigation = document.getElementById(privates.setting.navigate);
    if (privates.navigation === null) { return; }

    privates.nav = {
        "navMini": privates.navigation.querySelector(privates.setting.navMini),
        "navList": privates.navigation.querySelector(privates.setting.navList),
    }
    privates.class_active = privates.setting.class_active;
    privates.extend = privates.setting.extend.map((item) => document.querySelector(item));

    //Methods
    this.clickMiniMenu = () => {
        privates.nav.navMini.classList.toggle(privates.class_active);
        privates.nav.navList.classList.toggle(privates.class_active);
        document.body.classList.toggle(privates.class_active);
        privates.extend.forEach(element => {
            element.classList.toggle(privates.class_active);
        });
    }

    if (privates.nav.navMini !== null) {
        privates.nav.navMini.addEventListener('click', () => {
            this.clickMiniMenu();
        });
    }
}

let newBurger = new Burger({
    "navigate": "navHeader",
    "navMini": ".nav__mini",
    "navList": ".nav__list",
    "class_active": "active-burger",
    "extend": [".header", ".logo__link"]
})

export default newBurger;