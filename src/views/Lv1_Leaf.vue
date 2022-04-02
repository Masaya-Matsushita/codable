<template>
  <div class="view">
    <EditorArea class="editor" :passCode="code" @update:code="updateContent" />
    <div>
      <CanvasArea class="canvas" :reflectCode="code" />
      <SampleArea
        class="sample"
        :passSample="sample"
        :style="{
          opacity: opaValue,
        }"
      />
    </div>
    <!-- <input type="range" min="0" max="1" step="0.01" v-model="opaValue" /> -->
    <SampleArea class="sample" :passSample="sample" />
  </div>
</template>

<script>
import EditorArea from "@/components/EditorArea.vue"
import CanvasArea from "@/components/CanvasArea.vue"
import SampleArea from "@/components/SampleArea.vue"

export default {
  components: {
    EditorArea,
    CanvasArea,
    SampleArea,
  },
  data() {
    return {
      code: "aiueo",
      sample: "akstn",
      // opaValue: 0.5,
    }
  },
  methods: {
    updateContent(value) {
      this.code = value
    },
  },
}
</script>

<style scoped>
.view {
  display: grid;
}
.editor {
  height: 600px;
  width: 600px;
}
.canvas {
  height: 300px;
  width: 300px;
  background-color: #fff;
  border: 1px solid #303030;
}
.sample {
  height: 300px;
  width: 300px;
  background-color: #fff;
  border: 1px solid #303030;
}
</style>
