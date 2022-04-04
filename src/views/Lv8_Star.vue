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
      title: "Lv.8 Star",
      docName: "Star",
      code: `<div class="object"></div>

<style>
  .object{
    width: 200px;
    height: 200px;
    background-color: #ffd700;
    /*ここにコードを追加*/
  }
  .back{

  }
</style>`,
      sample: `<div class="sample-star"></div>

<style>
  .sample-star {
    border-left: 100px solid transparent;
    border-right: 100px solid transparent;
    border-bottom: 70px solid #ffd700;
    height: 0;
    width: 0;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(35.4deg);
  }
  .sample-star:before,
  .sample-star:after {
    border-left: 100px solid transparent;
    border-right: 100px solid transparent;
    border-bottom: 70px solid #ffd700;
    content: "";
    height: 0;
    left: -100px;
    position: absolute;
    top: 0;
    width: 0;
  }
  .sample-star:before {
    transform: rotate(71deg);
  }
  .sample-star:after {
    transform: rotate(-71deg);
  }
  .sample-back{
  background-color: #4682b4;
  }
</style>`,
      colorCodes: ["#ffd700", "#4682b4"],
    }
  },
  methods: {
    updateContent(value) {
      this.code = value
    },
  },
}
</script>
