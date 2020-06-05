<template>
  <div id="monkey-explained">
    <h2 id="the-monkey-programming-language">
      The Monkey Programming Language
    </h2>
    <p>
      Below are some code examples that showcase the language features of
      Monkey.
    </p>
    <h3 id="what-monkey-looks-like-">What Monkey looks like.</h3>
    <ul>
      <li>Bind values to names with let-statements</li>
      <li>Use expressions to produce values</li>
    </ul>
    <pre><code class="lang-JavaScript">let version = <span class="hljs-number">1</span>;
let name = <span class="hljs-string">"Monkey programming language"</span>;
let myArray = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>];
let coolBooleanLiteral = true;

let awesomeValue = (<span class="hljs-number">10</span> / <span class="hljs-number">2</span>) * <span class="hljs-number">5</span> + <span class="hljs-number">30</span>;
let arrayWithValues = [<span class="hljs-number">1</span> + <span class="hljs-number">1</span>, <span class="hljs-number">2</span> * <span class="hljs-number">2</span>, <span class="hljs-number">3</span>];
</code></pre>
    <h3
      id="monkey-supports-recursive-functions-conditionals-implicit-and-explicit-returning-of-values-"
    >
      Monkey supports recursive functions, conditionals, implicit and explicit
      returning of values.
    </h3>
    <ul>
      <li>
        Define a `fibonacci`
        <b>function</b>
      </li>
    </ul>
    <pre><code class="lang-JavaScript">let fibonacci = fn(x) {
  <span class="hljs-keyword">if</span> (x == <span class="hljs-number">0</span>) {
    <span class="hljs-number">0</span>
  } <span class="hljs-keyword">else</span> {
    <span class="hljs-keyword">if</span> (x == <span class="hljs-number">1</span>) {
      <span class="hljs-keyword">return</span> <span class="hljs-number">1</span>;
    } <span class="hljs-keyword">else</span> {
      fibonacci(x - <span class="hljs-number">1</span>) + fibonacci(x - <span class="hljs-number">2</span>);
    }
  }
};
</code></pre>
    <h3
      id="monkey-supports-any-combination-of-the-following-data-types-booleans-strings-hashes-integers-and-arrays-"
    >
      Monkey supports any combination of the following data types: booleans,
      strings, hashes, integers and arrays.
    </h3>
    <ul>
      <li>Getting elements out of the data types is also supported.</li>
      <li>We can also access hash elements with index expressions.</li>
      <li>
        And we can access array elements and call a function with the element as
        argument.
      </li>
    </ul>
    <pre><code class="lang-JavaScript">let people = [{<span class="hljs-string">"name"</span>: <span class="hljs-string">"Anna"</span>, <span class="hljs-string">"age"</span>: 24}, {<span class="hljs-string">"name"</span>: <span class="hljs-string">"Bob"</span>, <span class="hljs-string">"age"</span>: 99}];

fibonacci(myArray[4]);

let getName = fn(person) { person[<span class="hljs-string">"name"</span>]; };

getName(people[0]); // =&gt; <span class="hljs-string">"Anna"</span>
getName(people[1]); // =&gt; <span class="hljs-string">"Bob"</span>
</code></pre>
    <h3
      id="functions-are-first-class-citizens-and-higher-order-functions-are-supported-"
    >
      Functions are first-class citizens, and higher-order functions are
      supported.
    </h3>
    <ul>
      <li>
        Define the higher-order function `map`, that calls the given function
        `f` on each element in `arr` and returns an array of the produced
        values.
      </li>
      <li>
        Then we can take the `people` array and the `getName` function from
        above and use them with `map`.
      </li>
    </ul>
    <pre><code class="lang-JavaScript">let map = fn(arr, f) {
  let iter = fn(arr, accumulated) {
   <span class="hljs-built_in"> if </span>(len(arr) == 0) {
      accumulated
    } else {
      iter(rest(arr), push(accumulated, f(first(arr))));
    }
  };

  iter(arr, []);
};

map(people, getName); // =&gt; [<span
  class="hljs-string"
>"Anna"</span>, <span class="hljs-string">"Bob"</span>]
</code></pre>
    <h3 id="monkey-supports-closures-">Monkey supports closures.</h3>
    <ul>
      <li>
        newGreeter returns a new function, that greets a `name` with the given
        'greeting`.
      </li>
      <li>`puts` is a built-in function we add to the interpreter</li>
      <li>
        `hello` is a greeter function that says "Hello". Calling it outputs the
        greeting:
      </li>
    </ul>
    <pre><code class="lang-JavaScript"><span class="hljs-keyword">let</span> newGreeter = <span class="hljs-function"><span class="hljs-keyword">fn</span></span>(greeting) {
  <span class="hljs-keyword">return</span> <span class="hljs-function"><span class="hljs-keyword">fn</span></span>(name) { puts(greeting + <span class="hljs-string">" "</span> + name); }
};

<span class="hljs-keyword">let</span> hello = newGreeter(<span class="hljs-string">"Hello"</span>);

hello(<span class="hljs-string">"dear, future Reader!"</span>); <span class="hljs-comment">// =&gt; Hello dear, future Reader!</span>
</code></pre>
    <h2 id="links-to-the-book-s-websites">Links to the book&#39;s websites</h2>
    <p>
      <a href="https://interpreterbook.com/">Interpreter Book</a>
    </p>
    <p>
      <a href="https://compilerbook.com/">Compiler Book</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "MonkeyExplanation"
};
</script>

<style lang="scss">
#monkey-explained {
  max-width: 50vw;
}
pre {
  background: white;
  padding: 4px;
  border-radius: 2px;
}
</style>
