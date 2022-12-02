//Carusel pets
function Slider(setting) {
    let privates = {};
    privates.setting = setting;

    privates.sel = {
        "main": document.querySelector(privates.setting.main),
        "wrap": document.querySelector(privates.setting.wrap),
        "items": document.querySelectorAll(privates.setting.items),
        "range": document.querySelector(privates.setting.range),
    }
    privates.currentPosition = 0;
    privates.widthSlide = privates.sel.items[0].offsetWidth;
    privates.lengthItems = privates.sel.items.length;

    //privates.countVisibleItems = 0;
    for (let i = 0; i < 12; i++) {
        let newItem = privates.sel.items[0].cloneNode(true);
        newItem.querySelector(".testimonials__name").innerHTML = `User ${4 + i}`;
        privates.sel.wrap.append(newItem);
    }
    privates.sel.items = document.querySelectorAll(privates.setting.items);
    privates.sel.range.max = privates.sel.items.length;
    //privates.sel.range.webkit
    //privates.countVisibleItems
    // for (let i = 0; i < privates.lengthItems; i++) {
    //     if (window.getComputedStyle(privates.sel.items[i], null).display !== "none") {
    //         ++privates.countVisibleItems;
    //     }
    // }

    //Events
    if (privates.sel.range !== null) {
        privates.sel.range.addEventListener("input", () => {
            this.move_slide();
        })
    }
    //Methods
    this.move_slide = () => {
        privates.currentPosition = privates.sel.range.value;
        for (let i = 0; i < privates.lengthItems; i++) {
            privates.sel.items[i].style.transform = `translateX(-${privates.currentPosition * privates.widthSlide}px)`;

        }
        // translateSlide(privates.width_slide);
        // setTimeout(function () {
        //     privates.sel.wrap.prepend(privates.currentSlides[2]);
        //     privates.currentSlides = document.querySelectorAll(privates.setting.slide);
        //     setRandomSlides(privates.currentSlides[0].items);
        //     translateSlide(0);
        // }, 1000);
    }


    //Function
    function translateSlide(pos) {
        privates.currentSlides.forEach((item) => {
            item.classList.toggle("move");
            item.style["transform"] = `translateX(${pos}px)`;
        })
    }
}

let newSlider = new Slider({
    "main": ".slider",
    "wrap": ".slider__wrapper",
    "items": ".slider__item",
    "range": ".slider__range",
})
export default newSlider;