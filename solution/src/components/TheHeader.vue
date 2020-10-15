<template>
  <header class="the-header">
    <div class="app-container">
      <h1>Transcriptions</h1>

      <nav>
        <button>
          <IconUpload />
        </button>

        <button>
          <IconDocument />
        </button>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import IconUpload from "@/assets/upload.svg";
import IconDocument from "@/assets/document.svg";

export default {
  components: {
    IconUpload,
    IconDocument,
  },
};
</script>

<style lang="stylus" scoped>
@import "../assets/variables"

.the-header
  height 4.3125rem
  background-color #FFFFFF
  box-shadow 0 1px 2px 0 rgba(0, 0, 0, 0.24),
             0 1px 3px 0 rgba(0, 0, 0, 0.12)

.app-container
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
  appearance none
  background none
  border 0
  padding 0
  margin 0 0 0 $container-gutter
  width 1.5rem
  height 1.5rem
</style>
