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
    <OpacityBar
      class="opacity-bar"
      :passOpaValue="opaValue"
      @update:opacity="updateOpacity"
    />
    <SampleArea class="sample" :passSample="sample" />
  </div>
</template>

<script>
import EditorArea from "@/components/EditorArea.vue"
import CanvasArea from "@/components/CanvasArea.vue"
import SampleArea from "@/components/SampleArea.vue"
import OpacityBar from "@/components/OpacityBar.vue"

export default {
  components: {
    EditorArea,
    CanvasArea,
    SampleArea,
    OpacityBar,
  },
  data() {
    return {
      code: "aiueo",
      sample: "akstn",
      opaValue: 0.5,
    }
  },
  methods: {
    updateContent(value) {
      this.code = value
    },
    updateOpacity(value) {
      this.opaValue = value
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
.opacity-bar {
  width: 300px;
}
</style>
