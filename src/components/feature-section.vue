<template>
  <div class="row">
    <div v-for="feature in features" class="q-pa-md" :class="rowClass">
      <feature-card
        :title="feature.title"
        :description="feature.description"
        :icon="feature.icon"
        :color="feature.color"
        :buttonLabel="feature.buttonLabel"
        :noButton="feature.noButton"
        :class="{ 'feature-card': !noHoverJump }"
        @click="$emit('click', feature.index)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, computed
} from '@vue/composition-api';
import FeatureCard from './feature-card.vue';

export default defineComponent({
  name: 'featureSection',
  components: { FeatureCard },
  props: {
    features: {
      type: Array,
      required: true,
    },
    numberPerRow: {
      type: Number,
      required: false,
      default: 4
    },
    noHoverJump: {
      type: Boolean,
      required: false,
      default: null
    }
  },
  setup(props) {
    const rowClass = computed(() => {
      const col = Math.round(12 / props.numberPerRow)
      return 'col-md-' + col
    });

    return { rowClass };
  },
});
</script>

<style scoped>
.feature-card:hover {
  -moz-transform: translate(0px, -8px);
  -ms-transform: translate(0px, -8px);
  -o-transform: translate(0px, -8px);
  -webkit-transform: translate(0px, -8px);
  transform: translate(0px, -8px)
}
</style>