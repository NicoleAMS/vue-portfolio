<template>
  <div id="app">
    <Header />
    <Homepage />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Homepage from "./views/Homepage.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Homepage,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Russo+One&family=Scope+One&family=Titillium+Web:wght@700&display=swap");

* {
  margin: 0;
  color: white;
}
</style>
