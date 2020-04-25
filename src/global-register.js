import Vue from 'vue';
/* eslint-disable */

/**
 * -------------------------------
 * Components
 * -------------------------------
 */
import Header from '@/components/header/header.vue';
import Footer from '@/components/footer/footer.vue';

/**
 * -------------------------------
 * Mixins
 * -------------------------------
 */
 import { mixin } from '@/global-mixin';

/**
 * -------------------------------
 * Filters
 * -------------------------------
 */
import moment from 'moment';

Vue.component('Header', Header);
Vue.component('Footer', Footer);
Vue.mixin(mixin);

Vue.filter('formatDate', (value) => {
  if (value) {
    // return moment(String(value)).format('MM/DD/YYYY hh:mm');
    return moment(String(value)).format('MM/DD/YYYY');
  }
});
Vue.filter('toUpper', (value) => (value ? value.toUpperCase() : ''));