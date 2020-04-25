<template>


<li class="item" :class="accClasses">
    <button class="btn" @click="toggleAcc">{{ item.data.title }}</button>
    <div class="txt-wrap">
      <p class="txt" v-html="item.data.content"></p>
    </div>
  </li>
</template>


<script>
export default {
  props: ['item'],
  methods: {
    toggleAcc() {
      this.$emit('custom-event', this.item.id);
    },
  },
  computed: {
    accClasses() {
      return {
        'is-closed': this.item.isOpen,
      };
    },
  },
};
</script>

<style scoped lang="scss">
@import './accordionItem.scss';
</style>
