<template>
  <section class="subribe" v-if="isLoaded">
    <div class="part image-box">
      <img class="image" :src="subscribe[0].data.image ? subscribe[0].data.image[0] : ''" alt="" />
    </div>
    <div class="part content-box">
      <div class="content-wrapper">
        <h1 class="title">{{ subscribe[0].data.title }}</h1>
        <SubscribeBtn></SubscribeBtn>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
@import "./subscribe.scss";
</style>

<script>
import SubscribeBtn from '@/chunks/global-components/buttons/btnSubscribe/subscribeBtn.vue';
import { mapState } from 'vuex';

export default {
  components: {
    SubscribeBtn,
  },
  data() {
    return {
      isLoaded: false,
    };
  },
  created() {
    this.$store.dispatch('subscribe/getSubscribe').then(() => {
      this.isLoaded = true;
    });
  },
  computed: {
    ...mapState('subscribe', ['subscribe']),
  },
};
</script>
