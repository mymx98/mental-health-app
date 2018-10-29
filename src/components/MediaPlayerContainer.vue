<template>
  <portal to="media-player">
    <TransitionSlideFromBottom>
      <div v-if='visible && !minimized'
           class='MediaPlayerContainer'>
        <MediaPlayer class='MediaPlayer'
                     :media='media'
                     :loading='loading'
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
          <div class='MediaPlayerContainer__media-info'>
            <MediaStoryInfo v-if='media.type === "story"'
                            :media='media' />
            <MediaMusicInfo v-else-if='media.type === "music"'
                            :media='media' />
          </div>
        </MediaPlayer>

      </div>
    </TransitionSlideFromBottom>
    <MediaPlayerMinimized :visible='visible && minimized'
                          :media='media'
                          :loading='loading'
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
import MediaMusicInfo from "@/components/MediaMusicInfo";

export default {
  name: "MediaPlayerContainer",
  components: {
    MediaPlayer,
    MediaPlayerMinimized,
    MediaStoryInfo,
    MediaMusicInfo,
    TransitionSlideFromBottom
  },
  props: {
    media: {
      type: Object
    },
    seekInterval: {
      type: Number,
      default: 5
    },
    autoplay: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    media(val, previousVal) {
      if (val) {
        // this.loading = true;
        if (this.playerStatus === "playing" || this.playerStatus === "paused") {
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
      this.visible = true;
      this.minimized = false;
      this.$store.dispatch("blur", true);
      this.$store.dispatch("navigationVisible", false);
    },
    minimize() {
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

      this.player.currentTime = targetTime;
    },
    seek(time) {
      // this.loading = true;
      if (this.player) {
        this.player.currentTime = time;
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
    this.player = new Audio();
    this.player.addEventListener("timeupdate", this.seektimeupdate);

    this.player.addEventListener("ended", () => {
      this.player.currentTime = 0;
      this.pause();
    });

    if (this.autoplay) {
      this.player.addEventListener(
        "canplay",
        () => {
          // this.loading = false;
          this.duration = this.player.duration;
          this.play();
        },
        false
      );
    }
  },
  beforeDestroy() {
    this.$store.dispatch("blur", false);
    this.$store.dispatch("navigationVisible", true);
    this.destroyPlayer();
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
