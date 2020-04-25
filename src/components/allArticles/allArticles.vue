<template>
<section class="blog">
  <div class="banner">
  <h1 class="title">ARTICLES</h1>
  </div>
  <div class="container">
  <div class="routes">
   <router-link class="road-to" :to="{ path: 'soloBlog' }">
        Clear
      </router-link>
       <router-link class="road-to"
        :to="{ path: 'soloBlog', query: { tag: tag.data.name } }"
        :key="tag.id"
        v-for="tag in tags"
      >
        Set {{ tag.data.name}} tag
      </router-link>
  </div>
  <div class="article-wrap">
  <SmallBlog class="art" :items="filteredArticles"></SmallBlog>
  </div>

</div>
</section>
</template>
<script>

import SmallBlog from '@/chunks/global-components/smallBlog/smallBlog.vue';
import { mapState } from 'vuex';

export default {

  components: {
    SmallBlog,
  },
  computed: {
    ...mapState('blog', ['filteredArticles', 'tags']),
  },
};
</script>


<style scoped lang="scss">
@import './allArticles.scss';
</style>
