<template>
  <TransitionSlideFromBottom>
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
  </TransitionSlideFromBottom>
</template>

<script>
import NavigationLink from "@/components/Shared/NavigationLink";
import Home from "@/assets/icons/Home.svg";
import Moon from "@/assets/icons/Moon.svg";
import Target from "@/assets/icons/Target.svg";
import Music from "@/assets/icons/Music.svg";
import Hamburger from "@/assets/icons/Hamburger.svg";
import TransitionSlideFromBottom from "@/components/Shared/TransitionSlideFromBottom";

export default {
  name: "Navigation",
  components: {
    NavigationLink,
    Home,
    Moon,
    Target,
    Music,
    Hamburger,
    TransitionSlideFromBottom
  }
};
</script>

<style lang='scss' scoped>
@import "@/styles/variables.scss";

.Navigation {
  text-align: center;
  padding: 64px 0 16px;
  width: 100%;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000);
}
</style>
