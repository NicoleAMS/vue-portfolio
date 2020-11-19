<template>
  <div id="homepage-container">
    <h1>Homepage Component</h1>
    <Intro />
    <About />
    <Portfolio />
    <Contact />
  </div>
</template>

<script>
import Intro from "../components/homepage/Intro";
import About from "../components/homepage/About";
import Portfolio from "../components/homepage/Portfolio";
import Contact from "../components/homepage/Contact";

export default {
  components: {
    Intro,
    About,
    Portfolio,
    Contact
  }
};
</script>