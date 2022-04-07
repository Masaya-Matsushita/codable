<template>
  <div>
    <input type="text" placeholder="メールアドレス" v-model="signIn.email" />
    <input type="text" placeholder="パスワード" v-model="signIn.pw" />
    <button @click="createUser">サインイン</button>
  </div>
  <div>
    <input type="text" placeholder="メールアドレス" v-model="logIn.email" />
    <input type="text" placeholder="パスワード" v-model="logIn.pw" />
    <button @click="authenticateUser">ログイン</button>
  </div>
</template>

<script>
import app from "@/firebase"
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth"
import Swal from "sweetalert2"

const auth = getAuth(app)

export default {
  data: () => ({
    signIn: {
      email: "",
      pw: "",
    },
    logIn: {
      email: "",
      pw: "",
    },
  }),
  methods: {
    createUser() {
      createUserWithEmailAndPassword(auth, this.signIn.email, this.signIn.pw)
        .then((userCredential) => {
          const user = userCredential.user
          console.log("create user success." + user)
          console.log(user)
          Swal.fire({
            icon: "success",
            title: "作成成功！",
            text: "ユーザーが正常に登録されました。",
          })
          this.$router.push("/")
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          console.log(errorMessage)
          Swal.fire({
            icon: "error",
            title: "作成失敗",
            text: "エラー内容 : " + errorCode,
          })
        })
    },
    authenticateUser() {
      signInWithEmailAndPassword(auth, this.logIn.email, this.logIn.pw)
        .then((userCredential) => {
          const user = userCredential.user
          console.log("create user success." + user)
          Swal.fire({
            icon: "success",
            title: "認証成功！",
            text: "正常に認証されました。",
          })
          this.$router.push("/")
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          console.log(errorMessage)
          Swal.fire({
            icon: "error",
            title: "認証失敗",
            text: "エラー内容 : " + errorCode,
          })
        })
    },
  },
}
</script>
