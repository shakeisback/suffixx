import { /* mapState, */ mapGetters } from 'vuex';
/* eslint-disable */
export const mixin = {
  data() {
    return {
      Modernizr: window.Modernizr,
    };
  },
  methods: {
    _getTag(categories) {
      if (!this.getTagById) throw new Error('NOT_FOUND_METHOD');

      const result = this.getTagById(categories[0]);
      if (!result) return '';

      return result.data.name;
    },
  },
  computed: {
    ...mapGetters('blog', {
      getTagById: 'getTagById',
    }),
  },
};
