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
      createUserWithEmailAndPassword(auth, this.logOnEmail, this.logOnPw)
        .then((userCredential) => {
          const user = userCredential.user
          console.log("create user success." + user)
          alert("作成成功")
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          console.log("errorCode: " + errorCode)
          console.log("errorMessage: " + errorMessage)
          alert("作成失敗")
        })
    },
    authenticateUser() {
      signInWithEmailAndPassword(auth, this.logInEmail, this.logInPw)
        .then((userCredential) => {
          const user = userCredential.user
          console.log("create user success." + user)
          this.$router.push("/")
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          console.log("errorCode: " + errorCode)
          console.log("errorMessage: " + errorMessage)
          alert("認証失敗")
        })
    },
  },
}
</script>
