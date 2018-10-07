<template>
  <div class='Meditate'>
    <div class='Meditate__header'>
      <div class='Meditate__header-title app-gutter-spacing'>
        Meditate
      </div>
      <!-- <div class='Meditate__header-description app-gutter-spacing'>
        Soothing betime stories to help youfall into a deep and natural Meditate.
      </div> -->
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
  </div>
</template>

<script>
// import MeditateSessionCardLink from "@/components/MeditateSessionCardLink";
import FilterList from "@/components/Shared/FilterList";
import GuidedSessionList from "@/components/GuidedSessionList";
import GuidedSession from "@/api/GuidedSession";

// import Meditate from "@/api/Meditate";

export default {
  name: "Meditate",
  components: {
    FilterList,
    GuidedSessionList
    // MeditateFilter,
    // MeditateSessionCardLink
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
      list: []
    };
  },
  methods: {
    filterClicked(item) {
      this.filterList.forEach(x => (x.active = false));
      item.active = true;
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
