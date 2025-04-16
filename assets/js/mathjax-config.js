window.MathJax = {
    loader: {
      load: ['[custom]/xypic.js'],
      paths: {custom: 'https://cdn.jsdelivr.net/gh/sonoisa/XyJax-v3@3.0.1/build/'}
    },
  tex: {
    packages: {'[+]': ['xypic']},
    displayMath: [['\\[', '\\]']],
    macros: {
      c: ["{\\mathcal{#1}}", 1],
      bb: ["{\\mathbb{#1}}", 1],
      r: ["{\\mathrm{#1}}", 1],
      C: ["{\\mathsf{#1}}", 1],
      cat: ["{\\mathsf{#1}}", 1],
      o: ["{\\operatorname{#1}}", 1],
      t: ["{\\text{#1}}", 1],
      b: ["{\\boldsymbol{#1}}", 1],
      Cat: ["{\\widehat{\\mathsf{#1}}}",1],
      // 
      oo: ["{\\infty}"],
      sslash: ["{\/\\!\/}"],
      colim: ["{\\operatorname{colim}}"]
    }
  }
};