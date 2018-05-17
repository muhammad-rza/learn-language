<template>
  <div>
      <HeaderList />
  </div>
</template>

<script>

import HeaderList from '@/components/Vocabulary/HeaderList.vue';

export default {
    components :{
        HeaderList
    },


    created() {
        this.$store.dispatch('vocabularies/getVocabulary')
    }
}
</script>

<style>

</style>
