<template>
  <div class="view">
    <div class="title">{{ title }}</div>
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
    <button @click="finishGame">{{ finish }}</button>
  </div>
</template>

<script>
import EditorArea from "@/components/EditorArea.vue"
import CanvasArea from "@/components/CanvasArea.vue"
import SampleArea from "@/components/SampleArea.vue"
import OpacityBar from "@/components/OpacityBar.vue"
import { doc, setDoc } from "firebase/firestore"
import { db } from "../firebase"

export default {
  components: {
    EditorArea,
    CanvasArea,
    SampleArea,
    OpacityBar,
  },
  data() {
    return {
      title: "Lv.1 Leaf",
      code: "aiueo",
      sample: "akstn",
      opaValue: 0.5,
      finish: "完成",
    }
  },
  methods: {
    updateContent(value) {
      this.code = value
    },
    updateOpacity(value) {
      this.opaValue = value
    },
    finishGame() {
      setDoc(doc(db, "Games", this.title), {
        code: this.code,
      })
      this.$router.push({
        name: "feedback",
        params: { passContentTitle: this.title },
      })
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
