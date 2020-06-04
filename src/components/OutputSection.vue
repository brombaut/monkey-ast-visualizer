<template>
  <section id="output-section">
    <textarea
      v-model="astString"
      readonly
      autocomplete="off"
      autocorrect="off"
      autocapitalize="off"
      spellcheck="false"
    />
  </section>
</template>

<script>
export default {
  name: "OutputSection",
  props: {
    astString: String
  }
};
</script>

<style lang="scss">
#output-section {
  flex: 1;
  border-left: 1px solid lightgray;
  display: flex;
  margin-bottom: 8px;
  max-width: 700px;

  textarea {
    resize: none;
    flex: 1;
  }
}
</style>
