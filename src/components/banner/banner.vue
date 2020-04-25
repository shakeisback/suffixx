<template>
  <section class="banner" v-if="article">
    <div class="part image-box">
      <img class="image" :src="article.data.image ? article.data.image[0] : ''" alt="" />
    </div>
    <div class="part content-box">
      <div class="top-content">
        <time class="dates" :datetime="article.data.date">{{
          article.data.date | formatDate
        }}</time>

        <router-link to="/soloBlog" class="article-way">
          {{ _getTag(article.data.ref) | toUpper }}
        </router-link>
      </div>
      <div class="bot-content">
        <h2 class="title">{{ article.data.title }}</h2>
        <p class="info" v-html="article.data.intro"></p>
      </div>
      <router-link :to="'/soloBlog/' + article.data.slug" class="article-way"
        >
        <GlobalBtn></GlobalBtn>
      </router-link>
    </div>
  </section>
</template>
<style scoped lang="scss">
@import "./banner.scss";
</style>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('blog', {
      article: 'firstArticle',
    }),
  },
  // created() {
  //   this.$store.dispatch('blog/getArticles');
  // },
};
</script>

<style></style>
