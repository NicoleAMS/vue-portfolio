<template>
  <div id="intro-container">
    <div id="stars" class="stars">
      <div class="star" v-for="n in number" :key="n" :id="n"></div>
    </div>
    <!-- <div class="moon"></div> -->
    <div class="intro-text">
      <h1>Nicole Sentis</h1>
      <h2>Frontend Developer</h2>
      <a class="cta-btn" href="#portfolio">View my work</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Intro",
  data() {
    return {
      number: 0,
    };
  },
  methods: {
    handleResize: function() {
      this.number = Math.round(window.innerWidth / 20);
    }
  },
  mounted() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }
};
</script>

<style lang="scss">
$orange: #ffa46b;
$aqua: #3c95a8;
$darkgrey: #1a1a1a;
$lightgrey: #c4beb5;
$midnight: #010a1c;
$dark: #081626;
$white: #f1f7f3;

#intro-container {
  height: 100vh;
  min-height: 600px;
  width: 100%;
  position: relative;
  background-color: black;
  background: linear-gradient(
    180deg,
    #000 0%,
    #00091a 20%,
    #325a65 90%,
    #ffa366 100%
  );

  .intro-text {
    height: 100vh;
    min-height: 600px;
    margin-left: 8%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-family: "Russo One", sans-serif;
      font-size: 160px;
      z-index: 2;

      @media screen and (max-width: 768px) {
        font-size: 20vw;
      }
    }

    h2 {
      font-size: 40px;
      width: 70%;
      padding: 25px 40px;
      background-color: $aqua;
      z-index: 2;

      @media screen and (max-width: 650px) {
        font-size: 6vw;
        padding: 15px 25px;
      }
    }

    a {
      padding: 20px 45px;
      z-index: 2;

      @media screen and (max-width: 600px) {
        font-size: 4vw;
        padding: 15px 25px;
      }
    }
  }

  .stars {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    .star {
      border-radius: 50%;
      background-color: $white;
      box-shadow: 0 0 1px $white, 0 0 2px $white, 0 0 4px $white, 0 0 6px $white, 0 0 8px $white, 0 0 16px $white;  
    }
    @for $i from 1 through (200) {
      $size: random(3) + px;
      .star:nth-child(#{$i}) {
        top: random(96) + vh;
        left: random(96) + vw;
        width: $size;
        height: $size;
        position: absolute;
        animation: twinkle random(3) + s linear infinite;
        animation-delay: random(2) + s;    
      }
    }
  }

  .moon {
    position: absolute;
    top: 150px;
    right: 150px;
    width: 100px;
    height: 100px;
    background-color: transparent;
    border-radius: 50%;
    box-shadow: -30px 10px 0px 0px $white;
  }

  @keyframes twinkle {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
  }
}
</style>
