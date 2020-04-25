<template>
  <div class="client" v-if="isLoad">
    <SoloClient :item="client"></SoloClient >
  </div>
</template>

<script>
import SoloClient from '@/components/soloClient/soloClient.vue';
import { mapState, mapActions } from 'vuex';
// import { mutt } from '@/store/blog';

export default {
  data() {
    return {
      isLoad: false,
    };
  },
  components: {
    SoloClient,
  },
  computed: {
    ...mapState('clients', ['client']),
  },
  methods: {
    ...mapActions('clients', ['getClientsBySlug']),
  },
  created() {
    this.getClientsBySlug(this.$route.params.slug).then(() => {
      this.isLoad = true;
    });
  },
  // beforeRouteLeave(to, from, next) {
  //   this.$store.commit(`clients/${mutt.DELETE_CLIENT}`);
  //   this.isLoad = false;
  //   next();
  // },
};
</script>
