<template>
  <section class="blog">
    <div class="container">
      <div class="wrap">
        <h3 class="title">FEATURED</h3>
        <BigBlog></BigBlog>
        <SmallBlog :items="threeArticle"></SmallBlog>
        <router-link to="/soloBlog">
          <ButtonSee></ButtonSee>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import './blog.scss';
</style>

<script>
import { mapGetters } from 'vuex';
import BigBlog from '@/chunks/blogParts/bigBlog.vue';
import SmallBlog from '@/chunks/global-components/smallBlog/smallBlog.vue';
import ButtonSee from '@/chunks/global-components/buttons/buttonSee/buttonSee.vue';

export default {
  components: {
    BigBlog,
    SmallBlog,
    ButtonSee,
  },
  computed: {
    ...mapGetters('blog', {
      threeArticle: 'smallLifestyle',
    }),
  },
};

</script>
