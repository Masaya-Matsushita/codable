<template>
  <div class="palette">
    <div
      class="list"
      v-for="passColorCode in passColorCodes"
      :key="passColorCode.index"
    >
      <div
        class="checker"
        :style="{
          backgroundColor: passColorCode,
        }"
      ></div>
      <div class="code">{{ passColorCode }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["passColorCodes"],
}
</script>

<style scoped>
.palette {
  width: 350px;
  padding: 10px 10px;
  margin-top: 15px;
  background-color: #d5d4d484;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.list {
  display: flex;
  margin: 10px;
}
.checker {
  height: 20px;
  width: 20px;
  outline: auto #303030;
  border-radius: 10px;
}
.code {
  line-height: 20px;
  font-size: 1.3rem;
  padding: 0 10px;
}
</style>
