import Vue from 'vue'
import App from './App.vue'

let cmp = {
  data: () => {
   return { status: 'Critical'}
  },
  template: '<p>Server Status: {{ status }}</p>'
};

new Vue({
  el: '#app',
  components: {
    'my-cmp':  cmp
  }
})

new Vue({
  el: '#app2',
  components: {
    'my-cmp':  cmp
  }
})

// render: h => h(App),