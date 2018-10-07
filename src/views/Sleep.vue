<template>
  <div class='Sleep navigation-gutter'>
    <div class='Sleep__header'>
      <div class='Sleep__header-title app-gutter-spacing'>
        Sleep Stories
      </div>
      <div class='Sleep__header-description app-gutter-spacing'>
        Soothing betime stories to help youfall into a deep and natural sleep.
      </div>
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
    <MediaPlayer :visible='playerVisible'
                 @close='closePlayer'>
      Sleep
    </MediaPlayer>
  </div>
</template>

<script>
// import DomPortal from "@/directives/vue-dom-portal";
import SleepSessionCardLink from "@/components/SleepSessionCardLink";
import SleepFilter from "@/components/SleepFilter";
import MediaPlayer from "@/components/MediaPlayer";
import Sleep from "@/api/Sleep";

export default {
  name: "Sleep",
  components: {
    MediaPlayer,
    SleepFilter,
    SleepSessionCardLink
  },
  // directives: {
  //   "dom-portal": DomPortal
  // },
  data() {
    return {
      list: [],
      playerVisible: false
    };
  },
  methods: {
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
    const response = await Sleep.getSleepStories();

    this.list = response.data.data;
  }
};
</script>

<style lang='scss' scoped>
@import "@/styles/variables.scss";

.Sleep {
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
