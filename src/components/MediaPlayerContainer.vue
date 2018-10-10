<template>
  <portal to="media-player">
    <TransitionSlideFromBottom>
      <div v-if='visible && !minimized'
           class='MediaPlayerContainer'>
        <!-- <MediaPlayer class='MediaPlayer'
                     :media='media'
                     autoplay
                     v-on='$listeners' /> -->
        <MediaPlayer class='MediaPlayer'
                     :media='media'
                     :loading='false'
                     :currentTime='40'
                     :duration='100'
                     playerStatus='paused'
                     @minimize='minimize'
                     @rewind='rewind'
                     @pause='pause'
                     @play='play'
                     @forward='forward'
                     @seek='seek'
                     @stop='stop'>
          <!-- <div v-if='media.type === "sleep"'> -->
          <div class='MediaPlayerContainer__media-info'>
            <MediaStoryInfo v-if='media.type === "story"'
                            :media='media' />
          </div>
        </MediaPlayer>

      </div>
    </TransitionSlideFromBottom>
    <MediaPlayerMinimized :visible='visible && minimized'
                          :media='media'
                          @maximize='maximize' />
  </portal>
</template>

<script>
import TransitionSlideFromBottom from "@/components/Shared/TransitionSlideFromBottom";
import MediaPlayer from "@/components/MediaPlayer";
import MediaPlayerMinimized from "@/components/MediaPlayerMinimized";
import MediaStoryInfo from "@/components/MediaStoryInfo";

export default {
  name: "MediaPlayerContainer",
  components: {
    MediaPlayer,
    MediaPlayerMinimized,
    MediaStoryInfo,
    TransitionSlideFromBottom
  },
  props: {
    // visible: {
    //   type: Boolean,
    //   default: false
    // },
    media: {
      type: Object
    }
  },
  watch: {
    media(val, previousVal) {
      console.log("media watcher", val);
      if (val) {
        if (!previousVal) {
          this.maximize();
        }
      }
    }
  },
  data() {
    return {
      visible: false,
      minimized: false
    };
  },
  methods: {
    maximize() {
      console.log("maximize");
      this.visible = true;
      this.minimized = false;
      this.$store.dispatch("blur", true);
      this.$store.dispatch("navigationVisible", false);
    },
    minimize() {
      console.log("minimize");
      this.visible = true;
      this.minimized = true;
      this.$store.dispatch("blur", false);
      this.$store.dispatch("navigationVisible", true);
    },
    rewind() {
      console.log("rewind");
    },
    pause() {
      console.log("pause");
    },
    play() {
      console.log("play");
    },
    forward() {
      console.log("forward");
    },
    seek() {
      console.log("seek");
    },
    stop() {
      console.log("stop");
      this.visible = false;
      this.$store.dispatch("blur", false);
      this.$store.dispatch("navigationVisible", true);
      this.$emit("close");
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/styles/variables.scss";

.MediaPlayerContainer {
  width: 100%;
  height: 100%;
  // border: 3px solid white;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 24px;

  &__media-info {
    display: flex;
    justify-content: center;
  }
}
</style>
