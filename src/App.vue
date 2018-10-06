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
  // justify-content: center;
  align-items: center;

  &__content {
    flex: 1 1 auto;
    width: 100%;
    max-width: 960px;
  }

  &__navigation {
    flex: 0;
  }
}
</style>
