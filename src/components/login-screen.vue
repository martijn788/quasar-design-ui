<template lang="pug">
  q-card.row.items-center.q-pa-none.q-ma-none.shadow-24.custom-card-class
    q-card-section.col-md-4.col-lg-4.col-sm-12.sol-xs-12.items-center.q-pa-md(
      horizontal
      :style="{ backgroundColor: background, height: $q.platform.is.desktop ? '700px' : 'auto' }"
      style="background-color: #1f509e;")
      .text-center.full-width
        img.custom-cursor-pointer(:src="logoPath" style="width: 50%")
        .text-weight-bolder.text-white.text-h6 {{ title }}
        .text-caption.text-white {{ subtitle }}
    q-card-section.col-md-8.col-lg-8.col-sm-12.sol-xs-12
      q-card-section.items-center
        div
          .text-weight-bolder.text-center.q-mb-md.text-primary.text-h6(v-if="!$q.platform.is.desktop") Quasar Shopping
          q-form.q-gutter-md(
            :style="$q.platform.is.desktop ? 'width:55%;margin: auto;' : 'margin: auto;'")
            span.text-subtitle1.text-weight-bold.text-grey-7 Sign in
            q-input(
              dense
              outlined
              v-model="username"
              label="Username"
              lazy-rules
              )
            q-input(
              dense
              type="password"
              outlined
              v-model="password"
              label="Password"
              lazy-rules
              )
            q-checkbox.text-grey-8(
              dense
              v-model="rememberMe"
              @click="rememberMe = !rememberMe"
              label="Remember me"
              )
            div
              q-btn.text-capitalize(
                size="sm"
                style="width:75px"
                dense
                label="Login"
                type="button"
                color="primary"
                )
              q-btn.float-right.text-blue-9.text-capitalize(
                size="sm"
                style="width:75px;border: 1px solid #36669e;"
                dense
                label="Sign Up"
                type="button"
                )
</template>

<script>
export default {
  name: 'LoginScreen',
  data: function() {
    return {
      rememberMe: false,
      password: '',
      username: ''
    }
  },
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    },
    subtitle: {
      type: String,
      required: true,
      default: ''
    },
    logoPath: {
      type: String,
      required: true,
      default: ''
    },
    background: {
      type: String,
      required: false,
      default: 'linear-gradient(50deg, #30cfd0 0%, #330867 100%)'
    }
  }
}
</script>

<style scoped>
.custom-card-class {
  width: 55%;
  height: 30%;
}
.custom-cursor-pointer {
  cursor: pointer;
}
</style>
