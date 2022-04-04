<template>
  <div>hello world</div>
</template>

<script>
export default {
  created() {
    console.log(this.$route.query.stage)
  },
}
</script>
