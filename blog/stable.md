---
layout: post
title: "現代安定ホモトピー論入門"
date: 2025-03-30
comments: true
lang: ja
---

以下の記事の内容を一部踏まえています：
<ul>
    <li><a href="/blog/oo-cat">∞-圏入門1</a> </li>
    <li><a href="/blog/pr">∞-圏入門2</a> </li>
    <li><a href="/blog/operad">∞-圏入門3</a> </li>
</ul>
---
<div style="text-align: right;">
  <a href="../ja/">日本語Top</a> |
  <a href="../">English</a>
</div>

* 
{:toc}


### 記号

- ハイフン $$(-)\colon$$ 関手性
- 下付き $$\bullet$$ $$\colon$$ simplicial関手性または導来圏の対象
- $$\ast$$ $$\colon$$ $$\bb{Z}$$-次数付け
- $$\star$$ $$\colon$$ $$\bb{Z}$$-フィルトレーション
- $$\C{An}$$ $$\colon$$ アニマ
- $$\C{An}^\r{fin}$$ $$\colon$$ アニマの圏の(full)部分圏であって，（\\(\ast\in\cat{An}\\)を含み）finite colimitで閉じているもののうち最小のもの
- $$\C{Cat}$$, $$\Cat{Cat}$$ $$\colon$$ 小圏と圏
- $$\C{Pr}^\r{L}$$ $$\colon$$ 表示可能圏
- $$(\C{Pr}^\r{L}, \otimes, \C{An})$$ $$\colon$$ 表示可能圏のなす対称モノイダル圏


## Introduction

まずどのようにしてanimaが歴史的に興味を持たれていたのかを復習します．次の定理はKan&ndash;Quillenの定理と呼ばれています．

<div class="footnote-section">
<b>Definition.</b> <br>
<b>ホモトピー不変量</b>とは，位相空間を入力にもつ(共変/反変)関手であって，\(\pi_\ast\)-同型写像を同型に写すものを指す．
</div>

>
(共変/反変)ホモトピー不変量と，animaの圏からの(共変/反変)関手とが，一対一に対応する．
{: .theorem}


<div>
以下を満たす\(\bb{Z}\cup\{\oo\}\)-値ホモトピー不変量が一意に存在する．
<ul>
<li> \(\chi(\ast)=1\), \(\chi(\varnothing)=0\)</li>
<li> \(\chi(X \sqcup_A Y) = \chi(X) + \chi(Y) - \chi(A)\) ただし左辺はアニマのpushout (あるいは位相空間のhomotopy pushout)</li>
</ul>
</div>{: .example}

実際，後者の性質が，\\(\chi(X)\\)がcellの数の交代和であることを特徴づけ，前者の性質が全体の値をnormalizeします．


後者の交代和的性質を精密化したものとして，次の形の切除定理/Mayer&ndash;Vietoris定理がありました．

<div class="theorem">
\[H_\bullet^\r{sing}(A) = H_\bullet^\r{sing}(X) \times_{H_\bullet^\r{sing}(X \sqcup_A Y)} H_\bullet^\r{sing}(Y)\]
</div>

<div class="footnote-section">
\(H_\bullet(X)\)を，\(\cat{An}\)のアーベル群対象とみなしている．したがって定理のpullbackは\(\cat{An}\)でのpullbackに一致する．
<br>
アニマのpullbackは，ホモトピー群にMayer–Vietoris系列を導くので，これがオイラー標数の交代和公式を圏化していることがわかる．
</div>

この切除と同様の振る舞いをするホモトピー不変量<sup><a>1</a></sup>が多く発見されたというのが，一つの重要な契機となりました．

<div class="footnote-section">
<sup><a>1</a></sup> しかもnonconnectiveな！（安定ホモトピー射の理論だけだったら，prestable圏論であるから，安定圏論の必然性はなく，むしろ nonconnective理論や Spanier–Whitehead双対性のほうに，安定ホモトピー論の核心があるということが強調されるべきである．）
</div>

さて，特異ホモロジーを一般化するホモトピー不変量を概念化する前に，少し状況を整理します．

まず，オイラー標数や特異ホモロジーには，finitaryな振る舞い（つまりfinitely dominated空間に対する値にその本質が集中する性質）が観察されます．このことから，finite anima \\(\C{An}^\r{fin}\\)に不変量の定義域を制限することが適切になります．あるいは，\\(\C{An}\\)からの関手性に，filtered colimitとの交換を課すと言っても良いです．

さらに，もう少し本質的なことは，可換な「足し算」の構造がホモロジー(代数)では重要であったという点です．この種の可換な代数構造には，active射とinert射に関する関手性が必要であるというのが，[対称モノイダル圏/\\(\infty\\)-オペラッド](operad)の出発点でした．いま，通常の（有限）アニマに対する関手性のみでは，active射が存在するもののinert射が存在していません．したがって，「足し算」込みの切除不変量を議論するためには，基点付きアニマに対する関手性が必要です．
<br>      
技術的に重要なことは，基点を付けても「切除」の概念が変化しないということです：

<div class="lemma">
\(c\in\c{C}\)に対し，関手\(\c{C}_{/c} \to \c{C}\)はweakly contractible colimitをcreateする．
とくに，忘却
\(\C{An}_\ast = \cat{An}_{\ast/} \to \cat{An}\)
はpushoutを保つ．
</div>

<div class="definition">
<b>ホモロジー理論</b><sup><a>2</a></sup>とは，\(\cat{An}_\ast^\r{fin}\)からの（\(\cat{An}\)への<sup><a>3</a></sup>）reduced<sup><a>4</a></sup>関手であって，余カルテシアン図式をカルテシアン図式に写すものである．
</div>

<div class="footnote-section">
<sup><a>2</a></sup>
一般ホモロジーと呼ばれてもいる．
<br>
<sup><a>3</a></sup>
ターゲットの圏をアニマとしたことは恣意的であるが，universal choiceであるという点と，ホモトピー群Mayer–Vietoris系列による正当化とがある．
<br>
<sup><a>4</a></sup>
始対象を終対象に送る．
</div>





<div class="definition">
圏 \(\C{Sp}\)を次で定義する．
\[ \C{Sp} \coloneqq \o{Fun}^{\r{red, exci}}(\C{An}_\ast^\r{fin}, \C{An})\]
</div>


## 基本定理

安定ホモトピー論の動機がわかったら，以下を理解することが次のステップになります．

<div>
関手 \(\Sigma^\infty_+\colon \C{An} \to \C{Sp}\) は次の普遍性を満たす．
<ul>
<li> 任意の \(\c{E}\in\Cat{Cat}_\r{st}^\r{L}\)に対し，\(\o{Fun}^\r{L}(\C{Sp}, \c{E}) \to \o{Fun}^\r{L}(\C{An}, \c{E}) = \c{E} \) が圏同値．
</li>
</ul>
また，以下が成立する．
<ul>
<li> \(\C{Sp} \simeq \o{colim}^{\C{Pr}^\r{L}}\left\{\C{An}\xrightarrow{\Sigma} \C{An}\xrightarrow{\Sigma} \C{An} \cdots\right\}\)．
</li>
<li> \(\C{Sp}\simeq \o{lim}\left\{\C{An}_\ast\xleftarrow{\Omega}\C{An}_\ast\xleftarrow{\Omega}\cdots\right\}\)．
</li>
<li> 関手 \(\Sigma^\infty_+\colon \C{An} \to \C{Sp}\) は \(\cat{Pr^\r{L}}\)のidempotent \(\bb{E}_0\)-algebraになる．とくに，\(\Sigma^\infty_+\colon \C{An} \to \C{Sp}\)を対称モノイダルに持ち上げるような \(\C{Sp}\)へのpresentably symmetric monoidal構造が一意に存在する．
</li>
<li> \(\C{Sp}_{\ge0} \subset \C{Sp}\)を，colimitに関して\(\bb{S}\)で生成される部分圏とするとき，これがモノイダル t-構造を与える．とくに，\(\bb{S}\in\C{Sp}_{\ge0}\)かつ，\(\C{Sp}_{\ge0}\otimes\C{Sp}_{\ge0}\)が \(\C{Sp}_{\ge0}\)に含まれる．
</li>
<li> 任意のfinite animaが，\(\C{Sp}\)-ambidextrousになる．任意の有限(余)極限が，\(\C{Sp}\)上 absoluteになる．
</li>
</ul>
<div class="footnote-section"> Jacob Lurie, <i>Higher algebra</i>, 2017, <a href="https://www.math.ias.edu/~lurie/papers/HA.pdf">https://www.math.ias.edu/~lurie/papers/HA.pdf</a>.</div>
</div>{: .theorem}

以降の内容は，この定理の主張と証明を説明することに専念します．

<div class="definition">
定理の \(\C{Sp}\in\o{CAlg}(\C{Pr}^\r{L})\) を「スペクトラムのなす安定無限圏」と呼ぶ．
</div>



## Stability

安定\\(\oo\\)-圏とは，安定ホモトピー論と導来圏論の両方を包摂する圏論です．スペクトラム/一般ホモロジー理論の総体としての\\(\oo\\)-圏 \\(\C{Sp}\\)のもつ普遍性を理解するために，安定性を備えた圏の全体・一般性について考察する必要があります．

導来関手の------半完全性から完全性を導来する------理論の本質に，(半)完全性の概念の取り替えがありました．言い換えれば，導来圏の本質には，<i>半完全列が常に完全列になる</i>という圏論的性質があったと考えることができます．

また，一般ホモロジー理論の重要な側面の一つとして，可換な和構造の存在に言及しました．この点において，安定\\(\oo\\)-圏が古典的なアーベル圏に並列して語られることがあるというのも，不思議ではないです．

アーベル圏の一つの捉え方として，
- 単射の余核からもう一度核をとると，元に戻る
- 全射の核からもう一度余核をとると，元に戻る

という著しい性質がありました．そして同時に，こうした「単射」や「全射」といった制約こそが，関手の完全性を阻害する要因だったと言えます．

<div class="definition">
零対象を持つ圏が<b>安定</b>であるとは，可換図式
\[\xymatrix{x \ar[r] \ar[d] & y \ar[d] \\ 0 \ar[r] & z}\]
がカルテシアンであることと余カルテシアンであることが同値であることをいう．
</div>

このように，任意の写像の核（ファイバー）が余核（コファイバー）の情報を復元し，その逆も然りである------というのが，安定性の考え方です．

当然ですが，truncatedな圏論ではこの安定性概念は存在しません：
<div class="remark">
安定 \((n,1)\)-圏（\(n < \infty\)）は，零しかない．
</div>



<div class="lemma">
零対象を持つ圏について以下同値．
<ul>
<li> \(\c{C}\)は安定．
</li>
<li> 
</li>
</ul>
</div>


## Idempotent algebras



## Monoidal t-structures


## 💬