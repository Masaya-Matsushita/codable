<template>
  <div class="title__container" :style="titleBgColor">
    <div class="title__logo">{{ setTitle.logo }}</div>
    <span class="title__text">{{ setTitle.mainText }}</span>
    <span class="title__text title__text-sub">{{ setTitle.subText }}</span>
  </div>
  <div class="content__container">
    <div class="content__title">{{ setContentTitle }}</div>
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
import { getAuth, onAuthStateChanged } from "firebase/auth"
import Swal from "sweetalert2"

const auth = getAuth()

export default {
  components: {
    VAceEditor,
  },
  props: ["setTitle", "setContentTitle", "setColor", "setStage"],
  data() {
    return {
      titleBgColor: { backgroundColor: this.setColor + "25" },
      record: {},
      finish: "ステージ選択へ",
    }
  },
  created() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getDoc(doc(db, user.email, this.setStage)).then((snapshot) => {
          this.record = snapshot.data()
        })
      } else {
        Swal.fire({
          icon: "error",
          title: "User Not Found",
          text: "ログインが確認されていません。",
        })
        this.$router.push("/")
      }
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
  padding: 30px auto;
}
.title__text {
  font-size: 2rem;
}
.title__text-sub {
  white-space: nowrap;
}
.content__container {
  max-width: 1300px;
  margin: 50px 30px;
  padding: 50px 20px;
  background-color: #fcfcf8;
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
  background: linear-gradient(#f8f8f0, #fcfcf8);
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
}
.router {
  text-decoration: none;
}
.finish-button {
  height: 70px;
  width: 350px;
  color: #303030;
  font-size: 1.5rem;
  display: block;
  margin: 0 200px 50px auto;
}

@media (max-width: 1200px) {
  .finish-button {
    margin: 0 auto 50px auto;
  }
}

@media (max-width: 1080px) {
  .editor {
    width: 520px;
  }
}

@media (max-width: 1000px) {
  .editor {
    width: 450px;
  }
}

@media (max-width: 930px) {
  .title__logo {
    font-size: 2.6rem;
  }
  .title__text {
    font-size: 1.7rem;
  }
  .editor {
    width: 400px;
  }
}

@media (max-width: 866px) {
  .editor {
    width: 500px;
  }
}

@media (max-width: 550px) {
  .title__logo {
    font-size: 2.3rem;
  }
  .title__text {
    font-size: 1.4rem;
  }
}

@media (max-width: 470px) {
  .content__container {
    margin: 35px 15px;
    padding: 35px 10px;
  }
}

@media (max-width: 400px) {
  .title__logo {
    font-size: 1.8rem;
    padding: 35px auto;
  }
  .title__text {
    font-size: 1.3rem;
    margin-bottom: 45px;
  }
  .content__title {
    font-size: 1rem;
  }
}

@media (max-width: 370px) {
  .finish-button {
    height: 60px;
    width: 300px;
    font-size: 1.4rem;
  }
}
@media (max-width: 350px) {
  .title__logo {
    font-size: 1.5rem;
    padding: 30px auto;
  }
  .title__text {
    font-size: 1rem;
  }
  .finish-button {
    width: 260px;
  }
}
</style>
