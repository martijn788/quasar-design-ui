<template>
  <div class="box">
    <div class="shape" :style="styleObjectShape" />
    <slot name="content">
      <div class="content row q-gutter-y-md" :style="styleObjectContent">
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
            <q-btn :label="buttonLabel" :color="buttonColor" @click="$emit('click')" /> 
          </div>
        </slot>
      </div>
    </slot>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, computed
} from '@vue/composition-api';

export default defineComponent({
  name: 'HeroSection',
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
    backgroundColor: {
      type: String,
      required: false,
      default: null
    },
    backgroundImage: {
      type: String,
      required: false,
      default: 'linear-gradient(50deg, #30cfd0 0%, #330867 100%)'
    },
    textColor: {
      type: String,
      required: false,
      default: 'white'
    },
  },
  setup(props) {
    const styleObjectShape = computed(() => {
      return {
      backgroundImage: props.backgroundColor === null ? props.backgroundImage : '',
      backgroundColor: props.backgroundColor
      }
    });

    const styleObjectContent = computed(() => {
      return {
      color: props.textColor
      }
    });

    return { styleObjectShape, styleObjectContent };
  },
});
</script>

<style scoped>
.box {
  min-height: 800px;
  max-height: 800px;
}

.content{
  width: 100%;
  max-height: 800px;
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
  .box {
    min-height: 600px;
  }
}
</style>