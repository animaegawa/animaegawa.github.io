window.MathJax = {
  tex: {
    //packages: ['base', 'amscd'], // ← amscd
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
      sslash: ["{\/\\!\/}"]
    },
    //packages: ['base', 'amscd']
  },
  loader: {
    load: ['[tex]/amscd']
  }
};