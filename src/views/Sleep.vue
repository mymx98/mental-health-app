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
        <div class='Sleep__item'
             v-for='item in list'
             :key='item.id'>
          <SleepSessionCardLink :title='item.title'
                                :subtitle='item.author'
                                :duration='item.duration'
                                :imgSrc='item.imgSrc' />
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import SleepSessionCardLink from "@/components/SleepSessionCardLink";
import Sleep from "@/api/Sleep";

export default {
  name: "Sleep",
  components: {
    SleepSessionCardLink
  },
  data() {
    return {
      list: []
    };
  },
  async created() {
    const response = await Sleep.getSleepStories();

    this.list = response.data.data;
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
