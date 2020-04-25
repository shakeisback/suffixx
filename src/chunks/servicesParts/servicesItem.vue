<template>
    <li class="item">
        <div class="ico-box">
            <img class="ico" :src="item.data.image ? item.data.image[0] : ''" alt="">
        </div>
        <h3 class="title">{{ item.data.title }}</h3>
        <p class="info" v-html="item.data.content"></p>
    </li>
</template>

<style scoped lang="scss">
@import './servicesItem.scss';
</style>

<script>
export default {
  props: ['item'],
};
</script>
