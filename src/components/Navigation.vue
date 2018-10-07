<template>
  <nav class='Navigation'>
    <NavigationLink :to="{ name: 'Home'}"
                    label='Home'>
      <Home slot='icon' />
    </NavigationLink>
    <NavigationLink :to="{ name: 'Sleep'}"
                    label='Sleep'>
      <Moon slot='icon' />
    </NavigationLink>
    <NavigationLink :to="{ name: 'Meditate'}"
                    label='Meditate'>
      <Target slot='icon' />
    </NavigationLink>
    <NavigationLink :to="{ name: 'Music'}"
                    label='Music'>
      <Music slot='icon' />
    </NavigationLink>
    <NavigationLink :to="{ name: 'More'}"
                    label='More'>
      <hamburger slot='icon' />
    </NavigationLink>
  </nav>
</template>

<script>
import NavigationLink from "@/components/Shared/NavigationLink";
import Home from "@/assets/icons/Home.svg";
import Moon from "@/assets/icons/Moon.svg";
import Target from "@/assets/icons/Target.svg";
import Music from "@/assets/icons/Music.svg";
import Hamburger from "@/assets/icons/Hamburger.svg";

export default {
  name: "Navigation",
  components: {
    NavigationLink,
    Home,
    Moon,
    Target,
    Music,
    Hamburger
  }
};
</script>

<style lang='scss' scoped>
@import "@/styles/variables.scss";

.Navigation {
  text-align: center;
  // margin: 16px 0;
  // padding: 64px 0 16px;
  // padding: 96px 0 16px;
  padding: 128px 0 16px;
  width: 100%;

  // background: linear-gradient(155deg, #3acfd5 0%, #2989d8 50%, #3a4ed5 100%);

  // background-image: linear-gradient(
  //   180deg,
  //   rgba(0, 0, 0, 0) 0%,
  //   rgba(0, 0, 0, 1) 100%
  // );
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000);
}
</style>
