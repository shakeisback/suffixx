<template>
  <li class="item">
    <div class="img-box">
      <img class="img" :src="item.data.image[0]" alt="">
    </div>
    <div class="wrapper">
      <div class="top-content">
        <time class="dates" :datetime="item.data.date">{{
            item.data.date | formatDate
          }}</time>
       <router-link  :to="'soloBlog?tag=' + _getTag(item.data.ref)"
        class="article-way">{{_getTag(item.data.ref) |toUpper }}
         </router-link>
      </div>
      <div class="description">
       <router-link :to="'/soloBlog/' + item.data.slug">
        <h2 class="title">{{ item.data.title }}</h2>
       </router-link>
        <p class="info" v-html="item.data.intro"></p>
      </div>
    </div>
  </li>
</template>

<style scoped lang="scss">
@import './bigBlogItem.scss';
</style>

<script>
export default {
  props: ['item'],
};
</script>
