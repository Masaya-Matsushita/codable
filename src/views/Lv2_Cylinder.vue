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
      code: "aiueo",
      sample: "akstn",
      colorCodes: ["#303030", "#101010"],
    }
  },
  methods: {
    updateContent(value) {
      this.code = value
    },
  },
}
</script>
