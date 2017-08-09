/**
 * Created by ashutosh on 30/7/17.
 */
require('./bootstrap');

import ElementUI from 'element-ui'
import 'vue-awesome/icons'

//Some CSS rules which you can ignore. For now, we only require element-ui, ignore Bootstrap
import 'element-ui/lib/theme-default/index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//Ignore bootstrapvue
import BootstrapVue from 'bootstrap-vue';
import Icon from 'vue-awesome/components/Icon'

window.Vue = require('vue');
window.apiroot = 'http://api.laravel.dev/v1/';
Vue.use(BootstrapVue);
Vue.use(ElementUI);


//Take a note of this line
window.eventHub = new Vue();


Vue.component('icon', Icon);
Vue.component('applicantform', require('./applicantform.vue'));

const app = new Vue({
    el: '#applicantform'
});