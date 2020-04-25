 <template>
<section class="accordion">
    <div class="container">
        <ul class="list">
          <AccordionItem v-for="item in accordionData"
          :key="item.id"
          :item="item"
          @custom-event="toggleAccordion">
          </AccordionItem>
        </ul>
    </div>
  </section>
</template>

<script>
import AccordionItem from '@/components/accordion/accordionItem/accordionItem.vue';

export default {
  components: {
    AccordionItem,
  },
  data() {
    return {
      accordionData: null,
    };
  },
  methods: {
    toggleAccordion(id) {
      this.accordionData.forEach((item, index) => {
        const curr = item;
        if (id === index) {
          curr.isOpen = !curr.isOpen;
        } else {
          curr.isOpen = true;
        }
      });
    },
  },
  created() {
    this.$store.dispatch('accordion/getAccordion').then((data) => {
      this.accordionData = data.map((item, index) => ({
        ...item,
        isOpen: true,
        id: index,
      }));
    });
  },
};


</script>
<style scoped lang="scss">
@import './accordion.scss';
</style>
