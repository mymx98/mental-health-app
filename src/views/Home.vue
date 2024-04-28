<template>
  <div class="Home">
    <div class='Home__app-logo-wrapper'>
      Sonder
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
@font-face {
  font-family: 'Barlow';
  src: url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;700&display=swap') format('truetype');
  font-weight: normal;
  font-style: normal;
}
.Home {
  // height: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;

  &__app-logo-wrapper {
    text-align: center;
    padding-top: 24px;
    padding-bottom: 24px;
    font-size: 48px;
    color: #6C9286;
    font-weight: bold;
    font-family: 'Barlow', sans-serif;
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
