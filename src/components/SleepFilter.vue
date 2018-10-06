<template>
  <div class='SleepFilter'>
    <FilterBadge class='SleepFilter__item'
                 :active='hasFilter("")'
                 @click='filterClicked("")'>
      All
    </FilterBadge>
    <FilterBadge class='SleepFilter__item'
                 :active='hasFilter("favorites")'
                 @click='filterClicked("favorites")'>
      Favorites
    </FilterBadge>
    <FilterBadge class='SleepFilter__item'
                 :active='hasFilter("recommended")'
                 @click='filterClicked("recommended")'>
      Recommended
    </FilterBadge>
    <FilterBadge class='SleepFilter__item'
                 :active='hasFilter("fiction")'
                 @click='filterClicked("fiction")'>
      Fiction
    </FilterBadge>
    <FilterBadge class='SleepFilter__item'
                 :active='hasFilter("kids")'
                 @click='filterClicked("kids")'>
      Kids
    </FilterBadge>
    <FilterBadge class='SleepFilter__item'
                 :active='hasFilter("music")'
                 @click='filterClicked("music")'>
      Music
    </FilterBadge>
    <FilterBadge class='SleepFilter__item'
                 :active='hasFilter("nature")'
                 @click='filterClicked("nature")'>
      Nature
    </FilterBadge>
    <FilterBadge class='SleepFilter__item'
                 :active='hasFilter("nonfiction")'
                 @click='filterClicked("nonfiction")'>
      Non-Fiction
    </FilterBadge>
    <FilterBadge class='SleepFilter__item'
                 :active='hasFilter("naps")'
                 @click='filterClicked("naps")'>
      Naps
    </FilterBadge>
    <FilterBadge class='SleepFilter__item'
                 :active='hasFilter("nonenglish")'
                 @click='filterClicked("nonenglish")'>
      Non-English
    </FilterBadge>
    <FilterBadge class='SleepFilter__item'
                 :active='hasFilter("narrator")'
                 @click='filterClicked("narrator")'>
      By Narrator
    </FilterBadge>
    <FilterBadge class='SleepFilter__item'
                 :active='hasFilter("offline")'
                 @click='filterClicked("offline")'>
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
  },
  data() {
    return {
      filter: ""
    };
  },
  methods: {
    hasFilter(filter) {
      return this.filter === filter;
    },
    filterClicked(filter) {
      this.filter = filter;
    }
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
