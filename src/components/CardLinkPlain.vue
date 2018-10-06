<template>
  <router-link :to='{ name: "Sleep"}'
               class='CardLinkPlain__link'>
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
  </router-link>
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
  padding: 16px;
  display: flex;
  align-items: center;

  &__link {
    text-decoration: none;
    color: $color-grey;

    &:hover {
      color: lighten($color-grey, 10%);

      .CardLinkPlain__category-icon {
        stroke: lighten($color-blue, 10%);
      }

      .CardLinkPlain__action-icon {
        stroke: lighten($color-grey, 10%);
      }
    }
  }

  &__category-icon {
    height: 48px;
    width: 48px;
    stroke: $color-blue;
    transition: $swift-ease-out;
    transition-property: stroke;
  }

  &__action-icon {
    height: 32px;
    width: 32px;
    stroke: $color-grey;
    transition: $swift-ease-out;
    transition-property: stroke;
  }

  &__content {
    margin: 0 16px;
  }

  &__action {
    margin-left: auto;
  }

  &__title {
    font-size: 1.2em;
    margin-bottom: 4px;
  }

  &__subtitle {
    font-size: 0.8em;
  }
}
</style>
