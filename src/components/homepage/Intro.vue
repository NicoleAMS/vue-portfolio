<template>
  <div id="intro-container">
    <div class="intro-text">
      <h1>Nicole Sentis</h1>
      <h2>Frontend Developer</h2>
      <a class="cta-btn" href="#portfolio">View my work</a>
    </div>
  </div>
</template>

<script>
export default {};
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
  background-image: url("../../assets/images/background.png");
  background-size: cover;
  background-repeat: no-repeat;

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

      @media screen and (max-width: 768px) {
        font-size: 20vw;
      }
    }

    h2 {
      font-size: 40px;
      width: 70%;
      padding: 25px 40px;
      background-color: $aqua;

      @media screen and (max-width: 650px) {
        font-size: 6vw;
        padding: 15px 25px;
      }
    }

    a {
      padding: 20px 45px;

      @media screen and (max-width: 600px) {
        font-size: 4vw;
        padding: 15px 25px;
      }
    }
  }
}
</style>
