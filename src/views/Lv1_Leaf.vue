<template>
  <div>hello world</div>
  <EditorArea class="editor" :passCode="code" @update:code="updateContent" />
</template>

<script>
import EditorArea from "@/components/EditorArea.vue"

export default {
  components: {
    EditorArea,
  },
  data() {
    return {
      code: "aiueo",
    }
  },
  methods: {
    updateContent(value) {
      this.code = value
    },
  },
}
</script>

<style scoped>
.editor {
  height: 600px;
  width: 600px;
}
</style>
