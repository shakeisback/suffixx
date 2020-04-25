<template>
  <div class="soloblogitem" v-if="isLoad">
    <SoloArticle :item="singleArticle" v-if="isLoad"></SoloArticle>
  </div>
</template>

<script>
import SoloArticle from '@/components/soloItemBlog/soloArticle.vue';
import { mapState, mapActions } from 'vuex';
// import { mutt } from '@/store/blog';

export default {

  data() {
    return {
      isLoad: false,
    };
  },
  components: {
    SoloArticle,
  },
  computed: {
    ...mapState('blog', ['singleArticle']),
  },
  methods: {
    ...mapActions('blog', ['getArticleBySlug']),
  },
  created() {
    this.getArticleBySlug(this.$route.params.slug).then(() => {
      this.isLoad = true;
    });
  },
  // beforeRouteLeave(to, from, next) {
  //   this.$store.commit(`blog/${mutt.DELETE_ARCTICLE}`);
  //   this.isLoad = false;
  //   next();
  // },

};
</script>
