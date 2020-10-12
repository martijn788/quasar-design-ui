<template>
  <q-card class="q-px-sm q-py-lg">
    <q-card-section class="text-center">
       <q-avatar :color="color" text-color="white" :icon="icon" />
    </q-card-section>

    <q-card-section class="q-py-none text-center">
      <h6 class="q-my-none text-weight-bold" :class="textColor">{{ title }}</h6>
    </q-card-section>

    <q-card-section class="text-weight-light text-center">
        {{ description }}
    </q-card-section>

    <q-card-actions v-if="!noButton" align="center">
      <q-btn :label="buttonLabel" :color="color" no-caps @click="$emit('click')" />
    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import {
  defineComponent, computed
} from '@vue/composition-api';

export default defineComponent({
  name: 'featureCard',
  props: {
    title: {
      type: String,
      required: false,
      default: 'Feature 1'
    },
    description: {
      type: String,
      required: false,
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    icon: {
      type: String,
      required: false,
      default: 'alarm'
    },
    buttonLabel: {
      type: String,
      required: false,
      default: 'More info...'
    },
    color: {
      type: String,
      required: false,
      default: 'red'
    },
    noButton: {
      type: Boolean,
      required: false,
      default: false
    },
  },
  setup(props) {
    const textColor = computed(() => {
      return `text-${props.color}`
    });

    return { textColor };
  },
});
</script>

<style scoped>
.q-card{
  max-width: 300px;
}
</style>