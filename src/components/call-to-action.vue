<template>
  <div class="q-py-md">
    <q-parallax v-if="img" :height="300" :speed="0.9">
      <template v-slot:media>
        <img :src="img">
      </template>

      <template v-slot:content>
        <div
          class="absolute row items-center full-width"
        >
          <div class="text-h3 font-weight-bold text-white text-center col-md-8 col-xs-12 q-px-xs">
            {{ title }}
            </div>
          <div class="text-center col-md-4 col-xs-12">
            <q-btn :label="buttonLabel" :color="buttonColor" size="xl" no-caps class="q-mt-md" />
          </div>
        </div>
      </template>
    </q-parallax>
    <div v-else-if="color" style="height: 300px;" class="row items-center full-width" :class="bannerClass">
      <div class="text-h3 font-weight-bold text-white text-center col-md-8 col-xs-12 q-px-xs">
        {{ title }}
        </div>
      <div class="text-center col-md-4 col-xs-12">
        <q-btn :label="buttonLabel" :color="buttonColor" size="xl" no-caps class="q-mt-md" />
      </div>
    </div>
    <div v-else-if="gradient" style="height: 300px;" class="row items-center full-width" :style="gradientStyle">
      <div class="text-h3 font-weight-bold text-white text-center col-md-8 col-xs-12 q-px-xs">
        {{ title }}
        </div>
      <div class="text-center col-md-4 col-xs-12">
        <q-btn
          :label="buttonLabel"
          :color="buttonColor"
          size="xl"
          no-caps
          class="q-mt-md"
          @click="$emit('click')"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, computed
} from '@vue/composition-api';

export default defineComponent({
  name: 'callToAction',
  props: {
    img: {
      type: String,
      required: false,
      default: null
    },
    title: {
      type: String,
      required: false,
      default: 'We want to make it easy and fast for you!'
    },
    buttonLabel: {
      type: String,
      required: false,
      default: 'Download now'
    },
    buttonColor: {
      type: String,
      required: false,
      default: 'red'
    },
    color: {
      type: String,
      required: false,
      default: null
    },
    gradient: {
      type: String,
      required: false,
      default: 'linear-gradient(to right, #30cfd0 0%, #330867 100%)'
    },
  },
  setup(props) {
    const bannerClass = computed(() => {
      return `bg-${props.color}`
    });

    const gradientStyle = computed(() => {
      return `background-image: ${props.gradient};`
    });


    return { bannerClass, gradientStyle };
  },
});
</script>

<style scoped>
</style>
