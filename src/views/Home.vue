<template>
  <div class="Home app-content-wrapper">
    <div>
      <img alt="App Logo" src="@/assets/app-logo.png" class='Home__app-logo'/>
    </div>
      <CardLinkPlain title='Daily Calm'
                     subtitle='Oct 6 - Non-Attachment'>
      </CardLinkPlain>
    </div>
</template>

<script>
import CardLinkPlain from "@/components/CardLinkPlain";

export default {
  name: "Home",
  components: {
    CardLinkPlain
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

