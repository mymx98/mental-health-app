<template>
  <div class='GuidedSessionList'>
    <CardLinkPlain v-for='item in list'
                   :key='item.id'
                   class='GuidedSessionList__item'
                   :title='item.category'
                   :subtitle='getDescription(item)'>
    </CardLinkPlain>
  </div>
</template>

<script>
import CardLinkPlain from "@/components/CardLinkPlain";
import { format } from "date-fns";

export default {
  name: "GuidedSessionList",
  components: {
    CardLinkPlain
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getDescription(item) {
      return `${this.formattedDate(item.createdAt)} ${item.title}`;
    },
    formattedDate(date) {
      return format(date, "MMM MM");
    }
  }
};
</script>

<style lang='scss' scoped>
.GuidedSessionList {
  // width: 100%;
}
</style>
