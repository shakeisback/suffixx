<template>
  <div class="home" v-if="isLoaded">
      <Banner></Banner>
      <Services></Services>
      <Blog></Blog>
      <Clients></Clients>
      <Subscribe></Subscribe>
      <Articles></Articles>
      <Accordion></Accordion>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';
import Banner from '@/components/banner/banner.vue';
import Services from '@/components/services/services.vue';
import Blog from '@/components/blog/blog.vue';
import Clients from '@/components/clients/clients.vue';
import Subscribe from '@/components/subscribe/subscribe.vue';
import Articles from '@/components/articles/articles.vue';
import Accordion from '@/components/accordion/accordion.vue';


export default {
  name: 'home',
  data() {
    return {
      isLoaded: false,
    };
  },
  components: {
    Banner,
    Services,
    Blog,
    Clients,
    Subscribe,
    Articles,
    Accordion,
  },
  computed: mapGetters('blog', ['tagFirst', 'tagExceptFirst']),
  created() {
    this.$store.dispatch('blog/lastTry').then(() => {
      this.isLoaded = true;
    });
  },
};
</script>
