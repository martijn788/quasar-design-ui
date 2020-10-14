<template>
  <div class="row items-center q-ma-none q-pa-none" :class="{ 'reverse': reverse && $q.screen.gt.sm }">
    <q-img
       :src="img"
       class="col-md-6"
    />
    <div class="col-md-6 q-px-sm" :class="{ 'text-right': textRight, 'q-px-xl': $q.screen.gt.sm }">
      <h2>{{ title }}</h2>
      <p>
        {{ description }}
      </p>
      <div v-if="features && features.length > 0">
        <p v-if="featureTitle" class="text-weight-bold q-mb-none">
          {{ featureTitle }}
        </p>
        <q-list dense class="q-mb-md">
          <q-item v-for="feature in features" :key="feature">
            <q-item-section v-if="!textRight" avatar>
              <q-avatar :text-color="color" icon="done" />
            </q-item-section>
            <q-item-section>
              {{ feature }}
            </q-item-section>
            <q-item-section v-if="textRight" avatar>
              <q-avatar :text-color="color" icon="done" />
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      <q-btn v-if="buttonLabel" :label="buttonLabel" :color="color" @click="$emit('click')" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'imgText',
  props: {
    img: {
      type: String,
      required: false,
      default: null
    },
    title: {
      type: String,
      required: false,
      default: 'Easy design with flexibility'
    },
    description: {
      type: String,
      required: false,
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet porttitor quam vitae vulputate. Sed est turpis, rutrum ac vehicula a, aliquam id arcu. Mauris tincidunt quis ipsum ultrices congue. Nam commodo dolor mauris, ac malesuada nibh tempor sodales. In ultricies ante mi, ac porttitor libero accumsan vel. Aliquam ante urna, scelerisque vitae facilisis eu, scelerisque eget velit.'
    },
    featureTitle: {
      type: String,
      required: false,
      default: null
    },
    features: {
      type: Array,
      required: false,
      default: null
    },
    color: {
      type: String,
      required: false,
      default: 'primary'
    },
    buttonLabel: {
      type: String,
      required: false,
      default: null
    },
    reverse: {
      type: Boolean,
      required: false,
      default: false
    },
    textRight: {
      type: Boolean,
      required: false,
      default: false
    }
  }
});
</script>

<style scoped>
</style>