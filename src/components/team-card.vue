<template>
  <q-card>
    <q-card-section class="text-center q-pa-none">
       <q-img
       :src="img"
       style="max-width: 100%"
       />
    </q-card-section>

    <q-card-section class="q-py-sm">
      <h6 class="q-my-none text-weight-bold">{{ name }}</h6>
      <span class="text-grey">{{ title }}</span>
    </q-card-section>

    <q-card-section class="text-weight-light">
        {{ description }}
    </q-card-section>

    <q-card-section v-if="social" class="q-gutter-sm">
      <a v-if="facebook" :href="facebook" target="_blank">
        <img src="../assets/social-icons/facebook.svg" class="social-icon">
      </a>
      <a v-if="instagram" :href="instagram" target="_blank">
        <img src="../assets/social-icons/instagram.svg" class="social-icon">
      </a>
      <a v-if="linkedin" :href="linkedin" target="_blank">
        <img src="../assets/social-icons/linkedin.svg" class="social-icon">
      </a>
      <a v-if="twitter" :href="twitter" target="_blank">
        <img src="../assets/social-icons/twitter.svg" class="social-icon">
      </a>
      <a v-if="github" :href="github" target="_blank">
        <img src="../assets/social-icons/github.svg" class="social-icon">
      </a>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import {
  defineComponent, computed
} from '@vue/composition-api';

export default defineComponent({
  name: 'featureCard',
  props: {
    img: {
      type: String,
      required: false,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      default: require('../assets/ano.jpg')
    },
    name: {
      type: String,
      required: false,
      default: 'John Johnson'
    },
    title: {
      type: String,
      required: false,
      default: 'Developer'
    },
    description: {
      type: String,
      required: false,
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    facebook: {
      type: String,
      required: false,
    },
    instagram: {
      type: String,
      required: false,
    },
    linkedin: {
      type: String,
      required: false,
    },
    twitter: {
      type: String,
      required: false,
    },
    github: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    const social = computed(() => {
      return (props.facebook || props.linkedin || props.instagram || props.twitter || props.github)
    });

    return { social };
  },
});
</script>

<style scoped>
.social-icon {
  max-width: 25px;
  filter: invert(0.5);
}
.social-icon:hover {
  filter: invert(0);
}
</style>