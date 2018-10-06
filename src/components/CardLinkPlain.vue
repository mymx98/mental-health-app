<template>
  <Card class='CardLinkPlain'
        raised
        hoverable
        translucent>
    <div class='CardLinkPlain__category'>
      <Sun class='CardLinkPlain__category-icon' />
    </div>
    <div class='CardLinkPlain__content'>
      <div class='CardLinkPlain__title'>
        {{ title }}
      </div>
      <div class='CardLinkPlain__subtitle'>
        {{ subtitle }}
      </div>
    </div>
    <div class='CardLinkPlain__action'>
      <Play class='CardLinkPlain__action-icon' />
    </div>
  </Card>
</template>

1<script>
import Card from "@/components/Shared/Card";
import Play from "@/assets/icons/Play.svg";
import Sun from "@/assets/icons/Sun.svg";

export default {
  name: "CardLinkPlain",
  components: {
    Card,
    Play,
    Sun
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    subtitle: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/styles/variables.scss";

.CardLinkPlain {
  color: $color-grey;
  padding: 16px;
  display: flex;
  align-items: center;

  &__category-icon {
    height: 48px;
    width: 48px;
    stroke: $color-blue;
  }

  &__action-icon {
    height: 32px;
    width: 32px;
    stroke: $color-grey;
  }

  &__content {
    margin: 0 16px;
  }

  &__action {
    margin-left: auto;
  }

  &__title {
    font-size: 1.2em;
  }

  &__subtitle {
    font-size: 0.8em;
  }
}
</style>
