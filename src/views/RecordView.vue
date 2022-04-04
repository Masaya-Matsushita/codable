<template>
  <RecordLayout
    :setTitle="title"
    :setContentTitle="contentTitle"
    :setStage="this.$route.query.stage"
  />
</template>

<script>
import RecordLayout from "@/components/RecordLayout.vue"

export default {
  components: {
    RecordLayout,
  },
  data() {
    return {
      title: {
        logo: "前回の記録",
        mainText: "エディタで書き変えられます。",
        subText: "(保存はされません)",
      },
      contentTitle: "前回の記録",
    }
  },
}
</script>
