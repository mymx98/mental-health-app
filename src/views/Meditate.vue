<template>
  <div class='Meditate navigation-gutter'>
    <div class='app-header'>
      <h2 class='app-gutter-spacing'>
        Meditate
      </h2>
      <div class='Meditate__filter app-gutter-spacing'>
        <FilterList :list='filterList'
                    @filterClicked='filterClicked' />
      </div>
    </div>
    <div class='app-gutter-spacing'>
      <GuidedSessionList :list='list' />
    </div>
    <div class='Meditate__list app-gutter-spacing'>
      <div class='Meditate__item'
           v-for='item in list'
           :key='item.id'>
        <!-- <MeditateSessionCardLink :title='item.title'
                                 :subtitle='item.author'
                                 :duration='item.duration'
                                 :imgSrc='item.imgSrc' /> -->
      </div>
    </div>
    <MediaPlayerContainer :visible='playerVisible'
                          @close='closePlayer'>
      Meditate
    </MediaPlayerContainer>
  </div>
</template>

<script>
// import MeditateSessionCardLink from "@/components/MeditateSessionCardLink";
import FilterList from "@/components/Shared/FilterList";
import GuidedSessionList from "@/components/GuidedSessionList";
import GuidedSession from "@/api/GuidedSession";
import MediaPlayerContainer from "@/components/MediaPlayerContainer";

// import Meditate from "@/api/Meditate";

export default {
  name: "Meditate",
  components: {
    FilterList,
    GuidedSessionList,
    MediaPlayerContainer
    // MeditateFilter,
    // MeditateSessionCardLink
  },
  data() {
    return {
      playerVisible: false,
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
    // const response = await Meditate.getMeditateStories();

    // this.list = response.data.data;
    const result = await GuidedSession.getMostRecentGuidedSession();

    this.list = [result.data.data];
  }
};
</script>

<style lang='scss' scoped>
@import "@/styles/variables.scss";

.Meditate {
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
