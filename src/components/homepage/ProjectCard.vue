<template>
  <div
    @mouseover="hover = true"
    @mouseleave="hover = false"
    class="project-card"
    :style="{ backgroundImage: `url(${img})` }"
  >
    <div class="overlay" v-if="hover">
      <h4>{{ title }}</h4>
      <p>{{ description }}</p>
      <ul>
        <li v-for="skill in skills" :key="skill">{{ skill }}</li>
      </ul>
      <div class="overlay-buttons">
        <button v-if="github !== ''">
          <a :href="`${github}`">View on GitHub</a>
        </button>
        <button v-if="link !== ''">
          <a :href="`${link}`">View live site</a>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    title: String,
    img: String,
    description: String,
    skills: Array,
    github: String,
    link: String,
  },
  data() {
    return {
      hover: false,
    };
  },
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

.project-card {
  width: 500px;
  height: 300px;
  margin: 2px;
  background-size: cover;
  background-position: center;
  font-family: "Scope One", serif;
  font-size: 14px;

  .overlay {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      #000 0%,
      #00091a 20%,
      #325a65 100%
    );
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h4 {
      color: $aqua;
      text-transform: uppercase;
      font-family: "Titillium Web", sans-serif;
      font-size: 28px;
      margin: 5px 15px;
    }

    p {
      color: $white;
      margin: 0 15px;
    }

    ul {
      display: flex;
      justify-content: flex-end;
      flex-wrap: wrap;
      margin-top: 20px;
    }
    li {
      color: $orange;
      display: inline;
      margin-right: 20px;
      text-transform: uppercase;
    }

    .overlay-buttons {
      display: flex;
      justify-content: flex-end;
    }

    button {
      width: fit-content;
      background-color: $aqua;
      border: none;
      padding: 10px 20px;
      font-size: 14px;
      font-family: "Titillium Web", sans-serif;
      text-transform: uppercase;
      display: inline;
      margin: 15px 15px 15px 0;
      &:hover {
        background-color: $orange;
      }

      a {
        text-decoration: none;
      }
    }
  }
}
</style>
