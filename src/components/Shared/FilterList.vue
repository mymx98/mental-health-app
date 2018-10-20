<template>
  <div class='FilterList'>
    <FilterBadge v-for='item in list'
                 :key='item.filter'
                 class='FilterList__item'
                 :active='item.active'
                 @click='filterClicked(item)'>
      {{ item.label }}
    </FilterBadge>
  </div>
</template>

<script>
import FilterBadge from "@/components/Shared/FilterBadge";

export default {
  name: "FilterList",
  components: {
    FilterBadge
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    filterClicked(item) {
      this.$emit("filterClicked", item);
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/styles/variables.scss";

.FilterList {
  display: inline-flex;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  flex-wrap: nowrap;

  &__item {
    margin-right: 16px;
  }
}
</style>
