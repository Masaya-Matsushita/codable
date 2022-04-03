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
      title: "Lv.2 Cylinder",
      code: `<div class="object"></div>

<style>
  .object{
    width: 200px;
    height: 200px;
    background-color: #40e0d0;
    /*ここにコードを追加*/
  }
  .back{

  }
</style>
`,
      sample: `<div class="sample-object"></div>

<style>
      .sample-object {
        width: 130px;
        height: 200px;
        background-color: #40e0d0;
        position: relative;
        top: 50%;
        left:50%;
        transform: translate(-50%, -50%);
      }

      .sample-object::before {
        content: "";
        width: 130px;
        height: 50px;
        background-color: #20b2aa;
        position: absolute;
        top: -30px;
        left: 0;
        border-radius: 45%;
      }

      .sample-object::after {
        content: "";
        width: 130px;
        height: 50px;
        background-color: #40e0d0;
        position: absolute;
        top: 180px;
        left: 0;
        border-radius: 45%;
      }
      .sample-back{
        background-color:#fffaf0;
      }
    </style>`,
      colorCodes: ["#40e0d0", "#20b2aa", "#fffaf0"],
    }
  },
  methods: {
    updateContent(value) {
      this.code = value
    },
  },
}
</script>
