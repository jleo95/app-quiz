<template>
  <div class="wrapper">
    <Header/>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <Footer/>
    <Loading :loaded="isLoaded"/>
  </div>
</template>

<script>
  import Header from "./components/Header";
  import Footer from "./components/Footer";
  import Loading from "./components/Loading";
  export default {
    components: {Loading, Footer, Header},
    data: () => {
      return {
        isLoaded: true
      }
    },
    mounted() {
      document.onreadystatechange = () => {
        if (document.readyState == 'complete') {
          this.isLoaded = true
        }
      }
    }
  }
</script>

<style lang="scss">
  .fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translateX(2em);
  }

  .fade-enter-active, .fade-leave-active {
    transition: all .3s ease;
  }
</style>