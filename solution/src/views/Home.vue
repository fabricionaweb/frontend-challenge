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
            <button class="clear-button item-delete">
              <IconDelete />
            </button>
          </div>
        </li>
      </ul>
    </div>

    <button class="clear-button add-button"><IconAdd /></button>
  </main>
</template>

<script lang="ts">
import IconDelete from "@/assets/delete.svg";
import IconAdd from "@/assets/add.svg";

export default {
  data() {
    return {
      items: [
        {
          id: 1,
          voice: "Voice 2",
          text: "This is a one line sentence made to show how it fits",
        },
        {
          id: 2,
          voice: "Voice 1",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ",
        },
        {
          id: 3,
          voice: "Voice 1",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
      ],
    };
  },
  components: {
    IconDelete,
    IconAdd,
  },
};
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
