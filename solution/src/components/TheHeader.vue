<template>
  <header class="the-header">
    <div class="app-container">
      <h1>Transcriptions</h1>

      <nav>
        <button class="clear-button" title="Upload data">
          <IconUpload />
        </button>

        <button class="clear-button" title="Get data" @click="loadItems">
          <IconDocument />
        </button>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
import IconUpload from "@/assets/upload.svg";
import IconDocument from "@/assets/document.svg";

export default Vue.extend({
  methods: {
    loadItems() {
      this.$store.dispatch("loadItems");
    },
  },

  components: {
    IconUpload,
    IconDocument,
  },
});
</script>

<style lang="stylus" scoped>
@import "../assets/variables"

.the-header
  height 4.3125rem
  margin-bottom $container-gutter
  background-color #FFFFFF
  box-shadow 0 1px 2px 0 rgba(0, 0, 0, 0.24),
             0 1px 3px 0 rgba(0, 0, 0, 0.12)

.app-container
  display flex
  align-items center

h1
  color $title-color-primary
  font-family $font-family-secondary
  font-weight 500
  font-size 1.125rem
  flex 1

nav
  flex auto 0
  display flex

button
  margin 0 0 0 $container-gutter
  width 1.5rem
  height 1.5rem
</style>
