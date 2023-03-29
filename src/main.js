import Vue from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";
import PerfectScrollbar from "vue2-perfect-scrollbar";
import "vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css";

import {
  faPlay,
  faPause,
  faStepForward,
  faStepBackward,
  faTimes,
  faVolumeDown,
  faVolumeUp,
  faList,
  faMusic
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faPlay,
  faPause,
  faStepForward,
  faStepBackward,
  faTimes,
  faGithub,
  faVolumeDown,
  faVolumeUp,
  faList,
  faMusic
);

Vue.use(PerfectScrollbar);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("VueSlider", VueSlider);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
