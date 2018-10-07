<template>
  <div class='MoreNavigation'>
    <!-- <div class='MoreNavigation__spacer'>hey</div> -->
    <div class='MoreNavigation__inner'>
      <AppLink :to="{ name: 'Breathe'}"
               label='Breathe'>
        <Home slot='icon' />
      </AppLink>
      <AppLink :to="{ name: 'Scene'}"
               label='Scenes'>
        <Home slot='icon' />
      </AppLink>
      <AppLink :to="{ name: 'Profile'}"
               label='Profile'>
        <Home slot='icon' />
      </AppLink>
    </div>
    <!-- <div class='MoreNavigation__spacer'></div> -->
  </div>
</template>

<script>
import AppLink from "@/components/Shared/AppLink";
import Home from "@/assets/icons/Home.svg";

export default {
  name: "MoreNavigation",
  components: {
    AppLink,
    Home
  }
};
</script>

<style lang='scss' scoped>
.MoreNavigation {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // height: calc(100% - 100px);
  height: 80vh;

  &__inner {
    width: 100%;
  }

  // &__spacer {
  //   height: 200px;
  // }
}
</style>
