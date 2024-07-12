console.log(" ==================","\n","app.js script Loading","\n","==================");

(() => {
    "use strict";
    console.log(" ==================","\n","PreLoader Entering","\n","==================");

    setTimeout(() => {
        const preLoaderWrapper = document.querySelector('.preLoader-wrapper');
        const appRoot = document.querySelector('app-root');

        if (preLoaderWrapper && appRoot) {
            preLoaderWrapper.style.display = 'none'; 
            appRoot.style.display = 'block';
        } else {
            console.error('Elements not found...!');
        }
    }, 4000);
})();

console.log(" ==================","\n","app.js script Loaded","\n","==================");
