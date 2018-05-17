<template>
  <v-toolbar>
    <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon> -->
    <v-btn icon>
        <v-icon>arrow_back</v-icon>
    </v-btn>
    <v-toolbar-title>{{$store.getters["vocabularies/getCurrentVocabularyTab"].name}}</v-toolbar-title>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
export default {
  mounted() {
      this.$store.commit('vocabularies/changeCurrentVocabularyTab',0 )
  }
}
</script>
