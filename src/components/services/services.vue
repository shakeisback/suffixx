<template>
  <section class="services">
    <div class="container">
      <ul class="list">
      <ServicesItem
            v-for="item in items"
            :key="item.id"
            :item="item">
        </ServicesItem>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "./services.scss";
</style>

<script>
import ServicesItem from '@/chunks/servicesParts/servicesItem.vue';

export default {
  components: {
    ServicesItem,
  },
  data() {
    return {
      items: null,
    };
  },
  created() {
    this.$store.dispatch('services/getServices').then((data) => {
      this.items = data.map((item, index) => ({
        ...item,
        id: index,
      }));
    });
  },
};
</script>
