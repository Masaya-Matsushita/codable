<template>
  <GameLayout
    :setTitle="title"
    :setCode="code"
    :setSample="sample"
    :setColorCodes="colorCodes"
    @returnCode="updateContent"
  />
</template>

<script>
import GameLayout from "@/components/GameLayout.vue"

export default {
  components: {
    GameLayout,
  },
  data() {
    return {
      title: "Lv.1 Leaf",
      code: `<div class="object"></div>

<style>
  .object{
    width: 150px;
    height: 150px;
    background-color: #1e90ff;
    /*ここにコードを追加*/
  }
  .back{

  }
</style>`,
      sample: `<div class="sample-object"></div>

<style>
  .sample-object{
    width: 0;
    height: 0;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-left: 75px solid transparent;
    border-right: 75px solid transparent;
    border-bottom: 150px solid #1e90ff;
  }
    .sample-back{
    background-color: #fff0f5;
    }
</style>`,
      colorCodes: ["#1e90ff", "#fff0f5"],
    }
  },
  methods: {
    updateContent(value) {
      this.code = value
    },
  },
}
</script>
