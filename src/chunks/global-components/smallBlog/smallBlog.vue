<template>

    <ul class="list">
      <SmallItemBlog
      v-for="item in items"
      :key="item.id"
      :item="item">
      </SmallItemBlog>
    </ul>

</template>

<style scoped lang="scss">
@import './smalBlog.scss';
</style>

<script>
import SmallItemBlog from '@/chunks/global-components/smallBlog/smallBlogItems/smallItemBlog.vue';

export default {
  components: {
    SmallItemBlog,
  },
  props: {
    items: { type: Array },
  },
};
</script>
