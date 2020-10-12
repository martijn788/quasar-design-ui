<template>
  <div>
    <hero-section />
    <feature-section
      :features="features"
      class="q-px-xl"
     />
     <call-to-action
        :img="img"
      />
  </div>
</template>

<script lang="ts">
import HeroSection from 'components/hero-section.vue';
import FeatureSection from 'components/feature-section.vue';
import CallToAction from 'components/call-to-action.vue';
import { defineComponent } from '@vue/composition-api';
import img from '../assets/parallax.jpg';

export default defineComponent({
  name: 'PageIndex',
  components: { HeroSection, FeatureSection, CallToAction },
  setup() {
    const features = [
    {
      index: 1,
      title: 'Feature 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: 'alarm',
      color: 'red',
      buttonLabel: 'More info...'
    },
    {
      index: 2,
      title: 'Feature 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: 'bookmark',
      color: 'blue',
      buttonLabel: 'More info...'
    },
    {
      index: 3,
      title: 'Feature 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: 'code',
      color: 'green',
      buttonLabel: 'More info...'
    },
    {
      index: 4,
      title: 'Feature 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: 'favorite',
      color: 'black',
      buttonLabel: 'More info...'
    }
  ];

  return { features, img };
  }
});
</script>
