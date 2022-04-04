<template>
  <GameLayout
    :setTitle="title"
    :setDocName="docName"
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
      docName: "Leaf",
      code: `<div class="object"></div>

<style>
  .object{
    width: 200px;
    height: 200px;
    background-color: #008000;
    /*ここにコードを追加*/
  }
  .back{

  }
</style>`,
      sample: `<div class="sample-object"></div>

<style>
  .sample-object{
    width: 200px;
    height: 200px;
    background-color: #008000;
    border-radius: 150px 0;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .sample-back{
    background-color: #fafad7;
    }
</style>`,
      colorCodes: ["#008000", "#fafad7"],
    }
  },
  methods: {
    updateContent(value) {
      this.code = value
    },
  },
}
</script>
