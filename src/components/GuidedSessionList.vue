<template>
  <div class='GuidedSessionList'>
    <CardLinkPlain v-for='item in list'
                   :key='item.id'
                   class='GuidedSessionList__item'
                   :title='item.title'
                   :subtitle='item.description'>
    </CardLinkPlain>
  </div>
</template>

<script>
import CardLinkPlain from "@/components/CardLinkPlain";

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
  }
};
</script>

<style lang='scss' scoped>
.GuidedSessionList {
  // width: 100%;
}
</style>
