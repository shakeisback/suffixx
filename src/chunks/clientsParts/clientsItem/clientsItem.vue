<template>
  <li class="client-item">
     <router-link class="link" :to="'/client/' + client.data.slug">
    <img class="ico" :src="client.data.image[1]">
   </router-link>
  </li>


</template>
<script>
export default {

  props: {
    client: {
      type: Object,
    },
  },

};
</script>

<style scoped lang="scss">
@import './clientsItem.scss';
</style>
