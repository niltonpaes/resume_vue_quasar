import { ref, computed, nextTick } from "vue";
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'stores/store';

export function useCore() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();



    const rootElement = computed( () => {
        // q-app - id
        // q-layout - class
        // q-page-container - class
        return document.querySelector('.q-layout');
    });


    function routeParamsIsStarted() {
        return route.params.isStarted === 'true';
    };


    const checkNetwork = async (callbackFunction) => {

        const maxAttempts = 4;
        const delayBetweenAttempts = 8000; // 8 seconds

        for (let attempt = 1; attempt <= maxAttempts; attempt++) {
            try {
                store.com.checkingConnection = true;
                const fileExists = await checkNetworkReadFile();

                console.log(fileExists ? 'Could read PING file' : 'Could NOT read PING file');

                // If the file check is successful, break out of the loop
                if (fileExists) {
                    store.com.checkingConnection = false;
                    callbackFunction();
                    break;
                }
            } catch (error) {
                console.error(`Error checking file existence (attempt ${attempt}):`, error);
            } finally {
                // If it's not the last attempt, wait for the specified delay
                if (attempt < maxAttempts) {
                    await new Promise(resolve => setTimeout(resolve, delayBetweenAttempts));
                }
                else {
                    store.com.checkingConnection = false;
                    store.com.lmsError = {
                        callSucceeded: false,
                        lastErrorCode: 0,
                        lastErrorMsg: "Connection issues. Check connection and try again"
                    }
                }
            }
        }
    }

    const checkNetworkReadFile = async () => {
        // debugger;
        try {
            const response = await fetch('./media/ping.txt', {
                method: 'GET',
                cache: 'no-store', // Set cache option to 'no-store'
            });
            return response.ok; // Returns true if the file exists, false otherwise
        } catch (error) {
            console.error('Error checking file existence:', error);
            return false;
        }
    }

    const scrollDown = async (pixels) => {
        await nextTick();

        window.scrollBy({
            top: pixels,
            left: 0,
            behavior: 'smooth'
        });
    };


    const scrollTop = async () => {
        await nextTick();

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };



    function complete() {
        store.rte_updateContentStatus( 
            {
                arg: store.getActivePage,
                status: 1,
            }
        );
    };


    function completePage(pageId) {
        store.rte_updateContentStatus(
            {
                arg: pageId,
                status: 1,
            }
        );
    };

    
    function completePageAndRoute(pageToComplete, pathtoRoute) {
        completePage(pageToComplete);
        routerTo(pathtoRoute);
    }


    function routerTo(path) {
        router.push({ path: path});
        // router.replace({ 
        //     path: path,
        //     meta: {
        //         noCache: true
        //     }
        // });
    };


    // findQuestionByID
    function findQuestionById(questionId, questionsArray) {
        const foundQuestion = questionsArray.find(question => question.id === questionId);
        return foundQuestion;
    }
  

    function focusH1() {
        setTimeout( () => {
            const focusTarget = document.getElementsByTagName("h1")[0];
            if (focusTarget) {
                focusTarget.setAttribute("tabindex", 0);
                focusTarget.focus();
            }
        }, 500);
    };
    
    
    function setFocusByRef(refElement, timeout) {
        const _timesout = timeout ? timeout : 0;
        setTimeout( () => {
            if (refElement.$el) {
                refElement.$el.focus({ preventScroll: true });
            }
        }, _timesout);
    };


    function setFocusById(idElement, timeout) {
        const _timesout = timeout ? timeout : 0;
        setTimeout( () => {
            const targetElement = document.getElementById(idElement);
            if (targetElement) {
                targetElement.focus({ preventScroll: true });
            }
        }, _timesout);
    };


    return { 
        scrollDown,
        scrollTop,
        complete,
        routerTo,
        completePage,
        focusH1,
        findQuestionById,
        rootElement,
        completePageAndRoute,
        routeParamsIsStarted,
        setFocusByRef,
        setFocusById,
        checkNetwork
    };
};
