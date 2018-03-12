import { createApp } from './main.js';

export default context => {
    // since there could potentially be asynchronous route hooks or components,
    // we will be returning a Promise so that the server can wait until
    // everything is ready before rendering.
    return new Promise((resolve, reject) => {
        const { app, router } = createApp();

        // set server-side router's location
        let url = context.url
        /*
        if (url.indexOf('lang=') === -1) {
          console.log(url)
          console.log(url.indexOf('?'))
          url += (url.indexOf('?') > 0) ? '&lang=en' : '?lang=en'
        }
        */
        console.log(url)
        router.push(url)
        // wait until router has resolved possible async components and hooks
        router.onReady(() => {
            
            const matchedComponents = router.getMatchedComponents();
            // no matched routes, reject with 404
            if (!matchedComponents.length) {
                return reject({ code: 404 });
            }
    
            // the Promise should resolve to the app instance so it can be rendered
            resolve(app);
        }, reject);
    });
}