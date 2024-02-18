import { computed } from "vue";
import AOS from "aos";
import { useStore } from 'stores/store';

export function useAos() {
    const store = useStore();

    const animationsEnable = computed( () => {
        return store.animationsEnable;
    });

    function checkAOS() {
        console.log("***------ checkAOS ------***");
    };

    function refreshHardAOS() {
        setTimeout( () => {
            AOS.refreshHard();
            console.log("***------ refreshHardAOS ------***");
        }, 800);
    };

    function refreshAOS() {
        setTimeout( () => {
            AOS.refresh();
            console.log("***------ refreshAOS ------***");
        }, 800);
    };

    function initAOS() {
        console.log("***------ initAOS ------***");
        AOS.init({
            // Global settings:
            disable: () => {
                return false;
            },
            offset: 50, // offset (in px) from the original trigger point
            // offset: 300, // offset (in px) from the original trigger point
            delay: 100, // values from 0 to 3000, with step 50ms
            duration: 850, // values from 0 to 3000, with step 50ms
            easing: "ease", // default easing for AOS animations
            once: true // whether animation should happen only once - while scrolling down
            //   anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
        });
    };

    return { 
        checkAOS,
        initAOS,
        refreshAOS,
        refreshHardAOS,
        animationsEnable,
    };
};
