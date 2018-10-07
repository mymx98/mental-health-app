<template>
  <div class='App'>
    <div class='App__content'
         :class='contentClasses'>
      <transition name="route"
                  mode="out-in">
        <router-view :key='$route.path' />
      </transition>
    </div>
    <div class='App__navigation'>
      <Navigation class='App__navigation'
                  v-if='navigationVisible' />
    </div>
    <!-- <div class='App__media-player-container'>
      <MediaPlayer v-if='mediaPlayerVisible'
                   @close='mediaPlayerClose' />
    </div> -->
    <portal-target name="media-player" />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import MediaPlayer from "@/components/MediaPlayer";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Navigation,
    MediaPlayer
  },
  computed: {
    ...mapGetters({
      blur: "blur",
      navigationVisible: "navigationVisible",
      mediaPlayerVisible: "mediaPlayerVisible"
    }),
    contentClasses() {
      return {
        "App__content--blur": this.blur
      };
    }
  },
  methods: {
    mediaPlayerClose() {
      this.$store.dispatch("mediaPlayerVisible", false);
      this.$store.dispatch("blur", false);
      this.$store.dispatch("navigationVisible", true);
    }
  }
};
</script>


<style lang="scss">
@import "@/styles/variables.scss";

.App {
  // display: flex;
  // flex-direction: column;
  height: 100%;
  // height: 100vh;
  // justify-content: center;
  // align-items: center;

  &__content {
    // overflow-y: auto;
    // flex: 1 1 auto;
    // width: 100%;
    // max-width: 960px;
    // height: 100%;
    // transition: $swift-ease-out;
    // transition-property: filter;
    // margin-bottom: 160px;

    &--blur {
      filter: blur(5px);
    }
  }

  // &__navigation {
  //   flex: 0;
  // }

  &__navigation {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
}
</style>
