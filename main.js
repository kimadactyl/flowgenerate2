// import './style.css'
// import javascriptLogo from './javascript.svg'
// import { setupCounter } from './counter.js'

// import * as d3 from 'd3'
import * as rita from "rita";
import { Graphviz } from "@hpcc-js/wasm/graphviz";

Graphviz.load().then((graphviz) => {
  document.getElementById("app").innerHTML = `
  <h1>Flow Generator 2</h1>
  <div id="graph"></div>
`;

  const phrase = () => {
    return `${rita.randomWord({ pos: "prp" })} ${rita.randomWord({
      pos: "vbg",
    })} ${rita.randomWord({ pos: "nns" })}`;
  };

  const dot = `
  digraph G {
    node [shape=box]

    mindist = 0
    splines = curved
    overlap_scaling = -8
    size = "7,7!"

    a[label="${phrase()}"]
    b[label="${rita.randomWord({ pos: "in" })}"]
    c[label="${phrase()}"]
    d[label="${rita.randomWord({ pos: "in" })}"]
    e[label="${phrase()}"]
    f[label="${rita.randomWord({ pos: "in" })}"]
    g[label="${phrase()}"]
    h[label="${rita.randomWord({ pos: "in" })}"]

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
