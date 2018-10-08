<template>
  <portal to="media-player">
    <TransitionSlideFromBottom>
      <div v-if='visible'
           class='MediaPlayerContainer'>
        <MediaPlayer class='MediaPlayer'
                     @close='$emit("close")' />
      </div>
    </TransitionSlideFromBottom>
  </portal>
</template>

<script>
import TransitionSlideFromBottom from "@/components/Shared/TransitionSlideFromBottom";
import MediaPlayer from "@/components/MediaPlayer";

export default {
  name: "MediaPlayerContainer",
  components: {
    MediaPlayer,
    TransitionSlideFromBottom
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    imgSrc: {
      type: String,
      default: ""
    }
  }
  // data() {
  //   return {
  //     playerStatus: "paused" // 'playing', 'paused', 'stopped'
  //   };
  // },
  // methods: {
  //   close() {
  //     this.$emit("close");
  //   },
  //   togglePlayerStatus() {
  //     if (this.playerStatus === "playing") {
  //       this.playerStatus = "paused";
  //       this.pause();
  //     } else {
  //       this.playerStatus = "playing";
  //       this.play();
  //     }
  //   },
  //   play() {
  //     this.player.play();
  //   },
  //   pause() {
  //     this.player.pause();
  //   },
  //   rewind() {},
  //   forward() {},
  //   stop() {
  //     this.close();
  //   },
  //   destroyPlayer() {
  //     console.log("destroyPlayer", this.player);
  //     if (this.player) {
  //       this.player.pause();
  //       this.player.src = "";
  //       this.player.load();
  //       this.player.remove();
  //       this.player = null;
  //     }
  //   }
  // },
  // mounted() {
  //   // this.$refs.player.play();
  //   this.player = new Audio();
  //   this.player.src =
  //     "https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/Post%20Malone%20-%20rockstar%20ft.%2021%20Savage%20(1).mp3";
  //   // this.player.loop = true;
  //   // this.player.play();
  // },
  // beforeDestroy() {
  //   console.log("beforeDestroy");
  //   this.destroyPlayer();
  // }
};
</script>

<style lang='scss' scoped>
@import "@/styles/variables.scss";

.MediaPlayerContainer {
  width: 100%;
  height: 100%;
  border: 3px solid white;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
