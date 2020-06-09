<template>
  <section id="output-section">
    <div class="ast-html-wrapper" ref="astHtmlWrapper"></div>
  </section>
</template>

<script>
export default {
  name: "OutputSection",
  props: {
    astString: String
  },
  methods: {
    buildHtml() {
      const lines = this.astString.split("\n");
      let html = "";
      lines.forEach(line => {
        html += this.buildLineHtml(line);
      });
      this.$refs.astHtmlWrapper.innerHTML = html;
    },
    buildLineHtml(line) {
      const noWhitespaceLine = line.replace(/\s/g, "");
      const specialLines = ["{", "}", "},", "[", "]", "],"];
      let htmlLine = line;
      htmlLine = line.replace(/ /g, "&nbsp;");
      if (specialLines.includes(noWhitespaceLine)) {
        return `<div class="line"><span class="object-char">${htmlLine}</span></div>`;
      }
      const key = htmlLine.match(/"_.+":/);
      if (!key) {
        return `<div class="line">${htmlLine}</div>`;
      }
      const indexOfValue =
        htmlLine.indexOf(key) + key[0].length + "&nbsp;".length;
      htmlLine = `${htmlLine.substring(
        0,
        indexOfValue
      )}<span class="value">${htmlLine.substring(indexOfValue)}</span>`;
      htmlLine = htmlLine.replace(key, `<span class="key">${key}</span>`);
      return `<div class="line">${htmlLine}</div>`;
    }
  },
  watch: {
    astString() {
      this.buildHtml();
    }
  },
  mounted() {
    this.buildHtml();
  }
};
</script>

<style lang="scss">
#output-section {
  display: flex;
  margin-bottom: 8px;
  flex: 1;

  textarea {
    resize: none;
    flex: 1;
    border-radius: 8px;
    padding: 8px;
  }

  .ast-html-wrapper {
    flex: 1;
    background: white;
    border-radius: 8px;
    padding: 8px;
    text-align: left;
    width: calc(50vw - 100px);
    overflow-y: auto;
    overflow-x: auto;

    .line {
      width: 100%;
    }
    .line:hover {
      background: rgb(241, 240, 240);
    }

    .key {
      color: #d8b802;
    }

    .value,
    .object-char {
      color: #5e00cf;
    }
  }
}
</style>
