import Vue from 'vue';
import VTooltip from 'v-tooltip';
VTooltip.enabled = window.innerWidth > 768;

Vue.use(VTooltip, {
  defaultHtml: false,
});
