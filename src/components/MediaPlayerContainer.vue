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
                     :currentTime='currentTime'
                     :duration='duration'
                     :playerStatus='playerStatus'
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
                          :currentTime='currentTime'
                          :playerStatus='playerStatus'
                          @pause='pause'
                          @play='play'
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
    },
    autoplay: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    media(val, previousVal) {
      console.log("media watcher", val, previousVal);
      if (val) {
        if (this.playerStatus === "playing") {
          this.player.src = this.media.mediaSrc;
          this.play();
        }
        if (!previousVal || this.playerStatus === "stopped") {
          this.maximize();
          this.player.src = this.media.mediaSrc;
          this.play();
        }
      }
    }
  },
  data() {
    return {
      visible: false,
      minimized: false,
      loading: false,
      currentTime: 0,
      duration: 0,
      playerStatus: "paused" // 'playing', 'paused', 'stopped',
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
      let targetTime = this.player.currentTime - this.seekInterval;
      if (targetTime < 0) {
        targetTime = 0;
      }

      this.player.currentTime = targetTime;
    },
    pause() {
      this.player.pause();
      this.playerStatus = "paused";
    },
    async play() {
      try {
        if (this.media) {
          await this.player.play();
          this.playerStatus = "playing";
        }
      } catch (e) {
        console.log(e);
        this.playerStatus = "paused";
      }
    },
    forward() {
      let targetTime = this.player.currentTime + this.seekInterval;
      if (targetTime > this.player.duration) {
        targetTime = this.player.duration;
      }
    },
    seek(time) {
      // console.log("seek");
      if (this.player) {
        this.player.currentTime = time;
        // this.currentTime = this.player.currentTime;
      }
    },
    stop() {
      console.log("stop");
      this.player.pause();
      this.player.src = "";
      this.player.load();
      this.playerStatus = "stopped";
      this.visible = false;
      this.$store.dispatch("blur", false);
      this.$store.dispatch("navigationVisible", true);
      this.$emit("close");
    },
    sliderClicked(e) {
      console.log(
        "sliderClicked",
        e.offsetX,
        e.target.clientWidth,
        (e.offsetX / e.target.clientWidth) * 100
      );

      const sliderFactor = e.offsetX / e.target.clientWidth;

      this.$emit("seek", this.duration * sliderFactor);
      // this.player.currentTime = this.player.duration * sliderFactor;
    },
    togglePlayerStatus() {
      if (this.playerStatus === "playing") {
        this.playerStatus = "paused";
        this.pause();
      } else {
        this.playerStatus = "playing";
        this.play();
      }
    },
    seektimeupdate() {
      if (this.player) {
        this.currentTime = this.player.currentTime;
      }
    },
    destroyPlayer() {
      if (this.player) {
        this.player.pause();
        this.player.src = "";
        this.player.load();
        this.player.remove();
        this.player = null;
      }
    }
  },
  mounted() {
    // this.$refs.player.play();
    this.loading = true;
    this.player = new Audio();
    // this.player.src = this.media.mediaSrc;
    this.player.addEventListener("timeupdate", this.seektimeupdate);

    this.player.addEventListener("ended", () => {
      this.player.currentTime = 0;
      this.pause();
    });

    if (this.autoplay) {
      this.player.addEventListener(
        "canplay",
        () => {
          this.loading = false;
          this.duration = this.player.duration;
          this.play();
        },
        false
      );
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/styles/variables.scss";

.MediaPlayerContainer {
  width: 100%;
  height: 100%;
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
