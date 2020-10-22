<template>
  <q-card class="row items-center q-pa-none q-ma-none shadow-24 custom-height-class">
      <q-card-section
        class="col-md-4 col-lg-4 col-sm-12 col-xs-12 items-center q-pa-md full-height"
        horizontal="horizontal"
        :style="{ backgroundImage: background }"
      >
        <div class="text-center full-width">
          <img :src="logo" style="width: 50%" />
          <div class="text-weight-bolder text-white text-h6">
            {{ title }}
          </div>
          <div class="text-caption text-white">
            {{ subtitle }}
          </div>
        </div>
      </q-card-section>
      <q-card-section 
        class="col-md-8 col-lg-8 col-sm-12 col-xs-12 full-height q-pa-md items-center"
        horizontal="horizontal"
      >
        <div class="full-width">
          <slot name="form" />
        </div>
      </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'FormScreen',
  props: {
    title: {
      type: String,
      required: false,
      default: 'Login'
    },
    subtitle: {
      type: String,
      required: false,
      default: 'Enter username and password'
    },
    logo: {
      type: String,
      required: false,
      default: 'https://cdn.quasar.dev/logo/svg/quasar-logo.svg'
    },
    background: {
      type: String,
      required: false,
      default: 'linear-gradient(50deg, #30cfd0 0%, #330867 100%)'
    }
  },
});
</script>

<style scoped>
.custom-height-class {
  height: 700px;
  min-width: 800px;
}
@media screen and (max-width: 1024px) {
  .custom-height-class {
    height: initial;
    min-width: 0;
  }
}
</style>
