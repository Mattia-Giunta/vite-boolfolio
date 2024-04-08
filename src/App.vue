<script>

import AppHeader from './components/AppHeader.vue';
import ProjectList from './pages/ProjectList.vue';

export default {
    components: {
      AppHeader,
      ProjectList,
    },

}


</script>

<template>

  <AppHeader/>


  <!-- <h1>Ciao Mondo da App.vue</h1> -->
    
  <!-- <MainApp/> -->

  <router-view></router-view>
    
 
</template>

<style scoped>

</style>
