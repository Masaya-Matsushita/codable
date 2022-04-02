<template>
  <div>hello</div>
</template>

<script>
export default {
  props: ["passContentTitle"],
  created() {
    console.log(this.passContentTitle)
  },
}
</script>
