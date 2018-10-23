<template>
  <div class='Scene'>
    <div class='app-header'>
      <h2>
        Scenes
      </h2>
    </div>
    <div>
      <div class='Scene__item'
           v-for='item in list'
           :key='item.id'>
        <SceneCard :imgSrc='item.imgSrc'>
          <span slot='title'>{{ item.title }}</span>
        </SceneCard>
      </div>
      <!-- <SceneCard class='Scene__item'
                 imgSrc='https://i.imgur.com/AVcklW7.jpg' />
      <SceneCard class='Scene__item'
                 imgSrc='https://i.imgur.com/fJ07qiG.jpg'
                 selected /> -->
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
      list: []
    };
  },
  async created() {
    const response = await Scenes.getScenes();
    this.list = response.data.data;
  }
};
</script>

<style lang='scss' scoped>
.Scene {
  &__item {
    display: inline-block;
    margin-right: 16px;
  }
}
</style>
