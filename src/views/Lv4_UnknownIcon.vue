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
      title: "Lv.4 Unknown Icon",
      code: `<div class="object"></div>

<style>
  .object{
    width: 150px;
    height: 150px;
    background-color: #808080;
    /*ここにコードを追加*/
  }
  .back{

  }
</style>`,
      sample: `<div class="sample-body"></div>
    <div class="sample-head"></div>

<style>
      .sample-head {
        background-color: #808080;
        width: 120px;
        height: 120px;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -160%);
        border-radius: 50%;
        border: 15px solid #f0f8ff;
      }
      .sample-body {
        background-color: #808080;
        width: 180px;
        height: 100px;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 0);
        border-radius: 50% 50% 0 0;
      }
      .sample-back{
        background-color:#f0f8ff;
      }
    </style>`,
      colorCodes: ["#808080", "#f0f8ff"],
    }
  },
  methods: {
    updateContent(value) {
      this.code = value
    },
  },
}
</script>
