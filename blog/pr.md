---
layout: post
title: "表示可能無限圏"
date: 2025-04-15
lang: ja
comments: true
last_modified: 
---

HTT<a><sup>*1</sup></a> の最重要部である5章のまとめ記事です．

<div id="ref0" class="footnote-section">
<sup><a>*1</a></sup> Jacob Lurie, <i>Higher topos theory</i>, Annals of Mathematics Studies, vol. 170, Princeton University Press, Princeton, NJ, 2009, Updated copy available at <a href="https://www.math.ias.edu/~lurie/papers/HTT.pdf">https://www.math.ias.edu/~lurie/papers/HTT.pdf</a>. <a href="https://mathscinet.ams.org/mathscinet/article?mr=2522659">MR2522659</a>
</div>

以下の記事の内容を一部踏まえています：
<ul>
    <li><a href="/blog/oo-cat">∞-圏入門I</a> </li>
    <li><a href="/blog/operad">∞-圏入門III</a> </li>
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
- $$(-)^\simeq \colon \C{Cat} \to \C{An}$$ $$\colon$$ full埋め込み $$\cat{An} \hookrightarrow \cat{Cat}$$ の右随伴関手
- $$\c{O}^\otimes$$ $$\colon$$ オペラッド；certain map \\(p\colon \c{O}^\otimes \to \r{Fin}_\ast\\)
- $$\o{Alg}(\c{C})$$ $$\colon$$ algebra objects
- $$\o{CAlg}(\c{C})$$ $$\colon$$ commutative algebra objects
- $$\kappa$$ $$\colon$$ regular cardinal


## Introduction

圏論における完備化に関する章です．<br>
例え話に過ぎませんが，解析学において，「点列の収束」「空間の完備性」「抽象的な完備化の存在」という三つの基本的な考え方があります．これらは，超越的な議論により，何らかの対象の存在を広く一般に保証するための原理を与えてくれます．
<br>
圏論においても，圏・随伴・普遍性といった基本概念の理解以上に，「完備性」や「完備化」の存在は，非常に強力な道具となります．これらを通じて，何かの存在を抽象的に与えるための，新たな方法論を形成することができます．
<br>
1-圏論ではこうした議論にあまり魅力を感じなかった人もいるかもしれません．しかし，対象を素手で触れるように扱うことのできない無限圏の世界において，これは避けて通ることのできない，根源的な指針となります．

次にpresentabilityの動機づけに触れておきます．
<br>
群を，積に関する構成要素である生成元に着目して，それがたかだか有限集合で記述可能な場合に，finitely generated と言いました．加えて，これら生成元の間の関係式が再び有限生成のとき，群を finitely presentable と言いました．
<br>
数学に自然に現れる圏においては，余極限によって一般の対象が生成されることが多々あります．この余極限に関する生成元が高々smallな圏で記述され，さらにその間の（同型）射の関係式も再び高々smallな記述をもつとき，presentableと言います．
<br>
典型的な説明としては，集合論的なサイズの問題に慎重になったとしてもギリギリ扱うことのできるような大きさの（余完備な）圏が，presentable categoryです．

## Conventions

### 部分圏

ある圏\\(\c{C}\\) における写像 \\(f \colon x' \to x\\) が<b>単射</b>であるとは，図式
\\[\xymatrix{x' \ar@{=}[r] \ar@{=}[d] & x' \ar[d]^f \\\\ x' \ar[r]_f & x}\\]
がカルテシアンであることとします．

定義より，\\(f\\)が単射であることと，\\(f\circ (-) \colon \o{Map}(-, x') \to \o{Map}(-,x)\\) が単射であることが同値です．次を知っておくと良いと思います．

<div class="lemma">
アニマの間の単射 \(X' \to X\) は，直和因子になる：\(X' \hookrightarrow X' \coprod X'' \simeq X\)．
</div>

<div class="definition">
\(\Cat{Cat}\) における単射を，<b>部分圏</b>と呼ぶ．
</div>

<div class="example">
Full subcategory は部分圏．
</div>

<div class="remark">
\(G'\subsetneq G\) を部分群とするとき，アニマ（したがって圏）\(BG' \to BG\)は部分圏でない．
</div>

この定義での部分圏は，KerodonやHTTでは <b>replete subcategory</b>と呼ばれるものになります．

（KerodonやHTTの意味で）replete<a><sup>*2</sup></a>でない部分圏という概念には，あまり合理性がないため，repleteなものにフォーカスすることが一般的です．

<div class="footnote-section">
<a>*2</a>
repleteとは，quasicategoryのレベルでisofibrationであることを課す，というイメージです．
</div>

<div class="example">
<ul>
<li>\(\{\text{Differentiable manifolds}\}\to \{\text{Topological manifolds}\}\)は，repelteでない<sup><a>*Milnor</a></sup>ため，部分圏ではない．</li>
<li>\(\{\text{Compact Lie groups}\}\hookrightarrow \{\text{Compact topological groups}\}\)は，replete<sup><a>*?</a></sup>になり，我々の意味で部分圏になる．</li>
</ul>
</div>
このように，repleteという概念は，対象を定めるものが"性質"であるか否かにおいて，非常に自然なものです．

次のように，部分圏を定めるデータは，1-圏 \\(h\c{C}\\) のレベルに帰着されます．

<div class="lemma">
\(f\colon \c{C}' \to \c{C}\)に対し，TFAE．
<ul>
<li>
\(f\) が \(\Cat{Cat}\) で単射．
</li>
<li>
\(f\colon h\c{C}' \to h\c{C}\) が，1-圏としてreplete subcategory inclusionであり，以下がカルテシアン．
\[\xymatrix{\c{C}' \ar[d] \ar[r]^f & \c{C} \ar[d] \\ h\c{C}' \ar@{^{(}->}[r]^f & h\c{C}}\]
</li>
</ul>
とくに，次の二つのposetが圏同値．
\[\{\t{Subcategories of }\c{C}\} \xrightarrow[\;\sim\;]{h} \{\t{Subcategories of }h\c{C}\}\]
</div>

したがって，1-圏 \\(h\c{C}\\) の部分圏を定義することが，\\(\c{C}\\)の部分圏を定義するために必要十分です．


### 有限圏

一点と\\(\Delta^1\\)
からはじめて，有限余直積やpushoutの繰り返しで作られる圏を<b>有限</b>であるといいます．

<div class="definition">
Full subcategory \(\C{Cat}^{\r{fin}}\subset\C{Cat}\)
を，finite<a><sup>*3</sup></a> coproduct および pushout で閉じており，\(\Delta^0, \Delta^1\)
を含む最小の(full)部分圏として定義する．
</div>

<div class="footnote-section">
<sup><a>*3</a></sup>
有限集合で添字付けられた余直積という意味．
</div>

<div class="remark">
変種として，コンパクト対象のなす部分圏
\(\C{Cat}^\omega=\C{Cat}^{\aleph_0}\subset\C{Cat}\)
があり，コンパクト無限圏は有限無限圏のretractになることがわかる．
</div>

### サイズ

同様に，各無限 regular<a>*</a> cardinal \\(\kappa\\)
に対し，full subcategory \\(\C{Cat}^{\kappa\t{-small}} \subset \C{Cat}\\)
を定義することができます<a>**</a>．この部分圏の対象を，$$\kappa$$<b>-small category</b>と呼ぶ．

<div class="footnote-section">
<a>**</a>
pushoutと\(\kappa\)-small coproductを使って上と同様の定義をする．
\(\pi_\ast (\o{Fun}(\Delta^\bullet, \c{C})^\simeq)\)
の\(\kappa\)-smallnessによって定義することも可能．
</div><div class="footnote-section">
<a>*</a>
regularでない基数でも，別の方法で\(\C{Cat}^\t{\(\kappa\)-small}\) が定義できるが，簡単のためここでは全てregularな基数しか考えない．
</div>

## （余）極限の復習

(Co)limitとは，何も言わなければ small diagram の(co)limitのことを指すのでした．

### 完備性の分解

<div class="theorem">
圏 \(\c{C}\) が，fiber productと\(\kappa\)-small productをもつとき，任意の\(\kappa\)-small limitを持つ．
<br>
関手 \(\c{C}\to\c{D}\) が，fiber productと\(\kappa\)-small productを保つとき，任意の\(\kappa\)-small limitを保つ．
</div>

<div class="proof">
所謂「good論法」<a>***</a>から，以下の二つを示せば良いです．
<div class="footnote-section">
<a>***</a>
\(\{A \in \C{Cat} \mid \t{\(\c{C}\)が任意の\(A\)-indexed diagramの極限を持つ．}\} \subset \C{Cat}\)
がpushoutとcoproductで閉じていれば，定義より主張が従う，というタイプの論法のこと．証明の本文で，主張を満たす\(A\)を"good"と呼ぶことに因む．
</div>
<ul>
<li>
各 \(A_i\) がgoodならば，\(\coprod_{i\in I} A_i\) もgood．
</li>
<li>
各 \(A_i\) がgoodならば，\(A_1 \coprod_{A_0} A_2\) もgood．
</li>
</ul>
(1)は，各図式\(F_i \colon A_i \to \c{C}\) の極限 \(\lim_{A_i} F_i\) を\(i\in I\)について直積すればよい．
<br>
(2)も，\(\o{Map}_{A_1\coprod_{A_0}A_2} \simeq \o{Map}_{A_1} \times_{\o{Map_{A_0}}} \o{Map_{A_2}}\)である<a><sup>*4</sup></a>ことに注意すると，各極限 \(\lim_{A_i}F_i\) のファイバー積をとればよいことがわかる．
</div>

<div class="footnote-section">
<a><sup>*4</sup></a>
一般に，圏 \(\lim_{j\in J}\c{C}_{j}\) に関して，
\[\o{Map}_{\lim_{j\in J} \c{C_j}} (\{x_j\}, \{y_j\}) \simeq \lim_{j\in J} \o{Map}_{\c{C}_j} (x_j, y_j)\]
が成り立ちます．これは complete Segal anima の定理から即座に従います．
</div>


### filtered

以下，\\(\kappa\\)は無限regular基数とする．

<div class="definition">
小圏 \(\c{C}\in\C{Cat}\) が <b>\(\kappa\)-filtered</b> であるとは，任意の\(\kappa\)-small category \(A\in\C{Cat}^{\kappa\t{-small}}\)と関手 \(f\colon A \to \c{C}\) に対し，\(\c{C}_{f/}\) が nonempty であることとする．
</div>

\\(\aleph_0\\)-filtered は，たんに<b>filtered</b> と呼ばれます．\\(\kappa\\)-filtered ならば filtered です．

<div class="lemma">
\(\pi_0\colon \C{An} \to \C{Set}\)およびその右随伴\(\C{Set}\hookrightarrow\C{An}\)
は，filtered colimitを保つ．
</div>

<div class="remark">
1-圏 \(I\) に対し，\(I\) が ∞-圏として \(\kappa\)-filtered であることと，古典的な1-圏論の意味で \(\kappa\)-filtered であることは同値．
</div>

<div class="example">
finite colimit を持つ小圏は，filtered．
</div>

<div class="remark">
filtered ならば <a href="oo-cat#cofinality">weakly contractible</a>．
</div>

次の事実はとても基本的ですが，これをmodel-independentに証明する議論を筆者は知りません．

<div class="theorem">
任意の \(\kappa\)-filtered category \(\c{C}\) に対し，\(\kappa\)-filtered poset \(I\) と 共終関手 \(f\colon I \to \c{C}\) が存在する．
<br><br>
もし，さらに \(\kappa'>\!\!>\kappa\)<a><sup>*5</sup></a> なる \(\kappa'\) によって \(\c{C}\)が \(\kappa'\)-small ならば，上のような \(I\) を \(\kappa'\)-small にとれる．

<div class="footnote-section">
<a><sup>*5</sup></a>
\(\beta^\alpha < \kappa'\) for any \(\alpha< \kappa\) and \(\beta <\kappa'\).
<br>
For example, the successor cardinal of \(2^\kappa\) (or \(\tau^\kappa\)) is \(>\!\!>\kappa\).
</div>
</div>

つまり，\\(\kappa\\)-filtered colimit に関する議論をする際には，\\(\kappa\\)-filtered posetで添字付けられた colimit を考えれば十分です．

\\(\kappa\\)-filtered colimit は，次のように \\(\kappa\\)-small limit と交換する側面を持ちます．

<div class="lemma">
\(\c{I}\) が \(\kappa\)-filtered のとき，関手
\[\colim_{i\in \c{I}} \; \colon \; \o{Fun}(\c{I},\C{An}) \to \C{An}\]
は \(\kappa\)-small limit を保つ．
</div>
<div class="proof">
fiber product, \(\kappa\)-small product を保つことを示せば良い．主張の\(\C{An}\)を\(\C{Set}\)に置き換えた主張はよく知られているので，以下の考察によって証明が完了することがわかる．
<ul>
<li>ホモトピー群 \(\pi_n \colon \C{An} \to \C{Set}\) は filtered colimit を保つ．</li>
<li>\(\pi_n \colon \C{An} \to \C{Set}\) は 任意の直積を保つ．</li>
<li>\(\pi_\ast \colon \C{An} \to \prod\C{Set}\) は ファイバー積をMayer--Vietoris長完全列に送る．</li>
</ul>
</div>

### sifted

（アニマの）filtered colimitは，（特に）有限直積を保つという著しい性質を持ちました．これに対し，一般の（モノイダル閉な）テンソル積を保つようなcolimitの種類を考えたいです．

ここでは，2変数のcolimitが対角の1変数colimitに帰着するような図式を考えます．イメージとしては，\\(\colim\_{j\in K} x\_j \otimes \colim\_{k\in K} x\_k \simeq \colim\_{K\times K} x\_j \otimes x\_k \leftarrow \colim\_{j\in K} x\_j \otimes x\_j\\)
という感じで，対角の共終性に着目します．

<div class="definition">
小圏 \(A\) が <b>sifted</b> であるとは，nonempty かつ \(\r{diag} \; \colon A \to A \times A\) が共終．
</div>

<div class="remark">
1-圏が，1-圏論においてsiftedであったとしても，この意味でsiftedであるとは限らない．coequalizerの図式が，典型的にsiftedにならない例である．
</div>

<div class="theorem">
\(\b{\Delta}^\r{op}\) is sifted.
</div>

正直，この定理の証明を記憶していませんが，Quillen's theorem A の直接の適用で示せると思います．

\\(\b{\Delta}^\r{op}\\)-indexed colimit は，歴史的な理由から geometric realization と呼ばれます．

<div class="theorem">
圏 \(\c{C}\) が，filtered colimit と geometric realization をもつとき，任意の sifted colimit を持つ．
<br>
関手 \(\c{C}\to\c{D}\) が，filtered colimit と geometric realization を保つとき，任意の sifted colimit を保つ．
</div>

### retracts

<div class="lemma">
\(\c{C}\) での retract 図式，すなわち三つ組\((f\colon c' \to c, \; r\colon c \to c', \; \varphi \colon rf \simeq \r{id})\) に対して，図式
\[\{c' \xrightarrow{f} \cdots c \xrightarrow{fr} c \xrightarrow{fr} c \xrightarrow{fr} c\} \; \colon \; \bb{N}^\triangleleft \to \C{C}\]
は limit cone．また，図式
\[\{c \xrightarrow{fr} c \xrightarrow{fr} c \xrightarrow{fr} \cdots \xrightarrow{f} c'\} \; \colon \; \bb{N}^\triangleright \to \C{C}\]
は colimit cone．
</div>

つまり \\(c'\\) は \\(c\\) の absolute<a><sup>*6</sup></a> (co)limit になります．このようなretract図式があるとき，\\(c'\\) は \\(c\\) に <b>retract する</b>/あるいは \\(c'\\) は \\(c\\) の <b>retract である</b>と言われます．

<div class="footnote-section">
<a><sup>*6</sup></a>
任意の関手で保たれる (co)limit のこと．
</div>

さまざまな概念・性質が，retractで閉じているという点が重要です．

<div class="lemma">
The full subcategory \(\{\t{isomorphisms}\} \subset \o{Fun}(\Delta^1, \c{C})\) is closed under retracts.
</div>

<div class="definition">
圏
\(\c{C}\)
における
<b>idempotent</b>
とは，endomorphism \(e\colon x\to x\) と \(h\colon e \simeq e^2 \in \o{Map}(x,x)\)，および \(\tau \colon he \simeq eh \in \o{Map}(e^2, e^3)\) の三つ組のこととする．
</div>

retract は idempotent を与えます．逆に，任意の idempotent が retract 図式から来るとき，圏を <b>idempotent complete</b> であると言います．

<div class="theorem">
\((e, h, \tau)\) を idempotent とする．
<br>
もし，\(y\coloneqq \colim\{x \xrightarrow{e} x \xrightarrow{e} \cdots\}\) が存在すれば，\(y\) は \(x\) に retract する．
<br>
同様に，\(\lim\{x \xleftarrow{e} x \xleftarrow{e} \cdots\}\) が存在すれば，\(x\) に retract する．
</div>

<div class="corollary">
sequential colimit をもつ圏は，idempotent complete．
</div>

<div class="remark">
1-圏論とは異なり，一般に，\(\infty\)-圏のidempotent splittingを，finite (co)limitで与えることはできない．KerodonやHTTに反例が載っている．
</div>

## Adjoining colimits

Full subcategory \\(\c{K} \subset \C{Cat}\\) を固定する．関手 \\(f\colon \c{D} \to \c{D}\\) が <b>\\(\c{K}\\)-indexed colimitsを保つ</b>とは，任意の \\(I\in\c{K}\\) と任意の colimit cone \\(\overline{p}\colon I^\triangleright \to \c{C}\\) に対して，\\(f\overline{p}\\) がcolimitになっていることとします．

### 余極限による生成

<div class="definition">
圏 \(\c{C}\) は \(\c{K}\)-indexed colimit を持つとし，\(\c{C}_0 \subset \c{C}\) を full subcategory とする．
<br>
<ul>
<li>
full subcategory \(\c{C}' \subset \c{C}\) が <b>\(\c{K}\)-colimitで閉じている</b>とは，\(\c{C}'\)が\(\c{K}\)-colimitを持ち，関手\(\c{C}' \hookrightarrow\c{C}\)がそれらを保つこととする．</li>
<li>
\(\c{C}_0\) が \(\c{C}'\) を<b>\(\c{K}\)-indexed colimitに関して生成する</b>とは，\(\c{C}'\) が\(\c{C}_0\)を含み\(\c{K}\)-colimitで閉じた最小の部分圏 (of \(\c{C}\)) であることと定義する．</li>
</ul>
</div>


### 完備化の存在定理

\\(\c{C}\\) を圏として，\\(\c{C}\\)の（\\(\c{K}\\)-indexed）colimit coneからなる集まり \\(\c{A}\\)を考える．

<div class="definition">
関手 \(j\colon \c{C} \to \c{P}^\c{K}_\c{A}(\c{C})\) が，\(\c{C}\) の \(\c{K}\)-cocompletion reltive to \(\c{A}\)であるとは，\(j\) が \(\c{A}\)に属するcolimitを保ち，かつ任意の\(\c{K}\)-cocompleteな圏 \(\c{E}\) に対して以下の関手が圏同値であることとする．
\[ (-)\circ j \; \colon \; \o{Fun}^\c{K}(\c{P}^\c{K}_\c{A}(\c{C}), \c{E}) \to \o{Fun}^\c{A}(\c{C}, \c{E})\]
ただし，各辺はそれぞれ，指定された図式のcolimitを保つ関手全体の圏．
</div>

only up to size issueで以下が言えます．

<div class="theorem">
一般に
\(\c{P}^\c{K}_\c{A} (\c{C})\) は存在し，\(j\) はfully faithfulになる．
</div>
<div class="proof">
構成の方法のみ述べる．
\(\o{Fun}(\c{C}^\r{op}, \Cat{An})\) のうち，Yoneda埋め込みが\(\c{K}\)-colimitに関して生成する部分圏を \(\c{P}^\c{K}(\c{C})\) とおく．これを局所化して，\(\c{P}^\c{K}_\c{A}(\c{C})\)を得ることができる．
</div>

<div class="remark">
\(\c{A}=\varnothing\), \(\c{K}=\C{Cat}\)のとき，\(\c{P}^\c{K}_\c{A}(\c{C})\)を \(\c{P}(\c{C})\) と書く．Cocompletion や completion などと呼ばれる．前層圏であるとは限らないということに注意．
</div>

### 例：animation

特に後半の内容とは関係ありませんが，載せておきます．

<div class="theorem">
Small category \(\c{C}\) が finite coproduct を持つとき，
\[ \c{P}^\t{sifted}(\c{C}) = \c{P}_\Sigma(\c{C}) = \o{Fun}^\Pi(\c{C}^\r{op},\C{An}) \]
ただし，\(\Sigma\) はfinite coproduct，\(\Pi\) はfinite productを表す．
</div>

1-圏から始めて，定理の結論のような圏を作ることを，nonabelian derived category や animation と言います．Finite product theory という1-圏的な代数構造から\\(\oo\\)-圏的モデルを与える議論です．

### 例：idempotent completion

これはもう少し基本的です．

<div class="theorem">
関手 \(f\colon \c C \to \c D\) について，以下同値．
<ul>
<li> \(f\) が，\(\c D \simeq \c P^{\r{idem}} (\c C)\) であることをexhibitする．
</li>
<li> \(f\) が fully faithful，\(\c D\) が idempotent complete，そして任意の \(c\in \c C\) が \(\c D\) の対象の retract になる．
</li>
</ul>
</div>


## Accessible categories

<div class="definition">
\(\c{D}\) は \(\kappa\)-filtered colimit を持つとする．<br>
対象 \(x\in\c{D}\) が <b>\(\kappa\)-compact</b> であるとは，関手 \(\o{Map}(x,-)\colon \c{D} \to \C{An}\) が \(\kappa\)-filtered colimit を保つこととする．
<br>
\(\c{D}^\kappa \subset \c{D}\) を，\(\kappa\)-compact対象で生成される full subcategory とする．
</div>

<div class="definition">
\( \o{Ind}_\kappa(\c{C}) \coloneqq \c{P}^\t{\(\kappa\)-filtered}(\c{C}) \) <br>
ind-completion などと呼ばれる．
</div>

<div class="theorem">
\(\c{C}\) を small とする．関手 \(f\colon \c{C} \to \c{D}\) について以下同値．
<ul>
<li>
\(f\) が，\(\c{D} = \o{Ind}_\kappa(\c{C})\) であることを exhibit する．
</li>
<li>
以下が成り立つ．
<ul>
<li>
\(\c{D}\) は \(\kappa\)-filtered colimit を持つ．
</li>
<li>
\(f\) は fully faithful．
</li>
<li>
\(f\) の像は，\(\c{D}^\kappa\) に含まれる．
</li>
<li>
像 \(f\c{C}\) が \(\c{D}\) を \(\kappa\)-filtered colimit で生成する．
</li>
</ul>
</li>
</ul>
<br>
とくに，\(j\colon \c{C} \to \o{Ind}_\kappa\c{C}\) は fully faithful かつ dense．また，関手 \(\o{Ind}_\kappa(\c{C})\ \to \c{P}(\c{C}) = \C{LFib}(\c{C})\) は fully faithful かつ像は以下に一致する．
\[ \{ (\c{E} \to \c{C}) \in \C{LFib}(\c{C}) \mid \c{E} \t{ is \(\kappa\)-filtered.} \} \]
<div class="footnote-section">
<b>参考：</b> HTT §5.3.5.
</div>
</div>

<div class="remark">
presheaf \(X\colon \c{C}^\r{op} \to \C{An}\) に対応する left fibration は，次の"category of elements"で与えられる．
\[ \c{C}_{/X} \coloneqq \c{C} \times _{\c{P}(\c{C})} \c{P}(\c{C})_{/X}\]
</div>

定理の\\(\c{C}\\)の候補は，\\(\c{D}\\)から内在的に与えることが可能です．実際，\\(\c D \simeq \o{Ind}\_\kappa(\c D^\kappa)\\) であることが，やはり定理からわかります．
<div class="corollary">
\((\o{Ind}_\kappa \c{C})^\kappa\) is an idempotent completion of \(\c{C}\). In particular, \((\o{Ind}_\kappa \c{C})^\kappa\) is small since \(\c{C}\) is small.
</div>

もともと\\(\c{C}\\) が \\(\kappa\\)-small colimit を持っている場合は，次のような \\(\o{Ind}\_\kappa\\) 標準形を証明できます．

<div class="example">
\(\c{C}\) が \(\kappa\)-small colimit を持つとき，
\[\o{Ind}_\kappa(\c{C}) = \o{Fun}^{\t{\(\kappa\)-lex}}(\c{C}^\r{op}, \C{An}) \]
ただし，右辺は，\(\kappa\)-small limit を保つ関手の圏．
</div>

ただし \\(\kappa\\) が \\(\c{C}\\) のサイズよりも大きい場合は，\\(\o{Ind}_\kappa\\) は次のように退化します．

<div class="example">
\(\kappa < \tau\)で，\(\c{C}\) が \(\tau\)-small locally \(\kappa\)-small のとき，\(j\colon \c{C} \to \o{Ind}_\tau(\c{C})\) は idempotent completion．
</div>

accessible の定義に入ります．以下で，\\(\kappa\\)を固定して，\\(\kappa\\)-accessible 圏の定義をそのまま採用することもできます．

<div class="definition">
A category is <b>accessible</b> if it is equivalent to \(\o{Ind}_\kappa(\c{C}_0)\) for some small category \(\c{C}_0\) and a regular cardinal \(\kappa\).
</div>

したがって先の定理は，accessible category の recognition 定理だと思うことができます．特に次の例を示すことができます．
<div class="example">
小圏 \(\c{C}_0\) に対し，
\(\o{PSh}(\c C_0)\) は \(\kappa\)-accessible．
</div>

以下のように，\\(\kappa\\) はジェネリックに大きく取り替えることができます．
<div class="lemma">
\(\tau>\!\!>\kappa\) ならば，任意の \(\kappa\)-accessible が \(\tau\)-accessible．
</div>


<div class="definition">
A functor between \(\kappa\)-accessible categories is said to be <b>\(\kappa\)-accessible</b> if it preserves \(\kappa\)-filtered colimits and \(\kappa\)-compact objects.
<br>
A functor between accessible categories is <b>accessible</b> if it is preserves \(\kappa\)-filtered colimits for some \(\kappa\)．
</div>

full でない部分圏 \\(\C{Acc}\_\kappa \subset \Cat{Cat}\\) および \\(\C{Acc} \subset \Cat{Cat}\\) を上の定義に従って定義します．


accessible圏においては，任意の対象が必ず何かしらの\\(\tau\\)によって\\(\tau\\)-compactになるということを観察できます．実際，任意の \\(X\in\o{Ind}\_\kappa(\c C^\kappa)\\) は \\(\kappa\\)-filtered colimit \\(X = \colim\_{c\in \c C^\kappa\_{/X}} c\\) として書けるので，\\(\c C^\kappa\_{/X}\\) のサイズなどを使って \\(X\\) のコンパクト性をboundできます．とくに，\\(\C{Acc} = \bigcup\_\kappa \C{Acc}\_\kappa\\) が成立することに注意します．

<div class="theorem">
\(\kappa\)-compact objects をとる関手
\[(-)^\kappa \colon \; \C{Acc}_\kappa \to \Cat{Cat}\]
は monadic．とくに \(\C{Acc}_\kappa\) は limit，colimit をもつ．
<br>
忘却関手
\[\C{Acc} \hookrightarrow \Cat{Cat}\]
は limit を create し，また任意の small category \(A\) による \(\o{Fun}(A, -)\) でも閉じている．
</div>

特に accessible category のスライス圏などは再び accessible であるということなどを言っています．

### Digression: accessible前層圏

一般に，smallでない圏の前層圏 \\(\o{PSh}(\c{C})\\) は，特に普遍性を持ちませんが，coaccessible圏については以下の変種が知られています．

<div class="theorem">
\(\c{C}^\r{op}\)がaccessibleのとき，米田埋め込み \(j\colon \c{C} \to \o{Fun}_\r{acc}(\c{C}^\r{op}, \C{An})\) がcocompletionを与える．
</div>

<div class="footnote-section">
<b>参考:</b>
Appendix A in <br>
Lars Hesselholt, Piotr Pstragowski, <i>Dirac geometry II</i>, Forum Math. Sigma 12 (2024), Paper No. e27, 93 pp. <a href="https://mathscinet.ams.org/mathscinet/article?mr=4710717">MR4710717</a>
</div>


### 補遺

<div class="lemma">
\(\tau>\!\!>\kappa\) かつ \(\c C\) が \(\tau\)-small \(\kappa\)-accessible ならば，\(\c C^\tau \subset \c C\) は \(\kappa\)-small limit で閉じている．
</div>



## Presentable categories

### 定義

<div class="definition">
colimit を持つ accessible category を <b>presentable</b> category と呼ぶ．
</div>

\\(\aleph_0\\)-accessible かつ colimit完備の場合，<b>compactly generated</b> と言われます．より一般に，<b>\\(\kappa\\)-compactly generated</b>という用語もあります．

<div class="lemma">
\(\c C\) が \(\kappa\)-compactly generated のとき，\(\c{C}^\kappa\) は small であり，\(\c C\) は \(\c P(\c C^\kappa)\) の \(\kappa\)-accessible localization になる．
<br>
したがって，presentable ならば locally small かつ limit をもつ．
<br>
また，\(\c{C}^\kappa \subset \c C\) は \(\kappa\)-small colimit で閉じる．
</div>
<div class="proof">
\(\kappa\)-accessible なので，restricted Yoneda 埋め込み \(\c C \to \c P(\c C^\kappa)\) は fully faithful．しかもこれはby definitionで \(\kappa\)-filtered colimitを保つ．また，colimitを持つことを仮定しているので，左随伴\(\c P(\c C^\kappa) \to \c C\)が存在する．
</div>

<div class="remark">
逆に，前層圏の accessible localization ならば presentable である．
</div>


### 随伴関手定理

まず，（余）前層の表現可能性を与えておきます．

<div class="lemma">
\(\c{C}\) を presentable とする．
<ul>
<li>前層 \(X\colon\c C^\r{op} \to \C{An}\) が極限を保つとき，representable．</li>
<li>余前層 \(F \colon \c C \to \C{An}\) が limit を保ち，accessible のとき，corepresentable．</li>
</ul>
<br>
とくに，\(\c C \simeq \o{Fun}^\lim (\c C^\r{op}, \C{An})\)，および \(\c C \simeq \o{Fun}^\lim_\r{acc}(\c C, \C{An})^\r{op}\) が成り立つ．
</div>

これにより以下を得ます．

<div class="theorem">
<ul>
<li> \(\c E\) が colimit をもつとする．presentable圏から \(\c E\) への colimit-preserving functor は，左随伴である．</li>
<li> \(\c E\) が limit をもつとする．presentable圏から \(\c E\) への limit-preserving かつ accessible な関手は，左随伴をもつ．</li>
</ul>
</div>

### Lurie テンソル積

Presentable圏の間のDeligne型テンソル積が存在します．分野によっては，Lurieテンソル積と呼ぶ人が多いです．私はこの呼称に慣れていなくて，たんに"テンソル積"と呼ぶことがあります．

<div class="definition">
\(\C{Pr}^\r{L} \subset \Cat{Cat}\) を，presentable category とその間の左随伴関手のなす部分圏とする．
<br>
また，右随伴関手を代わりに考えたものを \(\C{Pr}^\r{R}\subset \Cat{Cat}\) とおく．
</div>

以下の定理により\\(\C{Pr}^\r{L}\\)での極限・余極限を同定できます．

<div class="theorem">
関手の随伴をとる対応が圏同値 \(\C{Pr}^\r{L} \simeq \C{Pr}^{\r{R},\r{op}}\) を与える．
<br>
忘却関手 \(\C{Pr}^\r{L} \to \Cat{Cat}\) はlimitをcreateする．
<br>
忘却関手 \(\C{Pr}^{\r{L},\r{op}} \simeq \C{Pr}^\r{R} \to \Cat{Cat}\) はlimitをcreateする．
</div>

<div class="lemma">
\(\o{Fun}^\r{L}(\c C_1, \cdots, \c C_n ; \c D) \subset \o{Fun}(\c C_1 \times \cdots \times \c C_n ; \c D)\)
を，各変数の colimit を保つ関手のなす full subcategory とする．
<br>
このとき，\(\o{Fun}^\r{L}(\c C_1, \cdots, \c C_n ; \c D)^\simeq\) を multioperator とするようなオペラッド \((\C{Pr}^\r{L})^\otimes\) が存在する．
<br>
また，各圏がpresentableならば，\(\o{Fun}^\r{L}(\c C_1, \cdots, \c C_n ; \c D)\)はpresentable．
</div>

<div class="theorem">
<ul>
<li>
\(\o{Fun}^\r{L}(-,-)\colon \C{Pr}^{\r{L, op}} \times \C{Pr}^\r{L} \to \C{Pr}^\r{L}\) は左随伴 \[(-)\otimes(-) \colon \C{Pr}^\r{L} \times \C{Pr}^\r{L} \to \C{Pr}^\r{L}\] をもつ．とくに，オペラッド \((\C{Pr}^\r{L})^\otimes\) は対称モノイダル圏になる．
</li>
<li>
関手 \(\C{PSh}(-)\colon \C{Cat} \to \C{Pr}^\r{L}\) は対称モノイダル構造をもつ．忘却 \(\C{Pr}^\r{L} \to \Cat{Cat}\) はlax対称モノイダルの構造をもつ．これにより誘導される関手
\[ \o{CAlg}(\C{Pr}^\r{L}) \to \C{Pr}^\r{L} \times_{\Cat{Cat}} \o{CMon}(\Cat{Cat}) \]
は fully faithful であり，像は closed symmetric monoidal になるもの全体に一致する．
</li>
</ul>
</div>

<!--テンソル積の構成を述べる．-->



## 💬 {#comments}