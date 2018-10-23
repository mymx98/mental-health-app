<template>
  <div class='Scene'>
    <div class='app-header'>
      <h2>
        Scenes
      </h2>
    </div>
    <div class='Scene__list'
         :style='listStyles'>
      <div class='Scene__item'
           v-for='item in list'
           :key='item.id'>
        <SceneCard :item='item'
                   :selected='item.selected'
                   @select='select'>
          <span slot='title'>{{ item.title }}</span>
        </SceneCard>
      </div>
    </div>
  </div>
</template>

<script>
import SceneCard from "@/components/SceneCard";
import Scenes from "@/api/Scenes";

export default {
  name: "Scene",
  components: {
    SceneCard
  },
  data() {
    return {
      list: [],
      xOffset: 0
    };
  },
  computed: {
    listStyles() {
      return {
        transform: `translateX(${this.xOffset}px)`
      };
    }
  },
  methods: {
    select(item, $el) {
      const rect = $el.getBoundingClientRect();
      const x = rect.x;
      const width = rect.width;
      const itemCenterPosition = x + width / 2;
      const viewportWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

      if (itemCenterPosition < viewportWidth / 2) {
        this.xOffset = this.xOffset + viewportWidth / 2 - itemCenterPosition;
      } else if (itemCenterPosition > viewportWidth / 2) {
        this.xOffset = this.xOffset - (itemCenterPosition - viewportWidth / 2);
      }

      this.list.forEach(a => {
        a.selected = false;
      });
      item.selected = true;
    }
  },
  async created() {
    const response = await Scenes.getScenes();
    this.list = response.data.data;
  }
};
</script>

<style lang='scss' scoped>
@import "@/styles/variables.scss";

.Scene {
  &__list {
    display: flex;
    flex-wrap: nowrap;
    transition: $swift-ease-out;
    transition-property: transform;
  }

  &__item {
    margin-right: 16px;
  }
}
</style>
