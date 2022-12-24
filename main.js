// import './style.css'
// import javascriptLogo from './javascript.svg'
// import { setupCounter } from './counter.js'

import * as d3 from 'd3'
import * as rita from 'rita'
import { Graphviz } from "@hpcc-js/wasm/graphviz";

const graphviz = await Graphviz.load();

document.getElementById('app').innerHTML = `
  <h1>Flow Generator 2</h1>
  <div id="graph"></div>
`

const phrase = () => {
  return `${rita.randomWord({ pos: "prp" })} ${rita.randomWord({ pos: "vbg" })} ${rita.randomWord({ pos: "nns" })}`
}

const dot = `
  digraph G {
    node [shape=box]
    overlap=prism
    mindist=0
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

const svg = graphviz.circo(dot) // .engine('circo')

document.getElementById('graph').innerHTML = svg


console.log()
console.log(graphviz.version());