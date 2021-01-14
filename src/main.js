import Vue from "vue";
import App from "./App.vue";
import Meta from 'vue-meta';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas, faLinkedin, faGithub, faCodepen);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(Meta);

new Vue({
  render: (h) => h(App),
}).$mount("#app");

