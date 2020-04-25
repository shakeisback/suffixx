<template>
  <div v-if="isLoad">
    <ul class="list">
      <ClientsItem v-for="client in clients" :key="client.id" :client="client"> </ClientsItem>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import "./clientsList.scss";
</style>

<script>
import ClientsItem from '@/chunks/clientsParts/clientsItem/clientsItem.vue';
import { mapState } from 'vuex';

export default {
  data() {
    return {
      isLoad: false,
    };
  },
  computed: {
    ...mapState('clients', ['clients']),
  },
  created() {
    this.$store.dispatch('clients/getClients').then(() => {
      this.isLoad = true;
    });
  },

  components: {
    ClientsItem,
  },

};
</script>
