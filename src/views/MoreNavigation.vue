<template>
  <div class='MoreNavigation'>
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
  //
}
</style>
