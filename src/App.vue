<template>
  <div id="app">
    <Header />
    <main>
      <div class="left-column">
        <InputSection ref="inputComponent" @enterKey="generateAst()" />
        <InformationAside />
      </div>
      <FontAwesomeIcon id="generate-icon" icon="cog" @click="generateAst()" />
      <OutputSection :astString="astString" />
    </main>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import InputSection from "./components/InputSection.vue";
import OutputSection from "./components/OutputSection.vue";
import InformationAside from "./components/InformationAside.vue";
import MonkeyParserWrapper from "./services/monkey-parser-wrapper";

export default {
  name: "App",
  components: {
    Header,
    InputSection,
    OutputSection,
    InformationAside
  },
  data() {
    return {
      astString: ""
    };
  },
  computed: {
    programString() {
      return this.$refs.inputComponent.userInput;
    }
  },
  methods: {
    generateAst() {
      const input = this.programString;
      this.astString = MonkeyParserWrapper.parse(input);
      this.rotateCog();
    },
    rotateCog() {
      const cog = document.querySelector("#generate-icon");
      if (cog.classList.contains("fullRotation")) {
        return;
      }
      cog.classList.add("fullRotation");
      setTimeout(() => {
        cog.classList.remove("fullRotation");
      }, 300);
    }
  },
  mounted() {
    this.generateAst();
  }
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: #5e00cf;
  padding: 0 8px;

  main {
    flex: 1;
    display: flex;
    justify-content: space-around;

    .left-column {
      display: flex;
      flex-direction: column;
      flex: 1;
      height: calc(100vh - 120px);
    }

    #generate-icon {
      font-size: 3rem;
      align-self: flex-start;
      margin: 16px;
      color: #ffdd00;
      margin-top: 40px;

      &:hover {
        cursor: pointer;
        filter: brightness(150%);
      }

      &.fullRotation {
        animation-name: spin;
        animation-duration: 2000ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
      }
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
}
</style>
