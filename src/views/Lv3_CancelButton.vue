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
      title: "Lv.3 Cancel Button",
      code: `<div class="object"></div>

<style>
  .object{
    width: 150px;
    height: 150px;
    background-color: #ff0000;
    /*ここにコードを追加*/
  }
  .back{

  }
</style>`,
      sample: `<div class="sample-object">
      <div class="sample-bar1">
      <div class="sample-bar2">
    </div>

<style>
  .sample-object{
    background-color: #ff0000;
    width: 180px;
    height: 130px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
  }
  .sample-bar1{
    background-color: #ffffff;
    width: 20px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    border-radius: 10px;
  }
  .sample-bar2{
    background-color: #ffffff;
    width: 20px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
    border-radius: 10px;
  }
  .sample-back{
    background-color: #5a96c7;
  }
</style>`,
      colorCodes: ["#ff0000", "#ffffff", "#5a96c7"],
    }
  },
  methods: {
    updateContent(value) {
      this.code = value
    },
  },
}
</script>
