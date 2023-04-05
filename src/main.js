import Vue from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";
import "vue-multiselect/dist/vue-multiselect.min.css";

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
import Multiselect from "vue-multiselect";
import "./registerServiceWorker";

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

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("VueSlider", VueSlider);
Vue.component("multiselect", Multiselect);
Vue.config.productionTip = false;

Vue.directive("scroll-element", {
  inserted: function(el, binding) {
    let f = function(evt) {
      if (binding.value(evt, el)) {
        el.removeEventListener("scroll", f);
      }
    };
    el.addEventListener("scroll", f);
  }
});

new Vue({
  render: h => h(App)
}).$mount("#app");
