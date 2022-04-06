<template>
  <div class="title">{{ setTitle }}</div>
  <VAceEditor
    class="editor"
    v-model:value="updateCode"
    @init="editorInit"
    lang="html"
    theme="chrome"
  />
  <CanvasArea class="back" :passCode="setCode" />
  <SampleArea
    class="sample-back"
    :passSample="setSample"
    :style="{
      opacity: opaValue,
    }"
  />
  <OpacityBar
    class="opacity-bar"
    :passOpaValue="opaValue"
    @returnOpaValue="updateOpacity"
  />
  <SampleArea class="sample-back" :passSample="setSample" />

  <ColorPalette class="color-palette" :passColorCodes="setColorCodes" />

  <button class="button" @click="howToAlert">{{ howTo }}</button>
  <!-- ボタンがコンポーネント化できない
    https://v3.ja.vuejs.org/guide/component-basics.html#%E5%AD%90%E3%82%B3%E3%83%B3%E3%83%9B%E3%82%9A%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%AE%E3%82%A4%E3%83%98%E3%82%99%E3%83%B3%E3%83%88%E3%82%92%E8%B3%BC%E8%AA%AD%E3%81%99%E3%82%8B -->
  <button class="button" @click="finishGame">{{ finish }}</button>
</template>

<script>
import { VAceEditor } from "vue3-ace-editor"
import "ace-builds/src-noconflict/mode-html"
import "ace-builds/src-noconflict/theme-chrome"
import CanvasArea from "@/components/CanvasArea.vue"
import SampleArea from "@/components/SampleArea.vue"
import OpacityBar from "@/components/OpacityBar.vue"
import ColorPalette from "@/components/ColorPalette.vue"
import Swal from "sweetalert2"
import { doc, setDoc } from "firebase/firestore"
import { db } from "../firebase"

export default {
  components: {
    VAceEditor,
    CanvasArea,
    SampleArea,
    OpacityBar,
    ColorPalette,
  },
  props: ["setTitle", "setDocName", "setCode", "setSample", "setColorCodes"],
  emits: ["returnCode"],
  data() {
    return {
      opaValue: 0.5,
      howTo: "遊び方",
      finish: "完成",
    }
  },
  computed: {
    updateCode: {
      get() {
        return this.setCode
      },
      set(value) {
        this.$emit("returnCode", value)
      },
    },
  },
  methods: {
    editorInit: function () {},
    updateOpacity(value) {
      this.opaValue = value
    },
    async howToAlert() {
      const steps = ["1", "2", "3"]
      const Queue = Swal.mixin({
        progressSteps: steps,
        confirmButtonText: "Next >",
        // optional classes to avoid backdrop blinking between steps
        showClass: { backdrop: "swal2-noanimation" },
        hideClass: { backdrop: "swal2-noanimation" },
      })

      await Queue.fire({
        title: "Uno",
        currentProgressStep: 0,
        // optional class to show fade-in backdrop animation which was disabled in Queue mixin
        showClass: { backdrop: "swal2-noanimation" },
      })
      await Queue.fire({
        title: "Dos",
        currentProgressStep: 1,
      })
      await Queue.fire({
        title: "Tres",
        currentProgressStep: 2,
        confirmButtonText: "OK",
        // optional class to show fade-out backdrop animation which was disabled in Queue mixin
        showClass: { backdrop: "swal2-noanimation" },
      })
    },
    finishGame() {
      setDoc(doc(db, "Games", this.setDocName), {
        code: this.setCode,
      })
      this.$router.push({
        name: "feedback",
        query: { stage: this.setDocName },
      })
    },
  },
}
</script>

<style scoped>
.title {
  font-size: 2.5rem;
  padding: 10px;
}
.editor {
  height: 600px;
  width: 600px;
  font-size: 1rem;
}
.back {
  height: 350px;
  width: 350px;
  outline: 1px solid #303030;
  padding: 10px;
}
.sample-back {
  height: 350px;
  width: 350px;
  outline: 1px solid #303030;
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
.button {
  height: 80px;
  width: 250px;
  font-size: 1.5rem;
}
</style>
