<template>
  <v-ace-editor
    v-model:value="updateCode"
    @init="editorInit"
    lang="html"
    theme="chrome"
  />
</template>

<script>
import { VAceEditor } from "vue3-ace-editor"
import "ace-builds/src-noconflict/mode-html"
import "ace-builds/src-noconflict/theme-chrome"

export default {
  components: {
    VAceEditor,
  },
  props: ["passCode"],
  emits: ["update:code"],
  computed: {
    updateCode: {
      get() {
        return this.passCode
      },
      set(value) {
        this.$emit("update:code", value)
      },
    },
  },
  methods: {
    editorInit: function () {},
  },
}
</script>
