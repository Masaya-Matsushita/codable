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
      title: "Lv.6 Infinity",
      docName: "Infinity",
      code: `<div class="object"></div>

<style>
  .object{
    width: 200px;
    height: 200px;
    background-color: #8b008b;
    /*ここにコードを追加*/
  }
  .back{

  }
</style>`,
      sample: `<div class="sample-infinity"></div>
<style>
  .sample-infinity {
    width: 255px;
    height: 150px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
   .sample-infinity::before {
    content: "";
    width: 120px;
    height: 120px;
    position: absolute;
    top: 0;
    left: 0;
    border: 25px solid #8b008b;
    border-radius: 60px 60px 60px 0;
    transform: rotate(-135deg);
  }
   .sample-infinity::after {
    content: "";
    width: 120px;
    height: 120px;
    position: absolute;
    top: 0;
    right: 0;
    border: 25px solid #8b008b;
    border-radius: 60px 60px 60px 0;
    transform: rotate(45deg);
  }
    .sample-back{
    background-color: #afeeee;
    }
</style>`,
      colorCodes: ["#8b008b", "#afeeee"],
    }
  },
  methods: {
    updateContent(value) {
      this.code = value
    },
  },
}
</script>
