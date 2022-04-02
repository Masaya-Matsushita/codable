<template>
  <div class="wrapper">
    <p class="title">{{ title }}</p>
    <ol class="text">
      <li v-for="text in texts" :key="text.index">
        {{ text }}
      </li>
    </ol>
    <p class="hint">{{ hint }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "遊び方",
      texts: [
        "html,cssを記述して「完成例」イメージを作成しよう!",
        "エディタに記述したコードは「キャンバス」に反映されるよ!",
        "正解のコードは1つとは限らないよ! 色々な方法を模索してみよう!",
        "「完成!」ボタンを押して終了！ その時点のコードとキャンバスが保存されるよ!",
      ],
      hint: "Hint. ブラウザの「検証ツール」で例題の答えが見られるかも...",
    }
  },
}
</script>

<style scoped>
.wrapper {
  background-color: rgb(230, 227, 227);
  width: 450px;
  height: 230px;
  overflow-y: scroll;
}
.title {
  font-size: 1.5rem;
}
.text li {
  text-align: justify;
  padding: 0 30px 15px 0;
}
.hint {
  font-size: 14px;
  text-align: justify;
  padding: 15px 30px 0 60px;
  text-indent: -35px;
}
</style>
