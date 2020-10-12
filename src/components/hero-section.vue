<template>
  <div class="full-width full-height">
    <div class="shape" />
    <slot name="content">
      <div class="content row q-gutter-y-md">
        <slot name="title-slot">
          <div class="title text-h2 col-12 q-mt-lg col-md-5 offset-md-1 col-sm-12">
            {{ title }}
          </div>
        </slot>
        <div class="flex-break col-12"></div>
        <slot name="description-slot">
          <div class="description col-12 q-mt-lg col-md-5 offset-md-1 col-sm-12">
            {{ description }}
          </div>
        </slot>
        <div class="flex-break col-12"></div>
        <slot name="action-slot">
          <div class="action col-md-5 offset-md-1 col-sm-12">
            <q-btn :label="buttonLabel" :color="buttonColor" /> 
          </div>
        </slot>
      </div>
    </slot>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, PropType, computed, ref, toRef, Ref,
} from '@vue/composition-api';
import { Todo, Meta } from './models';

export default defineComponent({
  name: 'CompositionComponent',
  props: {
    title: {
      type: String,
      required: false,
      default: 'We bring technology to the people'
    },
    description: {
      type: String,
      required: false,
      default: 'The design system comes with four pre-built pages to help you get started faster. You can change the text and images and you\'re good to go.'
    },
    buttonLabel: {
      type: String,
      required: false,
      default: 'More info...'
    },
    buttonColor: {
      type: String,
      required: false,
      default: 'primary'
    },
  },
  setup() {
    return
  },
});
</script>

<style scoped>
.content{
  width: 100%;
  max-height: 800px;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 200px;
}

.shape{
  width: 100%;
  min-height: 800px;
  max-height: 800px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 1;
  background-image: linear-gradient(50deg, #30cfd0 0%, #330867 100%);
  -webkit-transform: skewY(-10deg);
  transform: skewY(-10deg);
  -webkit-transform-origin: 0;
  transform-origin: 0;
}

@media (max-width: 1023px) {
  .content {
    margin-top: 100px;
    padding: 10px;
  }
  .shape {
    min-height: 600px;
  }
}
</style>