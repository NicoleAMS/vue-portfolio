<template>
  <div id="contact-container">
    <div class="contact-row">
      <div class="contact-left">
        <img src="../../assets/images/desk.jpg" alt="" />
      </div>

      <div class="contact-right">
        <div class="contact-text">
          <h2 class="section-title">Get in touch</h2>
          <div class="line"></div>
          <p>
            If you like my portfolio and are interested to find out more about
            me and what I can do for you, please drop me a line at:
            <a href="mailto: nicole.sentis@gmail.com"
              >nicole.sentis@gmail.com</a
            >
          </p>
          <br />
          <p>Or find me on social media:</p>
          <div class="social-media">
            <a href="https://www.linkedin.com/in/nicolesentis/"
              ><font-awesome-icon
                :icon="['fab', 'linkedin']"
                :class="['fa-icon']"
                :style="['color: #ffa46b']"
            /></a>
            <a href="https://github.com/NicoleAMS"
              ><font-awesome-icon :icon="['fab', 'github']" :class="['fa-icon']"
            /></a>
            <a href="https://codepen.io/nicole-sen/"
              ><font-awesome-icon
                :icon="['fab', 'codepen']"
                :class="['fa-icon']"
            /></a>
          </div>
          <br />
          <p>Location: Hoorn (NH), The Netherlands</p>
        </div>
      </div>
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

#contact-container {
  height: 70vh;

  @media screen and (max-width: 768px) {
    height: auto;
    padding: 0;
  }
}

.contact-row {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
}

.contact-left {
  width: 70%;
  height: 100%;
  position: relative;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      max-height: 700px;
    }
  }
}

.contact-right {
  position: absolute;
  top: 15%;
  right: 0%;
  height: 70%;
  width: 50%;
  background-color: $aqua;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .contact-text {
    margin: 10%;
    text-align: right;
    position: relative;

    @media screen and (max-width: 1200px) {
      margin: 5%;
    }
  }

  @media screen and (max-width: 1440px) {
    height: 60%;
    top: 20%;
  }

  @media screen and (max-width: 1200px) {
    top: 10%;
    height: 80%;
    width: 65%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 500px;
    position: relative;
  }

  .line {
    width: 100%;
    height: 10px;
    background-color: $orange;
    margin-bottom: 25px;
  }

  h2 {
    text-align: right;
  }

  p {
    width: 85%;
    position: relative;
    left: 15%;
  }

  a {
    color: $orange;
    text-decoration: none;
    &:hover {
      path {
        color: $orange;
      }
    }
  }

  .fa-icon {
    font-size: 24px;
    margin-left: 12px;
  }
}
</style>
