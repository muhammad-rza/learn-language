import Vue from 'vue';
import Vuex from 'vuex';

import tabs from './tabs/index';

Vue.use(Vuex);


const store = new Vuex.Store({

    modules: {
        tabs,
    }


})


export default store;