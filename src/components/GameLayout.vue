<template>
  <div class="title">{{ setTitle }}</div>
  <div class="content-area">
    <VAceEditor
      class="editor"
      v-model:value="updateCode"
      @init="editorInit"
      lang="html"
      theme="chrome"
    />
    <div class="display-area">
      <div class="canvas-area">
        <div class="over-lap">
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
          @returnOpaValue="updateOpacity"
        />
      </div>
      <div class="sample-area">
        <SampleArea class="sample-back" :passSample="setSample" />
        <ColorPalette class="color-palette" :passColorCodes="setColorCodes" />
      </div>
    </div>
  </div>
  <!-- ボタンがコンポーネント化できない
    https://v3.ja.vuejs.org/guide/component-basics.html#%E5%AD%90%E3%82%B3%E3%83%B3%E3%83%9B%E3%82%9A%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%AE%E3%82%A4%E3%83%98%E3%82%99%E3%83%B3%E3%83%88%E3%82%92%E8%B3%BC%E8%AA%AD%E3%81%99%E3%82%8B -->
  <button class="howTo-button" @click="howToAlert">
    <img class="howTo-icon" :src="howTo.iconPath" :alt="howTo.iconAlt" />
    {{ howTo.text }}
  </button>
  <button class="finish-button" @click="finishGame">{{ finish }}</button>
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
import "animate.css"
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
      howTo: {
        text: "遊び方",
        iconPath: require("@/assets/HowToIcon.png"),
        iconAlt: "?",
      },
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
      const steps = ["1", "2", "3", "4", "5"]
      const Queue = Swal.mixin({
        progressSteps: steps,
        confirmButtonText: "Next >",
        showClass: {
          popup: "animate__animated animate__fadeIn",
          backdrop: "swal2-noanimation",
        },
        hideClass: {
          backdrop: "swal2-noanimation",
        },
      })
      await Queue.fire({
        title: "遊び方 1/4",
        text: "html,cssを記述して「完成例」イメージを作成しよう!",
        imageUrl: "https://unsplash.it/400/200",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
        currentProgressStep: 0,
        showClass: { popup: "animate__animated animate__backInRight" },
      })
      await Queue.fire({
        title: "遊び方 2/4",
        text: "エディタに記述したコードは「キャンバス」に反映されるよ!",
        imageUrl: "https://unsplash.it/400/200",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
        currentProgressStep: 1,
      })
      await Queue.fire({
        title: "遊び方 3/4",
        text: "「透過度バー」や「カラーコード」をうまく利用しよう！",
        imageUrl: "https://unsplash.it/400/200",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
        currentProgressStep: 2,
      })
      await Queue.fire({
        title: "遊び方 4/4",
        text: "「完成!」ボタンを押して終了！ その時点のコードとキャンバスが保存されるよ!",
        imageUrl: "https://unsplash.it/400/200",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
        currentProgressStep: 3,
      })
      await Queue.fire({
        title: "Hint",
        text: "ブラウザの「検証ツール」で例題の答えが見られるかも...",
        imageUrl: "https://unsplash.it/400/200",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
        currentProgressStep: 4,
        confirmButtonText: "OK",
        hideClass: { popup: "animate__animated animate__backOutLeft" },
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
  height: 50px;
  font-size: 2.5rem;
  background: linear-gradient(to left, #fafaf0, #00800050, #fafaf0);
}
.content-area {
  display: flex;
  align-items: flex-start;
}
.editor {
  height: 600px;
  width: 600px;
  font-size: 1rem;
}
.display-area {
  display: flex;
  padding: 30px;
}
.sample-area {
  margin-left: 10px;
}
.over-lap * {
  position: absolute;
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
  padding: 10px;
}
.opacity-bar {
  width: 350px;
  margin-top: 380px;
}
.color-palette {
  background-color: #fff;
}
.howTo-button {
  height: 80px;
  width: 250px;
  font-size: 1.5rem;
}
.howTo-icon {
  width: 1.2em;
  transform: translate(-50%, 20%);
}
.finish-button {
  height: 80px;
  width: 250px;
  font-size: 1.5rem;
}

@media (max-width: 1200px) {
  .editor {
    outline: 1px solid #303030;
    margin-right: 10px;
  }
  .display-area {
    padding: 30px 0;
  }
}

@media (max-width: 1090px) {
  .content-area {
    flex-direction: column-reverse;
    align-items: center;
  }
}
@media (max-width: 740px) {
  .display-area {
    flex-direction: column-reverse;
  }
  .sample-area {
    margin: 0 0 30px 0;
  }
}
@media (max-width: 620px) {
  .editor {
    width: 96vw;
    padding: 0 2vw;
  }
}
</style>
