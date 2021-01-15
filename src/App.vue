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
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Russo+One&family=Scope+One&family=Titillium+Web:wght@700&display=swap");
$dark: #081626;
$white: #f1f7f3;
$orange: #ffa46b;

* {
  margin: 0;
  color: $white;
}

html {
  scroll-behavior: smooth;
}

body {
  background: $dark;
}

h2,
li {
  font-family: "Titillium Web", sans-serif;
}

p {
  font-family: "Scope One", serif;
  font-size: 18px;
}

.cta-btn {
  width: fit-content;
  margin-top: 30px;
  border: none;
  font-size: 18px;
  font-family: "Titillium Web", sans-serif;
  text-transform: uppercase;
  background-color: $orange;
  text-decoration: none;
  &:hover {
    background-color: $dark;
  }

  // a {
  //   background-color: $orange;
  //   text-decoration: none;
  // }
}

.section-title {
  font-size: 70px;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    font-size: 58px;
  }

  @media screen and (max-width: 425px) {
    font-size: 12vw;
  }
}
</style>
