<template>
  <header class="header">
    <div class="container">
      <div class="wrapper">
       <div class="navigation">
        <button class="burger" :class="{ active }" @click="toogleActive">
          <div class="burgwrapper">
            <span class="part"></span>
            <span class="part"></span>
            <span class="part"></span>
          </div>
        </button>
       <nav class="nav">

        <router-link class="routes" to="/">Home</router-link>
        <router-link class="routes" to="/soloBlog">Blog</router-link>
        <router-link class="routes" to="/clients">Clients</router-link>

      </nav>
       </div>


        <a href="" class="logo">
          <img src='@/assets/images/logo.png' alt="" />
        </a>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      active: false,
    };
  },
  methods: {
    go() {
      // this.$router.replace("/blog");
    },
    toogleActive() {
      this.active = !this.active;
    },
  },

};
</script>
<style scoped lang="scss">
@import "./header.scss";
</style>
