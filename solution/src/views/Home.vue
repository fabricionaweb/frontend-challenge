<template>
  <main class="home">
    <div class="app-container">
      <ul>
        <li v-for="item in items" :key="item.id" class="item">
          <input type="checkbox" />
          <img
            class="item-avatar"
            src="@/assets/person@2x.png"
            width="26"
            height="26"
          />
          <div class="item-content">
            <p class="item-title">
              <strong>{{ item.voice }}</strong>
            </p>
            <p class="item-text">{{ item.text }}</p>
            <button class="clear-button item-delete" title="Delete row">
              <IconDelete />
            </button>
          </div>
        </li>
      </ul>
    </div>

    <button class="clear-button add-button">
      <IconAdd />
    </button>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import IconDelete from "@/assets/delete.svg";
import IconAdd from "@/assets/add.svg";

export default Vue.extend({
  computed: mapState(["items"]),

  mounted() {
    // this.$store.dispatch("loadItems");
  },

  components: {
    IconDelete,
    IconAdd,
  },
});
</script>

<style lang="stylus" scoped>
@import "../assets/variables"

$border-color = #EAEDEF

.app-container
  background-color #FFFFFF
  border 1px solid $border-color
  padding 0

ul
  list-style none
  margin 0
  padding 0

.item
  display flex
  position relative
  padding $container-gutter

  &:not(:first-of-type)
    border-top 1px solid $border-color

  &-avatar
    margin 0 1rem

  &-title
    margin-top 0
    color $title-color-secondary

  &-text
    margin-bottom 0

  &-delete
    width 1.5rem
    height 1.5rem
    position absolute
    right $container-gutter
    top $container-gutter
    opacity 0
    transition opacity 0.25s ease-in-out

    &:focus, ~/:hover &
      opacity 1

.add-button
  width 2rem
  height 2rem
  display block
  margin $container-gutter auto
</style>
