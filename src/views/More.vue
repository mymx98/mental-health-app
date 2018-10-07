<template>
  <div class='More'>
    <!-- <AppLink :to="{ name: 'Breathe'}"
             label='Breathe'>
      <Home slot='icon' />
    </AppLink>
    <AppLink :to="{ name: 'Scenes'}"
             label='Scenes'>
      <Home slot='icon' />
    </AppLink>
    <AppLink :to="{ name: 'Profile'}"
             label='Profile'>
      <Home slot='icon' />
    </AppLink> -->
    <router-view />
  </div>
</template>

<script>
import AppLink from "@/components/Shared/AppLink";
import Home from "@/assets/icons/Home.svg";

export default {
  name: "More",
  components: {
    AppLink,
    Home
  }
};
</script>

<style lang='scss' scoped>
.More {
  height: 100%;
}
</style>
