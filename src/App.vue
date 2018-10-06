<template>
  <div class='App'>
    <div class='App__content'>
      <transition name="route"
                  mode="out-in">
        <router-view :key='$route.path' />
      </transition>
    </div>
    <Navigation class='App__navigation' />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";

export default {
  name: "App",
  components: {
    Navigation
  }
};
</script>


<style lang="scss">
.App {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;

  &__content {
    flex: 1 1 auto;
  }

  &__navigation {
    flex: 0;
  }
}
</style>
