<template>
  <div class='Sleep app-content-wrapper'>
    <div class='Sleep__header'>
      <div class='Sleep__header-title'>
        Sleep Stories
      </div>
      <div class='Sleep__header-description'>
        Soothing betime stories to help youfall into a deep and natural sleep.
      </div>
      <div class='Sleep__filter'>
        Filter
      </div>
      <div class='Sleep__list'>
        <div class='Sleep__item'>
          <SleepSessionCardLink title='The Orient Express'
                                subtitle='Erik Braa'
                                :duration='1500'
                                imgSrc='https://i.imgur.com/ubAXme5.jpg' />
        </div>
        <div class='Sleep__item'>
          <SleepSessionCardLink imgSrc='https://i.imgur.com/ubAXme5.jpg' />
        </div>
        <div class='Sleep__item'>
          <SleepSessionCardLink imgSrc='https://i.imgur.com/ubAXme5.jpg' />
        </div>
        <div class='Sleep__item'>
          <SleepSessionCardLink imgSrc='https://i.imgur.com/ubAXme5.jpg' />
        </div>
        <div class='Sleep__item'>
          <SleepSessionCardLink imgSrc='https://i.imgur.com/ubAXme5.jpg' />
        </div>
        <div class='Sleep__item'>
          <SleepSessionCardLink imgSrc='https://i.imgur.com/ubAXme5.jpg' />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SleepSessionCardLink from "@/components/SleepSessionCardLink";
import { format } from "date-fns";

export default {
  name: "Sleep",
  components: {
    SleepSessionCardLink
  }
};
</script>

<style lang='scss' scoped>
.Sleep {
  &__header-title {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 200;
    font-size: 1.6em;
    margin-bottom: 24px;
    text-align: center;
  }

  &__header-description {
    font-size: 1.1em;
    text-align: center;
    margin-bottom: 12px;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
  }

  &__item {
    flex: 0 0 46%;

    margin: 0 12px 12px 0;
  }
}
</style>
