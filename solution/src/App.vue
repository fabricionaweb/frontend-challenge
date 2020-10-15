<template>
  <div class="app">
    <TheHeader />
    <router-view />
  </div>
</template>

<script lang="ts">
import TheHeader from "@/components/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
};
</script>

<style lang="stylus">
@import "./assets/variables"

body
  font-family $font-family-primary
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  margin 0
  font-size 16px
  background-color $body-background
  color $text-color

button
  cursor pointer

.app-container
  display flex
  width 100%
  min-height 100%
  max-width $container-width
  box-sizing border-box
  padding-left $container-gutter
  padding-right $container-gutter
  margin-left auto
  margin-right auto
</style>
