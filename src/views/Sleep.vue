<template>
  <div class='Sleep navigation-gutter'>
    <div class='app-header'>
      <h2 class='app-gutter-spacing'>
        Sleep Stories
      </h2>
      <p class='Sleep__header-description app-gutter-spacing'>
        Soothing betime stories to help youfall into a deep and natural sleep.
      </p>
      <div class='Sleep__filter app-gutter-spacing'>
        <SleepFilter />
      </div>
    </div>
    <div class='Sleep__list app-gutter-spacing'>
      <div class='Sleep__item'
           v-for='item in list'
           :key='item.id'>
        <SleepSessionCardLink :title='item.title'
                              :subtitle='item.author'
                              :duration='item.duration'
                              :imgSrc='item.imgSrc'
                              @click.native='itemClicked(item)' />
      </div>
    </div>
    <MediaPlayerContainer :media='media'
                          @close='media = null' />
  </div>
</template>

<script>
import SleepSessionCardLink from "@/components/SleepSessionCardLink";
import SleepFilter from "@/components/SleepFilter";
import MediaPlayerContainer from "@/components/MediaPlayerContainer";
import MediaPlayerMinimized from "@/components/MediaPlayerMinimized";
import Sleep from "@/api/Sleep";

export default {
  name: "Sleep",
  components: {
    MediaPlayerContainer,
    MediaPlayerMinimized,
    SleepFilter,
    SleepSessionCardLink
  },
  data() {
    return {
      media: null,
      list: []
    };
  },
  methods: {
    itemClicked(item) {
      this.media = item;
    }
  },
  async created() {
    const response = await Sleep.getSleepStories();

    this.list = response.data.data;
  }
};
</script>

<style lang='scss' scoped>
@import "@/styles/variables.scss";

.Sleep {
  &__header-title {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 200;
    font-size: 1.6em;
    margin-bottom: 24px;
    text-align: center;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__item {
    flex: 0 0 46%;

    margin: 0 12px 12px 0;
  }
}
</style>
