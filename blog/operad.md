---
layout: post
title: "対称モノイダル無限圏 / ∞-operad"
date: 2025-04-15
lang: ja
last_modified: 
---

以下の記事の内容を一部踏まえています：
<ul>
    <li><a href="/blog/oo-cat">∞-圏入門I</a> </li>
    <li><a href="/blog/pr">∞-圏入門II</a> </li>
</ul>
---
<div style="text-align: right;">
  <a href="../ja/">日本語Top</a> |
  <a href="../">English</a>
</div>
**目次**
* Table of Contents
{:toc}


### 記号

- 圏 $$\colon$$ $$\infty$$-圏
- ハイフン $$(-)\colon$$ 関手性
- 下付き $$\bullet$$ $$\colon$$ simplicial関手性または導来圏の対象
- $$\C{An}$$ $$\colon$$ アニマ
- $$\C{An}^\r{fin}$$ $$\colon$$ アニマの圏の(full)部分圏であって，（\\(\ast\in\cat{An}\\)を含み）finite colimitで閉じているもののうち最小のもの
- $$\C{Cat}$$, $$\Cat{Cat}$$ $$\colon$$ 小圏と圏
- $$(\C{Pr}^\r{L}, \otimes, \C{An})$$ $$\colon$$ 表示可能圏のなす対称モノイダル圏


## Introduction

Mayの(coloured)オペラッドにおいて「位相空間」を「アニマ」に置き換えたものを，<b>\\(\oo\\)-オペラッド</b>あるいはたんにオペラッドと言います．対称モノイダル∞-圏もその一例になります．


現状，このポストは，非常に基本的な定義の紹介にとどまっており，∞-オペラッドの理論自体には立ち入りません．

<div class="footnote-section">
<b>参考文献</b>
<br>
Jacob Lurie, Higher algebra, <a href="https://www.math.ias.edu/~lurie/papers/HA.pdf">https://www.math.ias.edu/~lurie/papers/HA.pdf</a>.
</div>


## 復習：cocartesian arrow

\\(p\colon \c{E} \to \c{C}\\)
を固定する．

<div class="definition">
\(\c{E}\) の写像 \(f\colon x' \to x\)
が
<b>\(p\)-cocartesian</b>
\(\overset{\r{def}}{\Longleftrightarrow}\)
図式
\[\xymatrix{\o{Map}(x,-) \ar[d]_p \ar[r]^{(-)\circ f} & \o{Map}(x',-) \ar[d]^p \\ \o{Map}(p(x),p(-)) \ar[r]_{(-)\circ pf} & \o{Map}(p(x'),p(-))}\]
がカルテシアン．
</div>

<div class="definition">
\(g\colon p(x') \to c\) の <b>cocartesian lift</b>
とは，\(p\)-cocartesian 射 \(f\colon x' \to x\) と同型 \(pf \simeq g\) のペアを指す．
<br> <br>
任意の \(g\colon p(x') \to c\) の cocartesian lift が存在する時，\(p\) を cocartesian fibration と呼ぶ．
</div>

一応，quasicategoryのコカルテシアンファイブレーションの定義と比べると，わずかに定義が緩くなっていますが，圏同値不変な定義としてはこれが最も合理的です．

<div class="definition">
\[\xymatrix{ \c{E}' \ar[rr]^f \ar[rd]_{q} & & \c{E} \ar[ld]^{p} \\ & \c{C}}\]
が二つのcocartesianファイブレーションの間の写像であるとは，
\(f\) が \(q\)-cocartesian arrow を \(p\)-cocoartesian arrow に写すこととする．
<br><br>
これにより，(non-full)部分圏 \(\C{coCart}(\c{C}) \subset \C{Cat}_{/\c{C}}\) を定義する．
</div>

(Un)straightening 定理を復習しておきます．
<div class="theorem">
次の形の圏同値が存在する．
\[\Cat{coCart}(\c{C}) \simeq \o{Fun}(\c{C},\Cat{Cat})\]
さらに，cocartesian fibration \(\c{E} \to \c{C}\)に対応するstraightening \(F\colon \c{C} \to \Cat{Cat}\)は，対象 \(c\in\c{C}\)をファイバー \(\{c\}\times_\c{C} \c{E}\)に写す．
</div>

<div class="remark">
左ファイブレーションから生成される full subcategory \(\C{LFib}(\c{C}) \hookrightarrow \C{coCart}(\c{C})\) については，\(\C{LFib}(\c{C}) \hookrightarrow \C{Cat}_{/\c{C}}\)はfully faithfulになる．
</div>

<div class="remark">
アニマ\(X\) に対し，\(\C{LFib}(X)=\C{An}_{/X}\)．
</div>


## 可換モノイド/対称モノイダル圏

まず，「可換モノイド」という構造を復習します．集合論的な世界観では，可換モノイドとは，モノイドという二項演算構造プラス可換性という捉え方がされます．しかし，圏論をベースとして考える際，「可換演算構造」そのものが何であるべきかを問うことが重要です．

「二項演算+可換性」を超えた，可換モノイドの考え方として，次のようなものを提案できます．
<ul>
<li> （演算の順序によらず，）有限和が定義される構造．
</li>
</ul>
つまり，有限集合で添字付けられた族 \\(\lbrace x\_i\rbrace\_{i\in I}\\)に対する「和」\\(\sum\_{i\in I} x\_i\\) の構造であると考えます．有限順序集合ではなく，順序を持たない有限集合を採用するという点が，結合的なモノイドと異なる部分であり，可換性を完全に記述するものとなります．

もう少し正確に述べると，可換モノイド\\(M\\)とは，有限集合の間の写像\\(\phi \colon J \to I\\)に対し，和：
\\[\phi_\sharp \; \colon \prod_J M \ni \(x_j\)\_{j\in J} \mapsto \(\sum\_{j\in \phi^{-1}(i)} x_j \; \)\_{i\in I} \in \prod_{I} M\\]
が定義され，（\\(J, I, \phi\\)についての）関手性を持つものであるということです．この関手性が，古典的な結合法則に対応します．

そして，写像 \\(\phi\_\sharp\\) が上の式のような形をしていることもやはり指定しておく必要があります．つまり以下のような可換性が要求されます．
\\[\xymatrix{\prod_J M \ar[r]^{\phi\_\sharp} \ar[d]\_{\r{res}} & \prod\_I M \ar[d]^{\r{pr}\_i} \\\\ \prod\_{\phi^{-1}(i)} M \ar[r]\_{\phi\_i'{}\_\sharp} & M}\\]
ただし，\\(\phi_i'\\) は写像 \\(\phi^{-1}(i) \to \ast\\)．

したがって，単射 \\(I' \hookrightarrow I\\) による引き戻し \\(\prod_{I} M \to \prod_{I'} M\\) が必要です．上の可換図式を観察すると，これは有限集合の間の partially defined maps の合成についての関手性に他ならないことがわかります．

<div class="lemma">
対象を有限集合，射を partially defined map とする圏は，基点付き有限集合のなす圏 \(\o{Fin}_\ast\) と圏同値．
</div>

<div class="definition">
partial map として逆向きの単射に対応するような点付き写像を，<b>inert</b> 写像と呼び，また，定義域全体で定義された写像に対応するような点付き写像を，<b>active</b> 射と呼ぶ．
<br>
つまり，\(\rho\colon J_+ \to I_+\) が inert であるとは，各 \(i\in I\) に対し \(\rho^{-1}(i)\) が一点であることであり，また active なのは \(\rho^{-1}(\ast)=\ast\) のときである．
</div>

したがって，次の Segal による定義に辿り着きます．以下，有限集合 \\(I\\) と \\(i\in I\\) に対して，(inert)写像 \\(\rho^i \colon I_+ \to \lbrace i \rbrace_+\\) を以下で定義しておく．
\\[ \rho^i(x) = \begin{cases} i & (x=i) \\\\ \ast & (x\neq i) \end{cases} \\]
<div class="definition">
\(\c{C}\)
を，有限直積をもつ圏とする．
\(\c{C}\) の<b>可換モノイド対象</b>とは，関手
\[M(-) \; \colon\; \o{Fin}_\ast \to \c{C}\]
であって，各 \(I_+\in \o{Fin}_\ast\)に対して，写像
\[\{\rho^i\}_{i\in I} \; \colon M(I_+) \to \prod_{i\in I} M(1_+)\]
が同型であるものとする．

可換モノイドのなす圏 \(\o{CMon}(\c{C})\) は，full subcategory \( \o{CMon}(\c{C}) \subset \o{Fun}(\r{Fin}_\ast , \c{C}) \) で定義する．
</div>

\\(M(\ast)\\) を，可換モノイド構造の underlying object であると考え，たんにこれを \\(M\\) と略記することもあります．

\\(\infty\\)-圏論の優秀な点として，メタ的な帰納のステップが，自己完結するという点があります．たとえば，次のように対称モノイダル\\(\infty\\)-圏を即座に定義することができます．

<div class="example">
\(\o{CMon}(\Cat{Cat})\) の対象を．<b>対称モノイダル圏</b>と呼ぶ．射は，<b>対称モノイダル関手</b>と呼ばれる．
</div>

active 射 \\(I\_+ \to 1\_+\\) の誘導する関手を \\(\otimes\_{i\in I} \; \colon \; \prod\_I \c{C} \to \c{C}\\) と書く．


## オペラッド

対称モノイダル圏
\\((\c{C}, \otimes) \colon \r{Fin}\_\ast \to \Cat{Cat}\\)
を unstraightening して，cocartesian fibration 
\\[p\colon \c{C}^\otimes \to \r{Fin}\_\ast\\]
が対応します．インフォーマルに，\\(\c{C}^\otimes\\) は，対象が \\(\c{C}\\) の対象の有限族 \\(\lbrace x_i \rbrace\_{i\in I}\\) で，射が
\\[ \o{Map}\_{\c{C}^\otimes} (\lbrace y\_j\rbrace\_{j\in J}, \lbrace x_i\rbrace\_{i \in I}) \simeq \coprod\_{\phi \colon J_+ \to I_+} \prod\_{i\in I} \o{Map}\_{\c{C}}( \bigotimes\_{j\in \phi^{-1}(i)} y_j, x_i ) \\]
であるような圏として説明されます．
\\(\c{C}^\otimes\\) の圏としての構造が，operadicな合成構造を記述していることに注意します．

オペラッドとは，active射のcocartesian liftである \\(\otimes\_{i\in I} \colon \prod\_{i\in I} \c{C} \to \c{C}\\) を仮定せずに，\\(\o{Map}\_{\c{C}}( \bigotimes\_{j\in \phi^{-1}(i)} y_j, x_i )\\)の部分を抽象化した構造のことでした．なので，以下のように∞-オペラッドを定義します．

<div class="definition">
<b>オペラッド</b>とは，関手 \(p\colon \c{O}^\otimes \to \r{Fin}_\ast\) であって以下を満たすものとする．ただし，以下 \(\c{O}\) でファイバー \(\{1_+\}\times_{\r{Fin}_\ast}\c{O}^\otimes\) のことを表す．
<ul>
<li>
任意の\(X\in\c{O}^\otimes\)と inert射 \(\rho\colon p(X) \to J_+\) に対し，\(p\)-cocartesian lift \(X \to \rho_\sharp X\) が存在する．
</li>
<li>
関手 \[\{\rho^i_\sharp\}_{i\in I} \colon \{I_+\}\times_{\r{Fin}_\ast} \c{O}^\otimes \to \prod_{i\in I} \c{O}\]
が圏同値．
</li>
<li>
cocartesian lifts \(\widetilde{\rho^i}\) の誘導する以下の四角が，カルテシアン．
\[\xymatrix{\o{Map}_{\c{O}^\otimes}(-, X) \ar[d]_p \ar[rr]^{\{\widetilde{\rho^i}\circ(-)\}\quad} && \prod_{i\in I} \o{Map}_{\c{O}^\otimes}(-, \rho^i_\sharp X) \ar[d]^p \\ \o{Hom}_\ast(p(-),I_+) \ar[rr]_{\{\rho^i\circ(-)\}\quad} && \prod_{i\in I} \o{Hom}_\ast(p(-), \{i\}_+) }\]
</li>
</ul>
<br>
(small) オペラッド全体のなす圏 \(\C{Opd}\) は，\(\C{coCart}(\r{Fin}_\ast^{\r{inert}}) \times_{\C{Cat}_{/\r{Fin}_\ast^\r{inert}}} \C{Cat}_{/\r{Fin}_\ast}\) の full subcategoryとして定義する．
</div>

圏 \\(\c{O}\\) は，underlying category of \\(\c{O}^\otimes\\) などと呼ばれます．

<div class="example">
\(\r{id}\colon \r{Fin}_\ast \to \r{Fin}_\ast\) はオペラッドである．これを \(\bb{E}_\infty^\otimes \in \C{Opd}\)と表す．圏 \(\C{Opd}\) のterminal objectを与えている．
<br><br>
1-圏 \(\bb{E}_1^\otimes \to \r{Fin}_\ast\) を，対象はpointed finite sets，そして\[\o{Map}_{\bb{E}_1^\otimes}(J_+, I_+) \coloneqq \coprod_{\phi\in\o{Hom}_\ast(J_+,I_+)} \prod_{i\in I} \{\t{orderings of } \phi^{-1}(i)\}\] で定義すると，オペラッドになる．
</div>


<div class="definition">
オペラッド \(\c{O}^\otimes, \c{P}^\otimes\) に対し，圏 \(\o{Alg}_\c{P}(\c{O})\) を以下で定義する．
<ul><li>
\(\o{Fun}_{/\r{Fin}_\ast}(\c{P}^\otimes, \c{O}^\otimes)\) の full subcategory であって，inert射のcocoartesian liftを保つ関手で生成されるもの．
</li></ul>
</div>

<div class="example">
\(\o{CAlg}(\c{C}) \coloneqq \o{Alg}_{\bb{E}_\infty}(\c{C})\)；可換代数対象のなす圏．
<br>
\(\o{CAlg}(\c{C}) \coloneqq \o{Alg}_{\bb{E}_1}(\c{C})\)；代数対象のなす圏．
</div>

<div class="lemma">
\(\C{Opd}\) は，二圏（= \((\oo,2)\)-category）の構造をもつ．実際，定義に採用したpullbackに現れる各圏が，二圏にアップグレードする．
</div>

<div class="definition">
対称モノイダル圏 \(\c{C}, \c{D}\) に対して，両者をオペラッドとして捉えた場合の射 \(\c{C}^\otimes \to \c{D}^\otimes \t{ in }\Cat{Opd}\) のことを，<b>lax symmetric monoidal</b> 関手と呼ぶ．
</div>


## 補遺

### Monoidal adjunction

<div class="theorem">
対称モノイダル構造をもつ関手の右随伴は，カノニカルに lax symmetric monoidal構造をもつ．
</div>

### Module

<div class="footnote-section">
<b>参考文献</b>
<br>
Appendix A in Tony Annala, Ryomei Iwasa, <i>Motivic spectra and universality of K-theory</i>, <a href="https://arxiv.org/abs/2204.03434">arXiv:2204.03434v2</a>.
</div>

<div class="definition">
圏 \(\bb{M}^\otimes\) を定義する．対象は，点付き有限集合と点付き部分集合の組 \(J_+ \supset T_+\) で，射は以下でさだめる．
\[ \o{Map}_{\bb{M}^\otimes} (J_+ \supset T_+ , I_+ \supset S_+) \coloneqq \left\{ \phi \colon J_+ \to I_+ \t{ in } \r{Fin}_\ast \mid T \subset \phi^{-1}(S) \t{ and } T \xrightarrow[\phi]{\sim} S \right\} \]
このとき，関手 \(\bb M^\otimes \to \r{Fin}_\ast\) はオペラッドになる．
</div>

underlying category \\(\bb M\\) はちょうど二つの対象をもつことに注意します．これにより，\\(\o{Alg}\_\bb{M} (\c{C})\\) の対象は，可換代数とその上の加群の組 \\((A,M)\\) であると考えることができます．

<div class="remark">
関手 \(I_+ \mapsto (I_+ \supset \ast)\) が，オペラッドの射 \(\bb{E}_\oo^\otimes \to \bb M^\otimes\) を与える．
<br>
対称モノイダル圏 \((\c{C},\otimes)\) に対して，\(\o{Alg}_\bb{M} (\c{C})\) を \(\o{Mod}(\c{C})\) と書く．とくに，関手 \(\o{Mod}(\c{C}) \to \o{CAlg}(\c{C})\) があり，\(A \in \o{CAlg}(\c{C})\) 上のファイバーは \(\o{Mod}_A(\c{C})\) と書かれる．
</div>

可換性を課さない変種として，\\(\phi\\) を \\(\bb{E}_1^\otimes\\) の射，そして各 \\(s\in S\\) に対し一点 \\(\phi^{-1}(s) \cap T\\) が \\(\phi^{-1}(s)\\) の最小元であることを課したものがあり，これもまたオペラッド \\(\bb{RM}^\otimes\\) を与えます．
<br>
ファイバーの順序を忘却する写像 \\(\bb{RM} \to \bb M^\otimes\\) があります．

<div class="definition">
\(\o{RMod}(\c{C}) \coloneqq \o{Alg}_{\bb{RM}}(\c{C})\)
</div>

基本的な結果として，可換代数の上の加群の構造は，結合性の構造のみにしか依らないというものがあります．

<div class="theorem">
以下がカルテシアン．
\[\xymatrix{ \o{Mod}(\c{C}) \ar[d] \ar[r] & \o{RMod}(\c{C}) \ar[d] \\ \o{CAlg}(\c{C}) \ar[r] & \o{Alg}(\c{C}) }\]
</div>

## Presentably symmetric monoidal

<div class="definition">
\(\c{C} \in \o{CAlg}(\C{Pr}^\r{L})\) を <b>presentably symmetric monoidal category</b>と呼ぶ．
</div>