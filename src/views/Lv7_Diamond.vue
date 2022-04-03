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
      title: "Lv.7 Diamond",
      code: `<div class="object"></div>

<style>
  .object{
    width: 200px;
    height: 200px;
    background-color: #00bfff;
    /*ここにコードを追加*/
  }
  .back{

  }
</style>`,
      sample: `<div class="sample-diamond__top"></div>
      <div class="sample-diamond__bottom"></div>

<style>
  .sample-diamond__top {
    width: 250px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -130%);
    border-style: solid;
    border-color: transparent transparent #00bfff transparent;
    border-width: 0 60px 80px 60px;
  }
  .sample-diamond__bottom {
    width: 250px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -80%);
    border-style: solid;
    border-color: #00bfff transparent transparent transparent;
    border-width: 130px 125px 0 125px;
  }
  .sample-back {
    background-color: #fffff0;
    }`,
      colorCodes: ["#00bfff", "#fffff0"],
    }
  },
  methods: {
    updateContent(value) {
      this.code = value
    },
  },
}
</script>
