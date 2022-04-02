<template>
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
  <HowToArea class="how-to" />
  <ColorPalette class="color-palette" :passColorCodes="colorCodes" />

  <!-- ボタンはコンポーネント化しないほうが良いかも？
    https://v3.ja.vuejs.org/guide/component-basics.html#%E5%AD%90%E3%82%B3%E3%83%B3%E3%83%9B%E3%82%9A%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%AE%E3%82%A4%E3%83%98%E3%82%99%E3%83%B3%E3%83%88%E3%82%92%E8%B3%BC%E8%AA%AD%E3%81%99%E3%82%8B -->
  <button class="finish-button" @click="finishGame">{{ finish }}</button>
</template>

<script>
import EditorArea from "@/components/EditorArea.vue"
import CanvasArea from "@/components/CanvasArea.vue"
import SampleArea from "@/components/SampleArea.vue"
import OpacityBar from "@/components/OpacityBar.vue"
import HowToArea from "@/components/HowToArea.vue"
import ColorPalette from "@/components/ColorPalette.vue"
import { doc, setDoc } from "firebase/firestore"
import { db } from "../firebase"

export default {
  components: {
    EditorArea,
    CanvasArea,
    SampleArea,
    OpacityBar,
    HowToArea,
    ColorPalette,
  },
  data() {
    return {
      title: "Lv.1 Leaf",
      code: "aiueo",
      sample: "akstn",
      opaValue: 0.5,
      colorCodes: ["#303030", "#101010"],
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
.editor {
  height: 600px;
  width: 600px;
}
.canvas {
  height: 350px;
  width: 350px;
  background-color: #fff;
  border: 1px solid #303030;
}
.sample {
  height: 350px;
  width: 350px;
  background-color: #fff;
  border: 1px solid #303030;
}
.opacity-bar {
  width: 350px;
}
.how-to {
  background-color: #fff;
}
.color-palette {
  background-color: #fff;
}
.finish-button {
  height: 80px;
  width: 250px;
  font-size: 1.5rem;
}
</style>
