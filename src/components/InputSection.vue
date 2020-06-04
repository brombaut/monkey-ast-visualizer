<template>
  <section id="input-section">
    <textarea />
  </section>
</template>

<script>
export default {
  name: "InputSection"
};
</script>

<style lang="scss">
#input-section {
  flex: 1;
  border-right: 1px solid lightgray;
  display: flex;

  textarea {
    resize: none;
    flex: 1;
  }
}
</style>
