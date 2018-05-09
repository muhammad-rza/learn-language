<template>
  <div id="DefaultLayout">
    <v-app id="inspire">
      <HeaderMain />
      <router-view/>
      <BottomNavigatorMain />
    </v-app>
  </div>
</template>

<script>

import HeaderMain from '@/components/Header/HeaderMain';
// import LeftMenuMain from '@/components/Menu/LeftMenu/LeftMenuMain';
import BottomNavigatorMain from '@/components/BottomNavigator/BottomNavigatorMain';


export default {
  name: 'DefaultLayout',
  components:{
    HeaderMain,
    // LeftMenuMain,
    BottomNavigatorMain
  }
}
</script>
