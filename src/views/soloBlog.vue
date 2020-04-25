<template>
  <div>
    <AllArticles />
  </div>
</template>


<script>
import { mapState, mapActions } from 'vuex';
import AllArticles from '@/components/allArticles/allArticles.vue';

export default {

  components: {
    AllArticles,
  },
  computed: {
    ...mapState('blog', ['filteredArticles', 'tags']),
  },
  beforeRouteUpdate(to, from, next) {
    this.articleRequest(to, next);
  },
  methods: {
    articleRequest(route, callback = () => {}) {
      this.getArtByTag({
        tagName: route.query.tag,
        isTagExist: 'tag' in route.query,
      }).then(callback);
    },
    ...mapActions('blog', ['getArtByTag']),
  },
  created() {
    // tag - no ----> get all articels
    // tag - yes && tag - valid ----> get articels with filter
    //
    // tag - yes && tag - novalid ----> 404
    // tag - yes && tag = undefined ----> 404
    this.articleRequest(this.$route);
  },
};
</script>
