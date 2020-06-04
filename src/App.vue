<template>
  <div id="app">
    <Header />
    <main>
      <InputSection />
      <OutputSection />
    </main>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import InputSection from "./components/InputSection.vue";
import OutputSection from "./components/OutputSection.vue";

export default {
  name: "App",
  components: {
    Header,
    InputSection,
    OutputSection
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
  display: flex;
  flex-direction: column;

  main {
    flex: 1;
    display: flex;
  }
}
</style>
