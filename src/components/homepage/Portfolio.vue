<template>
  <div id="portfolio-container">
    <h2 class="section-title">My Portfolio</h2>
    <div class="line"></div>
    <p class="portfolio-help">
      Hover over or tap the projects to find out more about them.
    </p>
    <!-- <div class="technology-types">
      <ul>
        <li class="active">All</li>
        <li>Wordpress</li>
        <li>CSS / SCSS</li>
        <li>Bootstrap</li>
        <li>JavaScript</li>
        <li>Web Components</li>
      </ul>
    </div> -->
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
  </div>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";
import jsonData from "../../data/projects.json";

export default {
  name: "Portfolio",
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [],
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
  padding: 100px 0 120px 0;
  background-color: $white;

  .projects-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 30px auto 0 auto;
  }

  h2 {
    text-align: center;
    color: $dark;

    @media screen and (max-width: 768px) {
      font-size: 58px;
    }

    @media screen and (max-width: 425px) {
      font-size: 12vw;
    }
  }

  h3 {
    color: $dark;
  }

  .portfolio-help {
    color: $dark;
    text-align: center;
    margin: 30px 15px;
  }

  .line {
    width: 35%;
    min-width: 200px;
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
      color: $dark;
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
