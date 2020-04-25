<template>
  <div class="client">
    <div class="client-header">
      <div class="container">
        <div class="logo-wrap">
          <img class="logo" :src="item[0].data.image[1]" alt="">
          <p class="sub-title">{{ item[0].data.title }}</p>
        </div>
      </div>
    </div>
    <div class="client-content">
      <div class="container">
        <div class="content" v-html="item[0].data.content"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './soloClient.scss';
</style>

<script>
export default {
  props: {
    item: {
      type: [Array, Object],
    },
  },
};
</script>
