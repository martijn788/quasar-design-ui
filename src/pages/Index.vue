<template>
  <q-page>
      <hero-section />
  </q-page>
</template>

<script lang="ts">
import HeroSection from 'components/hero-section.vue';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'PageIndex',
  components: { HeroSection }
});
</script>
