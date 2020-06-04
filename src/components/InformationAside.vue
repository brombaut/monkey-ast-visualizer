<template>
  <aside>
    <div class="project-information">
      <h2>Monkey AST Visualizer</h2>
      <p>
        A frontend to feature my port to TypeScript of the components from
        "Writing An Interpreter In Go" by Thorsten Bell for generating an AST.
        Links to his books (which I recommend) can be found below.
      </p>
      <p>
        <a href="https://github.com/brombaut/monkey-parser">GitHub</a>
      </p>
      <p>
        <a href="https://www.npmjs.com/package/@brombaut/monkey-parser">NPM</a>
      </p>
    </div>
    <MonkeyExplained />
  </aside>
</template>

<script>
import MonkeyExplained from "./MonkeyExplained.vue";
export default {
  name: "InformationAside",
  components: {
    MonkeyExplained
  }
};
</script>

<style lang="scss">
aside {
  flex: 2;
  padding: 0 12px;
  overflow-y: auto;
  text-align: left;
  background: lighten(#5e00cf, 15%);

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: #ffdd00;
  }

  p,
  a {
    color: #fdcc0d;
  }
}
</style>
