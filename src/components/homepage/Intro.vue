<template>
  <div id="intro-container">
    <div class="intro-text">
      <h1>Nicole Sentis</h1>
      <h2>Frontend Developer</h2>
      <button><a href="#">View my work</a></button>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  $orange: #ffa46b;
  $aqua: #3c95a8;
  $darkgrey: #1A1A1A;
  $lightgrey: #C4BEB5;
  $midnight: #010A1C;

  #intro-container {
    height: 100vh;
    background-image: url('../../assets/images/background.png');
    background-size: cover;
    background-repeat: no-repeat;

    .intro-text {
      height: 100vh;
      margin-left: 8%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h1 {
        font-family: 'Russo One', sans-serif;
        font-size: 160px;
      }

      h2 {
        font-family: 'Titillium Web', sans-serif;
        font-size: 40px;
        width: 70%;
        padding: 25px 40px;
        background-color: $aqua;
      }

      button {
        width: fit-content;
        margin-top: 30px;
        background-color: $orange;
        border: none;
        padding: 20px 45px;
        font-size: 20px;
        font-family: 'Titillium Web', sans-serif;
        text-transform: uppercase;
        &:hover {
          background-color: $midnight;
        }

        a {
          text-decoration: none;
        }
      }
    }
  }

</style>