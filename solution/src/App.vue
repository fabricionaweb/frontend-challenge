<template>
  <div class="app">
    <TheHeader />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TheHeader from "@/components/TheHeader.vue";

export default Vue.extend({
  components: {
    TheHeader,
  },
});
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

button, input[type="checkbox"]
  &:not(disabled)
    cursor pointer

.clear-button
  appearance none
  background none
  border 0
  padding 0
  margin 0

.app-container
  width 100%
  min-height 100%
  max-width $container-width
  box-sizing border-box
  padding-left $container-gutter
  padding-right $container-gutter
  margin-left auto
  margin-right auto
</style>
