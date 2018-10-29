<template>
  <div class='Music navigation-gutter'>
    <div class='app-header'>
      <h2 class='app-gutter-spacing'>
        Music
      </h2>
      <div class='Music__filter app-gutter-spacing'>
        <FilterList :list='filterList'
                    @filterClicked='filterClicked' />
      </div>
    </div>
    <div class='Music__list app-gutter-spacing'>
      <div class='Music__item'
           v-for='item in list'
           :key='item.id'>
        <AudioCardLink :title='item.title'
                       :subtitle='item.author'
                       :duration='item.duration'
                       :imgSrc='item.imgSrc'
                       @click.native='itemClicked(item)' />
      </div>
    </div>
    <MediaPlayerContainer :media='media'
                          @close='media = null'>
      Music
    </MediaPlayerContainer>
  </div>
</template>

<script>
import AudioCardLink from "@/components/Shared/AudioCardLink";
import FilterList from "@/components/Shared/FilterList";
import GuidedSessionList from "@/components/GuidedSessionList";
import Music from "@/api/Music";
import MediaPlayerContainer from "@/components/MediaPlayerContainer";

export default {
  name: "Music",
  components: {
    AudioCardLink,
    FilterList,
    GuidedSessionList,
    MediaPlayerContainer
    // MusicFilter,
    // MusicSessionCardLink
  },
  data() {
    return {
      media: null,
      filterList: [
        {
          filter: "all",
          label: "All",
          active: true
        },
        {
          filter: "favorites",
          label: "Favorites",
          active: false
        },
        {
          filter: "sleep",
          label: "Sleep",
          active: false
        },
        {
          filter: "anxiety",
          label: "Anxiety",
          active: false
        },
        {
          filter: "beginners",
          label: "Beginners",
          active: false
        }
      ],
      list: []
    };
  },
  methods: {
    filterClicked(item) {
      this.filterList.forEach(x => (x.active = false));
      item.active = true;
    },
    itemClicked(item) {
      this.media = item;
    }
  },
  async created() {
    const result = await Music.getMusicTracks();

    this.list = result.data.data;
  }
};
</script>

<style lang='scss' scoped>
@import "@/styles/variables.scss";

.Music {
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
