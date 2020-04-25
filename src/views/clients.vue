<template>
 <div>
   <ClientsSection v-if="isLoad" :clientsList="clients"></ClientsSection>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ClientsSection from '@/components/clientsSection/clientsSection.vue';

export default {
  data() {
    return {
      isLoad: false,
    };
  },
  components: {
    ClientsSection,
  },
  computed: {
    ...mapState('clients', ['clients']),
  },
  created() {
    this.$store.dispatch('clients/getClients').then(() => {
      this.isLoad = true;
    });
  },
};
</script>
