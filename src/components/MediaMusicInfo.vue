<template>
  <div class='MediaMusicInfo'>
    <div class='MediaMusicInfo__title'>
      {{ media.title }}
    </div>
    <div class='MediaMusicInfo__description'>
      {{ media.description }}
    </div>
    <div class='MediaMusicInfo__category'>
      {{ media.category }}
    </div>
  </div>
</template>

<script>
export default {
  name: "MediaMusicInfo",
  props: {
    media: {
      type: Object
    }
  }
};
</script>

<style lang='scss' scoped>
.MediaMusicInfo {
  text-align: center;
  max-width: 375px;
  width: 100%;

  &__title {
    font-size: 2em;
    margin-top: 64px;
    margin-bottom: 64px;
  }

  &__description {
    font-size: 1.4em;
    margin-bottom: 32px;
  }

  &__category {
    font-size: 1.1em;
    margin-bottom: 32px;
    text-transform: capitalize;
  }
}
</style>
