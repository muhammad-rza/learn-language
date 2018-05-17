<template>
  <v-tabs 
        v-model="tabs"
          fixed-tabs
          color=""
          ripple
          v-touch="{
            left: () => $store.commit('vocabularies/changeCurrentVocabularyTab',indexTab + 1 ),
            right: () =>$store.commit('vocabularies/changeCurrentVocabularyTab',indexTab - 1 )
          }"

  >
    <v-tab v-for="(vocabulary , n) in getVocabularyMenu" :key="n" @click="$store.commit('vocabularies/changeCurrentVocabularyTab',n )" >
      <v-icon>{{vocabulary.icon}}</v-icon>
    </v-tab>
    <!-- <v-tab-item v-for="(voc , index) in getVocabularyMenu" :key="index">
    <v-card flat>
      <v-card-text>Contents for Item 1 go here</v-card-text>
    </v-card> -->
  <v-tab-item>
    <v-card flat>
        <WaitingVocabulary />
    </v-card>
  </v-tab-item>
 
  </v-tabs>
</template>


<script>
import { mapGetters } from "vuex";

import WaitingVocabulary from '@/components/Vocabulary/Waiting.vue';

export default {
  data: () => ({
    tabs: null,
    text: "consequat."
  }),
  components :{
    WaitingVocabulary
  },

  computed: {
    ...mapGetters("vocabularies", ["getAllVocabularies", "getVocabularyMenu"]),
    indexTab() {
      return this.$store.getters["vocabularies/getVocabularyMenu"].indexOf(
        this.$store.getters["vocabularies/getCurrentVocabularyTab"]
      );
    }
  },

  methods: {
    swipe(direction) {
      console.log(direction);
    }
  }
};
</script>

<style>
.application .theme--light.tabs__bar,
.theme--light .tabs__bar {
  background-color: #f5f5f5;
}
</style>
