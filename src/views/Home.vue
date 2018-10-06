<template>
  <div class="Home app-content-wrapper">
    <div class='Home__content'>
      <div class='Home__app-logo-wrapper'>
        <img alt="App Logo" src="@/assets/app-logo.png" class='Home__app-logo'/>
      </div>
        <GuidedSessionList :list='list' />
      </div>
    </div>
</template>

<script>
import GuidedSessionList from "@/components/GuidedSessionList";
import CardLinkPlain from "@/components/CardLinkPlain";

export default {
  name: "Home",
  components: {
    CardLinkPlain,
    GuidedSessionList
  },
  data() {
    return {
      list: [
        {
          id: 1,
          title: "Daily Calm",
          description: "Oct 6 - Non-Attachment"
        }
      ]
    };
  }
};
</script>

<style lang='scss' scoped>
.Home {
  // display: flex;
  // justify-content: center;
  // width: 100%;

  &__content {
    // width: 100%;
  }

  &__app-logo-wrapper {
    text-align: center;
  }

  &__app-logo {
    width: 200px;
    margin-bottom: 16px;
  }
}
</style>
