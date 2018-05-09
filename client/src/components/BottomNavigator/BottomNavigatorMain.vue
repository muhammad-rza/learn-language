<template>
 
      <v-bottom-nav
        :value="true"
        :active="getAllTabs"
        :color="color"
        absolute
     
      >
        <v-btn dark @click="changeRoute(0)" >
          <!-- <span>Vocabulary</span> -->
          <v-icon>list_alt</v-icon>
        </v-btn>
        <v-btn dark  @click="changeRoute(1)">
          <!-- <span>Text</span> -->
          <v-icon>subject</v-icon>
        </v-btn>
        <v-btn dark @click="changeRoute(2)">
          <!-- <span>Deleted</span> -->
          <v-icon>delete</v-icon>
        </v-btn>
        <v-btn dark @click="changeRoute(3)">
          <span></span>
          <v-icon>check_circle</v-icon>
        </v-btn>
      </v-bottom-nav>
</template>


<script>
import { mapState } from 'vuex'
export default {
  data:() =>({
    activeTab:false
  }),
  computed: {
      ...mapState('tabs',{
        getAllTabs: state => state.currentTab
      }),
    color() {
     return this.$store.getters["tabs/getCurrentTab"].color;     
    }
  },

  methods: {
    changeRoute(tabIndex) {
      this.$store.commit("tabs/changeTab", tabIndex);
      if (this.$store.getters["tabs/getCurrentTab"]) {
        this.$router.push(this.$store.getters["tabs/getCurrentTab"].url)
      }

      console.log()
    }
  },
  mounted() {
    this.changeRoute(this.$route.path)
  }
};
</script>


