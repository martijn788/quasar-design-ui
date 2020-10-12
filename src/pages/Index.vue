<template>
  <div>
    <hero-section />
    <feature-card />
  </div>
</template>

<script lang="ts">
import HeroSection from 'components/hero-section.vue';
import FeatureCard from 'components/feature-card.vue';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'PageIndex',
  components: { HeroSection, FeatureCard }
});
</script>
