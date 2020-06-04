<template>
  <section id="output-section">
    <textarea v-model="astString" />
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

  textarea {
    resize: none;
    flex: 1;
  }
}
</style>
