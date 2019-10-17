<template>
  <div id="app">
    <Header/>
    <router-view/>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
// import Footer from '@/components/Footer.vue'
export default {
  name: 'App',
  components: {
    Header
  }
  // components: {
  //   Footer
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
