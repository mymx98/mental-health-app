<template>
  <div class='MediaStoryInfo'>
    <div class='MediaStoryInfo__narrator-profile'>
      <img :src='media.narratorProfileSrc'
           class='MediaStoryInfo__narrator-profile-img' />
    </div>
    <div class='MediaStoryInfo__title'>
      {{ media.title }}
    </div>
    <div class='MediaStoryInfo__description'>
      {{ media.description }}
    </div>
    <div class='MediaStoryInfo__contributors'>
      <div class='MediaStoryInfo__contributor-wrapper'>
        <div class='MediaStoryInfo__contributor-label'>
          Narrator
        </div>
        <div class='MediaStoryInfo__contributor-name'>
          {{ media.narrator }}
        </div>
      </div>
      <div class='MediaStoryInfo__contributor-wrapper'>
        <div class='MediaStoryInfo__contributor-label'>
          Author
        </div>
        <div class='MediaStoryInfo__contributor-name'>
          {{ media.author }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MediaStoryInfo",
  props: {
    media: {
      type: Object
    }
  }
};
</script>

<style lang='scss' scoped>
.MediaStoryInfo {
  text-align: center;
  max-width: 375px;
  width: 100%;

  &__narrator-profile {
    margin: 24px 0;
  }

  &__narrator-profile-img {
    width: 96px;
    height: 96px;
    border-radius: 100%;
  }

  &__title {
    font-size: 2em;
    margin-bottom: 32px;
  }

  &__description {
    font-size: 1.2em;
    margin-bottom: 32px;
  }

  &__contributors {
    display: flex;
    // justify-content: center;
    justify-content: space-between;
  }

  // &__contributor-wrapper {
  //   margin-right: 16px;
  // }

  &__contributor-label {
    font-size: 0.9em;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 12px;
  }

  &__contributor-name {
    font-size: 1.2em;
  }
}
</style>
