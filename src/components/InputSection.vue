<template>
  <section id="input-section">
    <textarea id="input-textarea" v-model="programString" />
    <FontAwesomeIcon id="generate-icon" icon="cog" @click="generateClicked" />
  </section>
</template>

<script>
export default {
  name: "InputSection",
  data() {
    return {
      programString: ""
    };
  },
  methods: {
    generateClicked() {
      console.log(this.programString);
      this.$emit("generate", this.programString);
    }
  }
};
</script>

<style lang="scss">
#input-section {
  flex: 1;
  border-right: 1px solid lightgray;
  display: flex;
  position: relative;

  textarea {
    resize: none;
    flex: 1;
  }

  #generate-icon {
    font-size: 3rem;
    position: absolute;
    right: calc(-1px - 1.5rem);
    top: calc(50% - 3rem);
    background: white;

    &:hover {
      cursor: pointer;
      filter: brightness(150%);
    }
  }
}
</style>
