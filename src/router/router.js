// router.js
import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import Root from '../components/Root.vue';
import TeamsRegistration from '../components/TeamsRegistration.vue';
import GalaRegistration from '../components/GalaRegistration.vue';
import VolunteeringRegistration from '../components/VolunteeringRegistration.vue';
import MealsBooking from '../components/MealsBooking.vue';

Vue.use(Router);


const getLangs = function () {
  return '/:lang(en|fr|de)'
}

export function createRouter (i18n) {
   const router = new Router({
    mode: 'history',
    routes: [
     { path: getLangs(), component: Root,
       children: [
         { path: '', name:'home', component: Home },
         { path: 'teams-registration', name:'TeamsRegistration', component: TeamsRegistration },
         { path: 'gala-registration', name:'GalaRegistration', component: GalaRegistration },
         { path: 'meals-booking', name:'MealsBooking', component: MealsBooking },
         { path: 'volunteering-registration', name:'VolunteeringRegistration', component: VolunteeringRegistration }
       ]
     }
    ]
    /*
    routes: [
      { path: '/', component: Home },
      { path: '/about', component: About }
    ]
    */
  });
  router.afterEach((to, from) => {
    Vue.config.lang = to.params.lang
    i18n.locale = to.params.lang
  })

  router.beforeEach((to, from, next) => {
    if (!to.params.lang) {
      if(!i18n.locale)
        i18n.locale = 'en'
      to.params.lang = i18n.locale
      console.log("no lang specified for " + to.fullPath)
      console.log('Using '+ i18n.locale)
      next('/'+i18n.locale+to.fullPath);
      // next('en')
    } else {
      next()
    }
  })

  return router;
}
