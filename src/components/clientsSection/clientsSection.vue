<template>
  <div class="clients">
    <div class="container">
      <ul class="list">
        <li class="item" v-for="client in clientsList" :key="client.id">
          <div class="logo-wrap">
            <router-link class="link" :to="'/client/' + client.data.slug">
              <img class="logo" :src="client.data.image[0]">
            </router-link>
          </div>
          <h3 class="title">{{client.data.title}}</h3>
          <p class="content" v-html="client.data.content"></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './clientsSection.scss';
</style>

<script>

export default {
  props: {
    clientsList: {
      type: Array,
    },
  },
};
</script>
