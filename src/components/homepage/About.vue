<template>
  <div id="about-container">
    <div class="about-row">
      <div class="about-left">
        <img src="../../assets/images/me.jpg" alt="" />
      </div>

      <div class="about-right">
        <div class="about-text">
          <h2>About me</h2>
          <div class="line"></div>
          <p>
            Junior frontend developer with 9 months of work experience in both
            front-end and full-stack development and an HBO-level diploma in
            Software Development (front-end focus). Loves learning,
            brainstorming, teamwork and a good cup of tea.
          </p>
          <button><a href="#">Download CV</a></button>
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

#about-container {
  padding: 50px 0;
  height: 80vh;

  @media screen and (max-width: 1200px) {
    background: $midnight;
  }

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

  h2 {
    font-family: "Titillium Web", sans-serif;
    font-size: 70px;
    text-transform: uppercase;
  }

  p {
    font-family: "Scope One", serif;
    font-size: 18px;
    width: 85%;
  }

  button {
    width: fit-content;
    margin-top: 30px;
    background-color: $orange;
    border: none;
    padding: 15px 30px;
    font-size: 18px;
    font-family: "Titillium Web", sans-serif;
    text-transform: uppercase;
    &:hover {
      background-color: $midnight;
    }

    a {
      text-decoration: none;
    }
  }
}
</style>
