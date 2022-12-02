//Carusel pets
function Carusel(setting) {
    let privates = {};
    privates.setting = setting;

    privates.sel = {
        "main": document.querySelector(privates.setting.main),
        "wrap": document.querySelector(privates.setting.wrap),
        "slide": document.querySelector(privates.setting.slide),
        "items": document.querySelectorAll(privates.setting.items),
        "prev": document.querySelector(privates.setting.prev),
        "next": document.querySelector(privates.setting.next),
    }
    privates.width_slide = document.querySelector(privates.setting.slide).offsetWidth;
    privates.lengthItems = document.querySelectorAll(privates.setting.items).length;
    privates.currentSlides = [];
    privates.countVisibleItems = 0;

    //privates.countVisibleItems
    for (let i = 0; i < privates.lengthItems; i++) {
        if (window.getComputedStyle(privates.sel.items[i], null).display !== "none") {
            ++privates.countVisibleItems;
        }
    }

    //privates.currentSlides
    for (let i = 0; i < 3; i++) {
        privates.currentSlides[i] = privates.sel.slide.cloneNode(true);
        privates.sel.wrap.append(privates.currentSlides[i]);
        privates.currentSlides[i].items = privates.currentSlides[i].querySelectorAll(privates.setting.items);
    }
    setRandomSlides(privates.currentSlides[0].items);
    setRandomSlides(privates.currentSlides[2].items);
    privates.sel.slide.remove();

    //Methods
    this.prev_slide = () => {
        privates.sel.prev.disabled = true;
        translateSlide(privates.width_slide);
        setTimeout(function () {
            privates.sel.wrap.prepend(privates.currentSlides[2]);
            privates.currentSlides = document.querySelectorAll(privates.setting.slide);
            setRandomSlides(privates.currentSlides[0].items);
            translateSlide(0);
            privates.sel.prev.disabled = false;
        }, 1000);
    }

    this.next_slide = () => {
        privates.sel.next.disabled = true;
        translateSlide(-privates.width_slide);
        setTimeout(function () {
            privates.sel.wrap.append(privates.currentSlides[0]);
            privates.currentSlides = document.querySelectorAll(privates.setting.slide);
            setRandomSlides(privates.currentSlides[2].items);
            translateSlide(0);
            privates.sel.next.disabled = false;
        }, 1000);
    }

    //Events
    if (privates.sel.prev !== null) {
        privates.sel.prev.addEventListener("click", () => {
            this.prev_slide();
        })
    }
    if (privates.sel.next !== null) {
        privates.sel.next.addEventListener("click", () => {
            this.next_slide();
        })
    }

    //Function
    function translateSlide(pos) {
        privates.currentSlides.forEach((item) => {
            item.classList.toggle("move");
            item.style["transform"] = `translateX(${pos}px)`;
        })
    }
    function setRandomSlides(items) {
        let numbersVisibleSlides = getRandom(privates.countVisibleItems, privates.lengthItems);
        for (let i = 0; i < privates.lengthItems; i++) {
            if (numbersVisibleSlides.has(i)) {
                items[i].style["display"] = "block";
            } else {
                items[i].style["display"] = "none";
            }
        }
    }
}
//Random set length {max_visible_slides} of numbers from 0 to {max_slides}
function getRandom(length_random_set, max_number) {
    let randomSet = new Set();
    while (randomSet.size < length_random_set) {
        randomSet.add(Math.floor(Math.random() * max_number) || 0);
    }
    return randomSet;
}
let newCarusel = new Carusel({
    "main": ".carusel",
    "wrap": ".carusel__wrap",
    "slide": ".carusel__slide",
    "items": ".carusel__item",
    "prev": ".carusel__prev",
    "next": ".carusel__next",
})
export default newCarusel;