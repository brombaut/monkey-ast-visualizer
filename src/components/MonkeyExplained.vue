<template>
  <div>
    <h2 id="the-monkey-programming-language">
      The Monkey Programming Language
    </h2>
    <p>
      Below are some code examples that showcase the language features of
      Monkey.
    </p>
    <h3 id="what-monkey-looks-like-">What Monkey looks like.</h3>
    <pre><code class="lang-JavaScript"><span class="hljs-comment">// Bind values to names with let-statements</span>
let version = <span class="hljs-number">1</span>;
let name = <span class="hljs-string">"Monkey programming language"</span>;
let myArray = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>];
let coolBooleanLiteral = true;

<span class="hljs-comment">// Use expressions to produce values</span>
let awesomeValue = (<span class="hljs-number">10</span> / <span class="hljs-number">2</span>) * <span class="hljs-number">5</span> + <span class="hljs-number">30</span>;
let arrayWithValues = [<span class="hljs-number">1</span> + <span class="hljs-number">1</span>, <span class="hljs-number">2</span> * <span class="hljs-number">2</span>, <span class="hljs-number">3</span>];
</code></pre>
    <h3
      id="monkey-supports-recursive-functions-conditionals-implicit-and-explicit-returning-of-values-"
    >
      Monkey supports recursive functions, conditionals, implicit and explicit
      returning of values.
    </h3>
    <pre><code class="lang-JavaScript">// Define a `fibonacci` <span class="hljs-function"><span class="hljs-keyword">function</span></span>
let fibonacci = fn(x) {
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
    <pre><code class="lang-JavaScript">// Here is an<span class="hljs-built_in"> array </span>containing two hashes, that use strings as keys 
//<span class="hljs-built_in"> and </span>integers<span class="hljs-built_in"> and </span>strings as values
let people = [{<span class="hljs-string">"name"</span>: <span class="hljs-string">"Anna"</span>, <span class="hljs-string">"age"</span>: 24}, {<span class="hljs-string">"name"</span>: <span class="hljs-string">"Bob"</span>, <span class="hljs-string">"age"</span>: 99}];

// Getting elements out of the data types is also supported.
// Here is how we can access<span
  class="hljs-built_in"
> array </span>elements by using index expressions:
fibonacci(myArray[4]);
// =&gt; 5

// We can also access hash elements with index expressions: 
let getName = fn(person) { person[<span
  class="hljs-string"
>"name"</span>]; };

// And here we access<span class="hljs-built_in"> array </span>elements<span class="hljs-built_in"> 
// and </span>call a function with the element as argument: 
getName(people[0]); // =&gt; <span
  class="hljs-string"
>"Anna"</span>
getName(people[1]); // =&gt; <span class="hljs-string">"Bob"</span>
</code></pre>
    <h3
      id="functions-are-first-class-citizens-and-higher-order-functions-are-supported-"
    >
      Functions are first-class citizens, and higher-order functions are
      supported.
    </h3>
    <pre><code
  class="lang-JavaScript"
>// Define the higher-order function `map`, that calls the given function `f` on 
// each element in `arr`<span
  class="hljs-built_in"
> and </span>returns an<span class="hljs-built_in"> array </span>of the produced values. 
let map = fn(arr, f) {
  let iter = fn(arr, accumulated) {
   <span
  class="hljs-built_in"
> if </span>(len(arr) == 0) {
      accumulated
    } else {
      iter(rest(arr), push(accumulated, f(first(arr))));
    }
  };

  iter(arr, []);
};

// Now let's take the `people`<span
  class="hljs-built_in"
> array </span>and the `getName` function from above 
//<span class="hljs-built_in"> and </span>use them with `map`.
map(people, getName); // =&gt; [<span class="hljs-string">"Anna"</span>, <span class="hljs-string">"Bob"</span>]
</code></pre>
    <h3 id="monkey-supports-closures-">Monkey supports closures.</h3>
    <pre><code class="lang-JavaScript"><span
  class="hljs-comment"
>// newGreeter returns a new function, that greets a `name` with the given 'greeting`.</span>
<span class="hljs-keyword">let</span> newGreeter = <span class="hljs-function"><span class="hljs-keyword">fn</span></span>(greeting) {
  <span class="hljs-comment">// `puts` is a built-in function we add to the interpreter</span>
  <span class="hljs-keyword">return</span> <span class="hljs-function"><span class="hljs-keyword">fn</span></span>(name) { puts(greeting + <span class="hljs-string">" "</span> + name); }
};

<span class="hljs-comment">// `hello` is a greeter function that says "Hello"</span>
<span class="hljs-keyword">let</span> hello = newGreeter(<span class="hljs-string">"Hello"</span>);

<span class="hljs-comment">// Calling it outputs the greeting:</span>
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
h1,
h2,
h3,
h4,
h5 {
  color: #ffdd00;
}

pre {
  background: white;
  padding: 4px;
  border-radius: 2px;
}
</style>
