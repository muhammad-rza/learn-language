<template>
  <div id="DefaultLayout">
    <v-app id="inspire">
       <VocabularyHeader v-if=" indexTab == 0" />
       <HeaderMain v-else-if=" indexTab == 1" />
      <router-view/>
      <BottomNavigatorMain />
    </v-app>
  </div>
</template>

<script>

import HeaderMain from '@/components/Header/HeaderMain';
import VocabularyHeader from '@/components/Header/VocabularyHeader';
// import LeftMenuMain from '@/components/Menu/LeftMenu/LeftMenuMain';
import BottomNavigatorMain from '@/components/BottomNavigator/BottomNavigatorMain';

import { mapState } from 'vuex'

export default {
  name: 'DefaultLayout',
  components:{
    HeaderMain,
    // LeftMenuMain,
    BottomNavigatorMain,
    VocabularyHeader
  },
    computed: {
      ...mapState('tabs',[
        'getCurrentTab',
        'getAllTabs',
      ]),

      indexTab() {
        return this.$store.getters["tabs/getAllTabs"].tabs.indexOf(this.$store.getters["tabs/getCurrentTab"])
      }
  },
}
</script>
