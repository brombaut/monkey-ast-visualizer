<template>
  <section id="input-section">
    <textarea
      id="input-textarea"
      v-model="userInput"
      v-on:keyup.enter="enterKey"
    />
  </section>
</template>

<script>
// eslint-disable-next-line no-unused-vars
const defaultValueShort = "let x = 1;";
// eslint-disable-next-line no-unused-vars
const defaultValueLong = `let x = 1;
let y = 2;
let add = fn(a, b) { return a + b };
let result = add(x, y);
`;
export default {
  name: "InputSection",
  data() {
    return {
      userInput: defaultValueLong
    };
  },
  methods: {
    enterKey(e) {
      if (e.ctrlKey) {
        this.$emit("enterKey");
      }
    }
  }
};
</script>

<style lang="scss">
#input-section {
  flex: 1;
  display: flex;
  margin-bottom: 16px;

  textarea {
    resize: none;
    flex: 1;
    border-radius: 8px;
    padding: 8px;
  }
}
</style>
