import './style.css'
// import javascriptLogo from './javascript.svg'
// import { setupCounter } from './counter.js'

// import * as d3 from 'd3'
import * as rita from "rita";
import { Graphviz } from "@hpcc-js/wasm/graphviz";

Graphviz.load().then((graphviz) => {
  document.getElementById("app").innerHTML = `
  <h1>Knot Generator</h1>
  <p>Based on R.D Laing's <em>Knots (1970)</em>. <a href="#" onClick="window.location.reload();">Generate another?</a></p>
  <div id="graph"></div>
`;

  const word = (pos) => {
    return `${rita.randomWord({ pos: pos })}`
  }

  const phrase = () => {
    return `${word("prp")} ${word("vbg")} ${word("nns")}`
  };

  const dot = `
  digraph G {
    mindist = 0
    splines = curved
    overlap_scaling = -8
    size = "7,7!"
    bgcolor="transparent"
    

    node [shape=plaintext,fontname="Palatino-Bold"]
    edge [color="#444444"]

    a[label="${phrase()}"]
    b[label="${word("in")}"]
    c[label="${phrase()}"]
    d[label="${word("in")}"]
    e[label="${phrase()}"]
    f[label="${word("in")}"]
    g[label="${phrase()}"]
    h[label="${word("in")}"]

    a -> b
    b -> c
    c -> d
    d -> e
    e -> f
    f -> g
    g -> h
    h -> a
  }
`;

  const svg = graphviz.circo(dot);

  document.getElementById("graph").innerHTML = svg;

  console.log(graphviz.version());
});
