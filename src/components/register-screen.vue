<template>
  <form-screen
    :title="title"
    :subtitle="subtitle"
    :logo="logo"
    :background="background"
  >
    <template v-slot:form>
      <q-form class="q-gutter-md">
        <span class="text-subtitle1 text-weight-bold text-grey-7">
          {{ registerTitle }}
        </span>
        <q-input dense outlined v-model="username" :label="usernameLabel" aria-autocomplete="username" />
        <q-input dense outlined v-model="email" :label="emailLabel" aria-autocomplete="email" />
        <q-input dense type="password" outlined v-model="password" :label="passwordLabel" aria-autocomplete="current-password" />
        <q-input dense type="password" outlined v-model="passwordConfirmation" :label="passwordLabel" aria-autocomplete="current-password" />
        <div>
            <q-btn
              class="text-capitalize"
              :color="registerColor"
              :label="registerLabel"
              @click="$emit('register', payload)"
            />
        </div>
      </q-form>
    </template>
  </form-screen>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api';
import FormScreen from './form-screen.vue'

export default defineComponent({
  name: 'RegisterScreen',
  components: { FormScreen }, 
  props: {
    title: {
      type: String,
      required: false,
      default: 'Register'
    },
    subtitle: {
      type: String,
      required: false,
      default: 'Enter personal information'
    },
    registerTitle: {
      type: String,
      required: false,
      default: 'Sign up'
    },
    usernameLabel: {
      type: String,
      required: false,
      default: 'Username'
    },
    emailLabel: {
      type: String,
      required: false,
      default: 'E-mail'
    },
    passwordLabel: {
      type: String,
      required: false,
      default: 'Password'
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
    const email = ''
    const password = ''
    const passwordConfirmation = ''
    const username = ''
    const payload = computed(() => {
      return {
        username,
        password,
        email, 
        passwordConfirmation
      }
    });

    return { email, password, username, passwordConfirmation, payload };
  },
});
</script>
