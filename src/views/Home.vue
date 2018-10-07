<template>
  <div class="Home">
    <div class='Home__app-logo-wrapper'>
      <img alt="App Logo"
           src="@/assets/app-logo.png"
           class='Home__app-logo' />
    </div>
    <div class='Home__content app-gutter-spacing'>
      <GuidedSessionList :list='list' />
    </div>
  </div>
</template>

<script>
import GuidedSessionList from "@/components/GuidedSessionList";
import CardLinkPlain from "@/components/CardLinkPlain";
import GuidedSession from "@/api/GuidedSession";

export default {
  name: "Home",
  components: {
    CardLinkPlain,
    GuidedSessionList
  },
  data() {
    return {
      list: []
    };
  },
  // backgroundImage: `url('${this.imgSrc}'`

  async created() {
    const result = await GuidedSession.getMostRecentGuidedSession();

    this.list = [result.data.data];
  }
};
</script>

<style lang='scss' scoped>
.Home {
  // height: 100%;
  height: 100vh;
  background-image: url("https://i.imgur.com/AVcklW7.jpg");
  background-size: cover;
  background-position: center;

  &__app-logo-wrapper {
    text-align: center;
    padding-top: 24px;
    padding-bottom: 24px;
  }

  &__app-logo {
    width: 200px;
    // margin-bottom: 16px;
  }

  &__content {
    overflow-y: auto;
  }
}
</style>
