<template>
  <div class="blog-page">
    <div class="header">
      <div class="container">
        <div class="logo-wrap">
          <div class="dl-wrap">
            <p class="date">{{ item.date | formatDate }}</p>
            <router-link :to="'/soloBlog?tag=' + _getTag(item.ref)" class="link">
              {{ _getTag(item.ref) | toUpper}}
            </router-link>
          </div>
          <p class="sub-title">{{ item.title }}</p>
        </div>
      </div>
    </div>
    <div class="blog-content">
      <div class="container">
        <div class="content" v-html="item.content"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './soloArticle.scss';
</style>

<script>
export default {
  name: 'soloArticle',
  props: {
    item: {
      type: [Object],
    },
  },
};
</script>
