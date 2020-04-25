<template>
   <div>
    <ul class="list">
      <BigBlogItem
      v-for="item in doubleArticles"
      :item="item"
      :key="item.id">
      </BigBlogItem>
    </ul>
   </div>
</template>

<style scoped lang="scss">
@import './bigBlog.scss';

</style>

<script>
import { mapGetters } from 'vuex';
import BigBlogItem from '@/chunks/blogParts/bigBlogItems/bigBlogItem.vue';

export default {
  components: {
    BigBlogItem,
  },
  computed: {
    ...mapGetters('blog', {
      doubleArticles: 'doubleLifestyle',
    }),
  },

};
</script>
