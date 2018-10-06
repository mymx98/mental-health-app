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
  margin: 16px 0;
}
</style>
