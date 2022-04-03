<template>
  <div class="title">{{ setTitle }}</div>
  <VAceEditor
    class="editor"
    v-model:value="updateCode"
    @init="editorInit"
    lang="html"
    theme="chrome"
  />
  <div>
    <CanvasArea class="back" :passCode="setCode" />
    <SampleArea
      class="sample-back"
      :passSample="setSample"
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
  <SampleArea class="sample-back" :passSample="setSample" />
  <HowToArea class="how-to" />
  <ColorPalette class="color-palette" :passColorCodes="setColorCodes" />

  <!-- ボタンはコンポーネント化しないほうが良いかも？
    https://v3.ja.vuejs.org/guide/component-basics.html#%E5%AD%90%E3%82%B3%E3%83%B3%E3%83%9B%E3%82%9A%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%AE%E3%82%A4%E3%83%98%E3%82%99%E3%83%B3%E3%83%88%E3%82%92%E8%B3%BC%E8%AA%AD%E3%81%99%E3%82%8B -->
  <button class="finish-button" @click="finishGame">{{ finish }}</button>
</template>

<script>
import { VAceEditor } from "vue3-ace-editor"
import "ace-builds/src-noconflict/mode-html"
import "ace-builds/src-noconflict/theme-chrome"
import CanvasArea from "@/components/CanvasArea.vue"
import SampleArea from "@/components/SampleArea.vue"
import OpacityBar from "@/components/OpacityBar.vue"
import HowToArea from "@/components/HowToArea.vue"
import ColorPalette from "@/components/ColorPalette.vue"
import { doc, setDoc } from "firebase/firestore"
import { db } from "../firebase"

export default {
  components: {
    VAceEditor,
    CanvasArea,
    SampleArea,
    OpacityBar,
    HowToArea,
    ColorPalette,
  },
  props: ["setTitle", "setCode", "setSample", "setColorCodes"],
  emits: ["returnCode"],
  data() {
    return {
      opaValue: 0.5,
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
    finishGame() {
      setDoc(doc(db, "Games", this.setTitle), {
        code: this.setCode,
      })
      this.$router.push({
        name: "feedback",
        params: { passContentTitle: this.setTitle },
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
.back {
  height: 350px;
  width: 350px;
  border: 1px solid #303030;
}
.sample-back {
  height: 350px;
  width: 350px;
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
