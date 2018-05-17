import Vue from 'vue';
import Vuex from 'vuex';

import tabs from './tabs/index';
import vocabularies from './vocabularies/index';

Vue.use(Vuex);


const store = new Vuex.Store({

    modules: {
        tabs,
        vocabularies
    }


})


export default store;