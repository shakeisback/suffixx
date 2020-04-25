<template>
  <section class="clients">
    <div class="wrapper">
      <div class="img-box">
         <img class="img" src='@/assets/images/clients.png' alt="">
        <div class="overlay"></div>
      </div>
    <div class="our-clients">
      <div class="clients-wrapper">
        <router-link to="/clients">
          <h3 class="title">OUR CLIENTS</h3>
        </router-link>
        <ClientsList ></ClientsList>
      </div>
    </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import './clients.scss';
</style>

<script>
import ClientsList from '@/chunks/clientsParts/clientsList.vue';


export default {

  components: {
    ClientsList,
  },
};
</script>
