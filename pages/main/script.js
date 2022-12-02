
import newCarusel from '../../assets/js/carusel.js';
import newBurger from '../../assets/js/burger.js';
//import newSlider from '../../assets/js/slider.js';

//MediaQuery
const mediaMobile = window.matchMedia('(max-width: 360px)');

//---------------------------------------

newBurger;
//newSlider;
if (!mediaMobile.matches) {
    newCarusel;
}

