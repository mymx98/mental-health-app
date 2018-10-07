<template>
  <div class='Music'>
    <div class='Music__header'>
      <div class='Music__header-title app-gutter-spacing'>
        Music
      </div>
      <!-- <div class='Music__header-description app-gutter-spacing'>
        Soothing betime stories to help youfall into a deep and natural Music.
      </div> -->
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
    <MediaPlayer :visible='playerVisible'
                 @close='closePlayer'>
      Music
    </MediaPlayer>
  </div>
</template>

<script>
import AudioCardLink from "@/components/Shared/AudioCardLink";
import FilterList from "@/components/Shared/FilterList";
import GuidedSessionList from "@/components/GuidedSessionList";
import Music from "@/api/Music";
import MediaPlayer from "@/components/MediaPlayer";

export default {
  name: "Music",
  components: {
    AudioCardLink,
    FilterList,
    GuidedSessionList,
    MediaPlayer
    // MusicFilter,
    // MusicSessionCardLink
  },
  data() {
    return {
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
      list: [],
      playerVisible: false
    };
  },
  methods: {
    filterClicked(item) {
      this.filterList.forEach(x => (x.active = false));
      item.active = true;
    },
    itemClicked(item) {
      // console.log("itemClicked", item);
      this.$store.dispatch("navigationVisible", false);
      // this.$store.dispatch("mediaPlayerVisible", true);
      this.playerVisible = true;
      this.$store.dispatch("blur", true);
    },
    closePlayer() {
      this.$store.dispatch("blur", false);
      this.playerVisible = false;
      this.$store.dispatch("navigationVisible", true);
      // this.$store.dispatch("mediaPlayerVisible", true);
    }
  },
  async created() {
    // const response = await Music.getMusicStories();

    // this.list = response.data.data;
    const result = await Music.getMusicTracks();

    this.list = result.data.data;
  }
};
</script>

<style lang='scss' scoped>
@import "@/styles/variables.scss";

.Music {
  &__header {
    background-color: $body-background-color-secondary;
    padding: 24px 0;
    margin-bottom: 24px;
  }

  &__header-title {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 200;
    font-size: 1.6em;
    margin-bottom: 24px;
    text-align: center;
  }

  &__header-description {
    font-size: 1.1em;
    text-align: center;
    margin-bottom: 12px;
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
