<template>
  <div class='SleepFilter'>
    <FilterBadge class='SleepFilter__item'
                 active>
      All
    </FilterBadge>
    <FilterBadge class='SleepFilter__item'>
      Favorites
    </FilterBadge>
    <FilterBadge class='SleepFilter__item'
                 active>
      Recommended
    </FilterBadge>
    <FilterBadge class='SleepFilter__item'>
      Fiction
    </FilterBadge>
    <FilterBadge class='SleepFilter__item'>
      Kids
    </FilterBadge>
    <FilterBadge class='SleepFilter__item'>
      Music
    </FilterBadge>
    <FilterBadge class='SleepFilter__item'>
      Nature
    </FilterBadge>
    <FilterBadge class='SleepFilter__item'>
      Non-Fiction
    </FilterBadge>
    <FilterBadge class='SleepFilter__item'>
      Naps
    </FilterBadge>
    <FilterBadge class='SleepFilter__item'>
      Non-English
    </FilterBadge>
    <FilterBadge class='SleepFilter__item'>
      By Narrator
    </FilterBadge>
    <FilterBadge class='SleepFilter__item'>
      Available Offline
    </FilterBadge>
  </div>
</template>

<script>
import FilterBadge from "@/components/Shared/FilterBadge";

export default {
  name: "SleepFilter",
  components: {
    FilterBadge
  }
};
</script>

<style lang='scss' scoped>
@import "@/styles/variables.scss";

.SleepFilter {
  display: inline-flex;
  width: 100%;
  overflow-x: scroll;
  flex-wrap: nowrap;

  &__item {
    margin-right: 16px;
    // border-radius: 9999px;
    // background-color: $body-background-color;
    // padding: 4px 12px;
  }
}
</style>
