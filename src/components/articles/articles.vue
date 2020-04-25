<template>
  <section class="articles">
    <div class="container">
      <div class="article-wrap">
        <h3 class="titlle">INTERVIEWS</h3>
        <SmallBlog :items="articleHome.news"></SmallBlog>
        <router-link to="/soloBlog">
          <ButtonSee></ButtonSee>
        </router-link>
        <SmallBlog :items="articleHome.interviews"></SmallBlog>
        <router-link to="/soloBlog">
          <ButtonSee></ButtonSee>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "./articles.scss";
</style>

<script>
import { mapState } from 'vuex';
import SmallBlog from '@/chunks/global-components/smallBlog/smallBlog.vue';
import ButtonSee from '@/chunks/global-components/buttons/buttonSee/buttonSee.vue';

export default {
  components: {
    SmallBlog,
    ButtonSee,
  },
  computed: {
    ...mapState('blog', ['articleHome']),
  },
};
</script>
