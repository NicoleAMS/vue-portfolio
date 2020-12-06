<template>
  <div id="portfolio-container">
    <h2>My Portfolio</h2>
    <div class="line"></div>
    <div class="technology-types">
      <!-- <ul>
        <li class="active">All</li>
        <li>Wordpress</li>
        <li>CSS / SCSS</li>
        <li>Bootstrap</li>
        <li>JavaScript</li>
        <li>Web Components</li>
      </ul> -->
    </div>
    <div class="projects-container">
      <ProjectCard
        v-for="project in projects"
        v-bind:key="project.id"
        :title="project.title"
        :img="project.image"
        :description="project.description"
        :skills="project.skills"
        :github="project.githubUrl"
        :link="project.liveUrl"
      />
    </div>
    <hr />
  </div>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";
import jsonData from "../../data/projects.json";

export default {
  name: "Portfolio",
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: []
    };
  },
  mounted() {
    this.projects = jsonData.projects;
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

#portfolio-container {
  padding-top: 50px;
  background-color: $white;

  .projects-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 50px;
  }

  h2 {
    font-family: "Titillium Web", sans-serif;
    font-size: 70px;
    text-transform: uppercase;
    text-align: center;
    color: $dark;
  }

  h3 {
    color: $midnight;
  }

  .line {
    width: 35%;
    height: 10px;
    background-color: $aqua;
    margin-bottom: 25px;
    margin: 0 auto;
  }

  .technology-types {
    width: 60%;
    margin: 0 auto;

    ul {
      margin-top: 50px;
      display: flex;
      justify-content: space-around;
    }
    li {
      color: $midnight;
      display: inline;
      text-transform: uppercase;
      font-size: 20px;
    }

    .active {
      color: $orange;
    }
  }
}
</style>
