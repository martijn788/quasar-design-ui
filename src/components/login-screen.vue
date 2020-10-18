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
          <q-form class="q-gutter-md">
            <span class="text-subtitle1 text-weight-bold text-grey-7">
              {{ loginTitle }}
            </span>
            <q-input dense outlined v-model="username" :label="usernameLabel" aria-autocomplete="username" />
            <q-input dense type="password" outlined v-model="password" :label="passwordLabel" aria-autocomplete="current-password" />
            <q-checkbox class="text-grey-8" dense v-model="rememberMe" @click="rememberMe = !rememberMe" :label="rememberLabel" />
            <div>
                <q-btn
                  class="text-capitalize"
                  :label="loginLabel"
                  :color="loginColor"
                  @click="$emit('login', payload)"
                  />
                <q-btn
                  class="float-right text-blue-9 text-capitalize"
                  outline
                  :color="registerColor"
                  :label="registerLabel"
                  @click="$emit('register')"
                />
            </div>
          </q-form>
        </div>
      </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api';

export default defineComponent({
  name: 'LoginScreen',
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
    loginTitle: {
      type: String,
      required: false,
      default: 'Sign in'
    },
    usernameLabel: {
      type: String,
      required: false,
      default: 'Username'
    },
    passwordLabel: {
      type: String,
      required: false,
      default: 'Password'
    },
    loginLabel: {
      type: String,
      required: false,
      default: 'Login'
    },
    loginColor: {
      type: String,
      required: false,
      default: 'primary'
    },
    registerLabel: {
      type: String,
      required: false,
      default: 'Sign up'
    },
    registerColor: {
      type: String,
      required: false,
      default: 'primary'
    },
    rememberLabel: {
      type: String,
      required: false,
      default: 'Remember me'
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
  setup() {
    const rememberMe = false
    const password = ''
    const username = ''
    const payload = computed(() => {
      return {
        username,
        password,
        rememberMe
      }
    });


    return { rememberMe, password, username, payload };
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
