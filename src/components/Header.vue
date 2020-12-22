<template>
  <div class="header-container" :class="{ bgDark: headerBG }">
    <a href="#" class="logo-link"
      ><img src="/assets/images/logo-aqua.png" alt="logo"
    /></a>
    <div class="nav-container">
      <nav class="capital desktop">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#about-me">About Me</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <nav class="capital mobile">
        <div class="icon" @click="toggleMenu()" :class="{ open: openClass }">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul
          :class="{ 'menu-overlay': menuOverlay }"
          v-if="openClass"
          @click="toggleMenu()"
        >
          <li><a href="#">Home</a></li>
          <li><a href="#about-me">About Me</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      openClass: false,
      menuOverlay: false,
      headerBG: false,
    };
  },
  methods: {
    toggleMenu: function() {
      this.openClass = !this.openClass;
      this.menuOverlay = !this.menuOverlay;
    },
    onScroll: function() {
      scrollY > 200 ? (this.headerBG = true) : (this.headerBG = false);
    },
  },
  created() {
    window.addEventListener("scroll", this.onScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>

<style lang="scss">
$dark: #081626;
$white: #f1f7f3;
$orange: #ffa46b;
$aqua: #3c95a8;

.bgDark {
  background-color: $dark;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 55px;
  z-index: 100;

  .logo-link {
    height: 45px;
    margin-left: 15px;

    img {
      height: 45px;
    }
  }

  ul {
    display: flex;
    width: 400px;
    justify-content: space-around;
  }

  li {
    display: inline;
    text-transform: uppercase;
    font-size: 14px;
  }

  a {
    text-decoration: none;
    &:hover,
    &:active {
      color: $orange;
    }
  }

  .mobile {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    .desktop {
      display: none;
    }

    .mobile {
      display: block;
    }

    nav {
      padding-right: 50px;
    }

    .icon {
      width: 30px;
      height: 20px;
      position: relative;
      left: 100%;
      z-index: 10;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: 0.5s ease-in-out;
      -moz-transition: 0.5s ease-in-out;
      -o-transition: 0.5s ease-in-out;
      transition: 0.5s ease-in-out;
      cursor: pointer;
    }

    .icon span {
      display: block;
      position: absolute;
      height: 4px;
      width: 100%;
      background: $orange;
      opacity: 1;
      left: 0;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: 0.25s ease-in-out;
      -moz-transition: 0.25s ease-in-out;
      -o-transition: 0.25s ease-in-out;
      transition: 0.25s ease-in-out;
    }

    .icon span:nth-child(1) {
      top: 0px;
    }

    .icon span:nth-child(2),
    .icon span:nth-child(3) {
      top: 10px;
    }

    .icon span:nth-child(4) {
      top: 20px;
    }

    .icon.open span:nth-child(1),
    .icon.open span:nth-child(4) {
      top: 10px;
      width: 0;
      left: 50%;
    }

    .icon.open span:nth-child(2) {
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      transform: rotate(45deg);
      background: #ffffff;
    }

    .icon.open span:nth-child(3) {
      -webkit-transform: rotate(-45deg);
      -moz-transform: rotate(-45deg);
      -o-transform: rotate(-45deg);
      transform: rotate(-45deg);
      background: #ffffff;
    }
  }

  .menu-overlay {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100vh;
    width: unquote("min(400px, 80%)");
    right: 0;
    top: 0;
    position: fixed;
    background-color: $aqua;
    color: white;
    box-shadow: -10px 0px 30px -15px $dark;

    li {
      display: block;
      font-size: 22px;
      position: relative;
      text-align: center;
    }
  }
}
</style>
