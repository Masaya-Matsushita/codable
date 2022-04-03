<template>
  <div class="title__logo">{{ title.logo }}</div>
  <div class="title__text">{{ title.text }}</div>
  <div class="content__container">
    <div class="content__title">{{ contentTitle }}</div>
    <VAceEditor
      class="editor"
      v-model:value="record.code"
      lang="html"
      theme="chrome"
    />
    <div class="back" v-html="record.code"></div>
  </div>
  <button class="finish-button" @click="toHome">{{ finish }}</button>
</template>

<script>
import { VAceEditor } from "vue3-ace-editor"
import "ace-builds/src-noconflict/mode-html"
import "ace-builds/src-noconflict/theme-chrome"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase"

export default {
  components: {
    VAceEditor,
  },
  props: ["passContentTitle"],
  data() {
    return {
      record: {},
      title: {
        logo: "お疲れさまでした！",
        text: "他のステージにも挑戦してみてね！",
      },
      contentTitle: "今回の記録",
      finish: "ステージ選択へ",
    }
  },
  created() {
    getDoc(doc(db, "Games", this.passContentTitle)).then((snapshot) => {
      this.record = snapshot.data()
    })
  },
  methods: {
    toHome() {
      this.$router.push("/")
    },
  },
}
</script>

<style scoped>
.title__logo {
  font-size: 3rem;
  margin: 30px auto;
}
.title__text {
  font-size: 2rem;
  margin-bottom: 50px;
}
.content__container {
  max-width: 1300px;
  margin: 0 30px 50px 30px;
  padding: 50px 20px;
  border: 1px solid #303030;
  border-radius: 10px;
  position: relative;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.content__title {
  position: absolute;
  top: -1rem;
  left: 5%;
  font-size: 1.3rem;
  padding: 0 10px;
  background-color: rgb(250, 250, 240);
}
.editor {
  height: 350px;
  width: 600px;
  font-size: 1rem;
  outline: 1px solid #303030;
  margin-bottom: 50px;
}
.back {
  height: 350px;
  width: 350px;
  outline: 1px solid #303030;
  padding: 10px;
  margin-bottom: 50px;
  overflow-x: scroll;
}
.router {
  text-decoration: none;
}
.finish-button {
  height: 70px;
  width: 350px;
  font-size: 1.5rem;
  display: block;
  margin: 0 200px 50px auto;
}

@media screen and (max-width: 1200px) {
  .finish-button {
    margin: 0 auto 50px auto;
  }
}

@media screen and (max-width: 1080px) {
  .editor {
    width: 520px;
  }
}

@media screen and (max-width: 1000px) {
  .editor {
    width: 450px;
  }
}

@media screen and (max-width: 930px) {
  .editor {
    width: 400px;
  }
}

@media screen and (max-width: 866px) {
  .editor {
    width: 500px;
  }
}

@media screen and (max-width: 550px) {
  .title__logo {
    font-size: 2.5rem;
  }
  .title__text {
    font-size: 1.5rem;
  }
}

@media screen and (max-width: 470px) {
  .content__container {
    margin: 0 15px 30px 15px;
    padding: 35px 10px;
  }
  .finish-button {
    height: 50px;
    width: 270px;
    font-size: 1.3rem;
  }
}

@media screen and (max-width: 400px) {
  .title__logo {
    font-size: 2.2rem;
    margin: 25px auto;
  }
  .title__text {
    font-size: 1.3rem;
    margin-bottom: 40px;
  }
  .content__title {
    font-size: 1rem;
  }
}

@media screen and (max-width: 340px) {
  .title__logo {
    font-size: 1.8rem;
    margin: 20px auto;
  }
  .title__text {
    font-size: 1rem;
  }
}
</style>
