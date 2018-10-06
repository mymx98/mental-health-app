<template>
  <div class="Home app-content-wrapper">
    <div>
      <img alt="App Logo" src="@/assets/app-logo.png" class='Home__app-logo'>
    </div>
    </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    // HelloWorld
  }
};
</script>

<style lang='scss' scoped>
.Home {
  display: flex;
  justify-content: center;

  &__app-logo {
    width: 200px;
  }
}
</style>

