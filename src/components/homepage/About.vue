<template>
  <div id="about-me">
    <div class="about-row">
      <div class="about-left">
        <img src="../../assets/images/me.jpg" alt="" />
      </div>

      <div class="about-right">
        <div class="about-text">
          <h2 class="section-title">About me</h2>
          <div class="line"></div>
          <p>
            Hi and thanks for stopping by! I'm a Dutch junior frontend developer
            with 9 months of international work experience in both front-end and
            full-stack development and an HBO-level diploma in Software
            Development (front-end focus). I love learning, brainstorming and
            teamwork.
          </p>
          <a class="cta-btn" href="#">Download my CV</a>
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

#about-me {
  height: 100vh;

  @media screen and (max-width: 768px) {
    height: auto;
    padding: 0;
  }
}

.about-row {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
}

.about-left {
  width: 50%;
  height: 100%;
  position: relative;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  img {
    width: 80%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 1200px) {
      width: 100%;
    }

    @media screen and (max-width: 768px) {
      max-height: 700px;
    }
  }
}

.about-right {
  position: absolute;
  top: 25%;
  right: 0;
  height: 50%;
  width: 60%;
  background-color: $aqua;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .about-text {
    margin: 10%;

    @media screen and (max-width: 1200px) {
      margin: 5%;
    }
  }

  @media screen and (max-width: 1440px) {
    height: 60%;
    top: 20%;
  }

  @media screen and (max-width: 1200px) {
    top: 0;
    height: 100%;
    width: 50%;
    position: relative;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 500px;
  }

  .line {
    width: 100%;
    height: 10px;
    background-color: $orange;
    margin-bottom: 25px;
  }

  p {
    width: 85%;
    margin-bottom: 30px;
  }

  a {
    padding: 15px 30px;
  }
}
</style>
