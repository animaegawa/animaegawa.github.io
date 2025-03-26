---
layout: post
title: "無限圏論の基本事項まとめ"
date: 2025-03-26
keywords: ["∞-圏", "\\infty-圏", "表示可能無限圏", "cocartesian fibration", "アニマ"]
comments: true
lang: ja
---

ある方に勧められて日本語の記事を書いておくことにしました．

この分野の勉強法を聞かれることも少なくないのですが，正直返答に困りますし，他人に聞くようなことでもないと思います．それでも，日本語話者がこの分野を理解する際のハードルを少しでも下げることに，このノートがいくらかでも貢献できれば幸いです．

---

* Table of Contents
{:toc}

## Intro

通常の圏論では，「\\(\C{Set}\\) の圏対象」と「圏」には違いがあるという問題がありました．

これは「圏同型」と「圏同値」の違いとして強調されることが多いですが，具体例として，群を亜群だと思った場合の関手全体がcharacter varietyであり，群準同型全体の集合と厳密には異なるというものがあります．より深刻な問題として，「圏のなす圏」を「圏対象のなす圏」に埋め込むことができないと言うこともできます．

この問題を解消する最小のソリューションとして，\\(\oo\\)-圏論を挙げることができます．このとき，「集合」に取って代わるものが「anima」と呼ばれ，本ウェブサイトのurlにも採用しました．

このノートでは，\\(\oo\\)-圏やアニマの定義とその他基本的な定理を最短で紹介することを目指します．


### 記号

(無限)圏の固有名詞は``\mathsf``, 一般の(無限)圏を表す記号は``\mathcal``, ただし関手圏のように演算子としての側面があるものは``\operatorname``で書かれます．たとえば，（有限直積をもつ1-圏に対し）\\(\o{Cat}(\c{C})\\)で「\\(\c{C}\\)における圏対象」のなす1-圏を表すことにします．ちなみに\\(\c{C}\\)が\\(\oo\\)-圏の場合には，Segal objectとして圏対象という概念が定義されます．

また，ハイフン $$(-)$$ は（無限圏的）関手性を，下つきの弾丸 $$X_\bullet$$ は simplicial functoriality，上付き $$Y^\bullet$$ は cosimplicial functoriality を表します．


### 注意

通常の圏論における基本的な用語は知っていると想定しています．ただしホモトピー論の知識は必要ないです．またモデル圏を使用はむしろ理解の妨げになる可能性がある---実際，その技術的必要性は年々薄れつつある---ので推奨しません．

すでに基本理論が完成してから何年も経っている分野ではあるので，時代と共に技術詳細が少しづつ変化していることを念頭に置いていただければと思います．たとえば，「アニマ」と「Kan複体」を安易に等式で結ばないところにイマっぽい感性があったりします．

さて，というのを踏まえた上で，もう一つ共有したいことがあります．\\(\oo\\)-圏やその間の関手というのは，決して手作業で構成できるものではない[<sup>1</sup>](#note0)という点です．このことを肝に銘じておくと，理解や学習意欲につながると思います．実際，いくつかの場面では，集合論的な手作りを諦めざるを得ない局面が現れると思います．それでもなお，普遍性による構成だけは常に確保されており，そしてまさにそのような構成こそが，真に「カノニカル」なのであるという理解が必要になります．各種の随伴関手定理はその象徴例になります．

<div id="note0" class="footnote-section">
<sup><a>1</a></sup> そうすることが現実的ではない
</div>


### Disclaimer

すべての証明は，[Kerodon](https://kerodon.net)
または *Higher Topos Theory* にありますが，今のところ，適切な参照を作ってない程には怠惰です．

このポストは，過去の勉強ノートのごく一部を文字起こししたものなので，いつか続編も書くつもりでいます．


## 圏の定義


### qCat

> 
- \\(\C{sSet}\colon\\) 単体的集合のなす圏
- \\(\C{qCat} \subset \C{sSet} \colon\\) quasicategoryのなすfull subcategory
- Quasicategoryの間の射\\(f \colon \c{C} \to \c{D}\\)が*isofibration*であることの定義：[Kerodon, 01ES](https://kerodon.net/tag/01ES)
- oppositeなどの定義：[003N](https://kerodon.net/tag/003N)
>
Quasicategoryの間の写像 \\(f\colon\c{C}\to\c{D}\\)を**関手**と呼ぶ．quasicategory \\(\c{C}\\)の0-simplexを **object**と呼び \\(x\in\c{C}\\)と書く．同様に1-simplexは arrow や edge，写像，射などと呼ぶ．quasicategory \\(\c{C}\\)のarrowが**同型射**であることの定義などができる．
{: .definition}

quasicategoryやisofibrationの定義を理解する必要はないです．定義が存在しているという事実以上に重要な点はないと考えています．そもそも，イントロで述べた意味で"正しい"圏論が存在してはいけない理由が私には理解できませんし，この段階での定義や後に続く補題の証明に数学的関心を向けるのは，本来の趣旨から外れるように思います．

一応，まだ「\\(\oo\\)-圏」という言葉を使っていないのには[若干の意図](#cat)があります．

>
- Nerve functor \\(N\colon \o{Cat}(\C{Set})\to \\C{sSet}\\)は \\(\C{qCat}\\)に値をとり，左随伴 \\(h\colon\C{qCat}\to\o{Cat}(\C{Set})\\)が存在する．
  - \\(h\colon\C{qCat}\to\o{Cat}(\C{Set})\\) は有限直積を保つ．
  - 随伴の counit \\(\c{C} \to Nh\c{C}\\) はいつも isofibrationになる．
- \\(\C{qCat}\subset\C{sSet}\\)は以下の操作で閉じる．
  - \\(A\in \C{sSet}\\)による power： \\(\o{Fun}(A,-)\colon\C{qCat} \to \C{qCat}\\)
  - 直積，coproduct
  - isofibrationに沿った basechange
  - (relative) join \\((-)\star_{(-)} (-)\\): [024C](https://kerodon.net/tag/0241)
  - filtered colimit
- \\(\c{C}\in\C{qCat}\\)と \\(\C{sSet}\\)の単射 \\(A \to B\\)に対して，写像 \\(\o{Fun}(B,\c{C})\to\o{Fun}(A,\c{C})\\)はisofibration．
{: .lemma}

> 
とくに，\\(\C{qCat}\\)はカルテシアン閉．
{: .remark}

最重要概念を二、三導入します．

>
関手 \\(h\colon\C{qCat}\to\o{Cat}(\C{Set})\\) が有限直積を保つので，strict 2-category \\(h_2\C{qCat}\\) を，\\(h\o{Fun}(-,-)\\) をhomとするものとして定義する．
- 関手 \\(f\colon\c{C}\to\c{D}\\) が**圏同値**であるとは，(strict 2-category) \\(h_2\C{qCat}\\)でequivalenceであること．
- 関手 \\(f\colon\c{C}\to\c{D}\\) が**左随伴関手**であるとは，(strict 2-category) \\(h_2\C{qCat}\\)で左随伴関手であること．より正確には：
    - \\(\epsilon \colon fg \to \r{id}\\) が **\\(g\colon\c{D}\to\c{C}\\) が \\(f\\) の右随伴であることをexhibitする** とは，(\\(\dots\\)) が存在して (\\(\dots\\)) が\\(h_2\C{qCat}\\)で可換であること．
- **右随伴関手**なども同様．
{: .definition}

しばらくの目標としては，圏同値 \\(f\\) の逆関手 \\(f^{-1}\\) が強い意味で一意であること，また，一般に \\(f\\) から(partialで良い)右随伴 \\(f^\r{R}\\) の構成が強い意味で canonical であること，を理解するというものになると思います．米田的な原理が存在するということだと言い換えても良いです．


色々な構成が圏同値不変になるということが，(quasicategoryのレベルでは)重要になります．たとえば，quasicategoryからなる図式 \\(\bullet\to\bullet\leftarrow\bullet\\)は片方がisofibrationであればpullbackもquasicategoryになるわけですが，この場合さらに圏同値不変になります：

<div>
ファイバー積をとる関手
\[
\left\{\begin{CD} @.  \bullet \\ @. @V\t{isofib}VV \\ \bullet @>>> \bullet \end{CD} \quad \t{(in }\C{qCat}\t{)}\right\} \subset \o{Fun}(\{\cdot\to\cdot\leftarrow\cdot\}, \C{qCat}) \xrightarrow[\qquad\qquad]{\o{lim}} \C{qCat}
\]
は圏同値からなる自然変換を圏同値に送る．
</div>
{: .lemma}

たとえば，$$\{0\}\to \Delta^1 \leftarrow \{1\}$$はどちらも単射なので，\\(\c{C} \leftarrow\o{Fun}(\Delta^1,\c{C})\to\c{C}\\)はどちらもisofibrationになり，任意のbasechangeが\\(\C{qCat}\\)で存在します．


> 
関手 \\(\c{C}\to\c{B}\leftarrow\c{D}\\)に対して，**lax pullback** \\[ \c{C}\vec{\times}_{B}\c{D} \\]を 
>
\\[ \c{C}\times_{\c{B}} \o{Fun}(\Delta^1,\c{B}){\times}_{\c{B}}\c{D} \\]
で定義する．
{: .definition}

>
- $$x\in\c{C}$$ 上のスライス圏  $$\c{C}_{/x} := \c{C} \vec{\times}_\c{C} \{x\}$$
- $$p\colon A \to \c{C}$$ 上の cone の圏 $$\c{C}_{/p} := \c{C} \vec{\times}_{\o{Fun}(A,\c{C})} \{p\}$$
{: .example}

### Fully faithful

>
- \\(x,y\in\c{C}\\)に対し，$$\o{Map}(x,y):= \{x\}\vec{\times}_\c{C}\{y\}$$ は Kan complexになる．
- 関手 $$f\colon \c{C} \to \c{D}$$ に対して以下が同値．
  - $$f$$ が圏同値．
  - $$f$$ が essentially surjective[*](#note1) かつ fully faithfull[**](#note2)．
{: .theorem}

定理の証明は，Whitehead定理の類似だと思うと，難しくはないです．simplexの次元に関して帰納的に逆写像を作る議論のことです．


<div id="note1" class="footnote-section">
[<a href="note1">*</a>] \(h\c{C}\to h\c{D}\) がessentially surjective
</div>

<div id="note2" class="footnote-section">
[<a href="note1">**</a>] 各 \(\o{Map}(x,y)\to\o{Map}(fx,fy)\) が圏同値
</div>


したがって full subcategoryは，1圏レベルの full subcategory から引き戻して作られます：

>
$$\c{C}\in\C{qCat}$$ とその対象からなるある集合 $$S$$ に対し，**$$S$$ で生成される full subcategory** を，(isofibration) $$\c{C} \to Nh\c{C}$$ の適切なbasechangeによって定義する．
{: .definition}

つまり，full subcategoryを構成するというのは，常に易しい操作であるということです．実際，full (or replete) subcategoryは，「$$\oo$$-圏のなす$$\oo$$-圏」においても*単射になる*という特徴があるので，その普遍性は命題のレベルに帰着できるという重要なポイントがあります．

>
$$f\colon\c{C}\to\c{D}$$ が fully faithful のとき，$$\c{C}$$ は $$f$$の essential image と圏同値．
{: .corollary}

full subの重要例として，localizationというクラスがあります．ここではとりあえず定義をすることしかできませんが．

>
- full subcategory が **reflective** subcategory であるとは，埋込の左随伴が存在すること．
- fully faithful functor の 左随伴になっているものを，**(Bousfield) localization** と呼ぶ．
{: .definition}




### Cartesian fibration


随伴を定義した直後に，「\\(f^\r{R}\\) の構成がカノニカル」というスポをしました．この事実の証明に，cocartesian fibration という概念を使います．つまり，「各点」的な universal property を，「関手的な一意性」に持ち上げるテクニックが，全てこの節に集約されています．

<div>
関手
\(p\colon\c{C}\to\c{D}\)
を固定する．
\(f\colon\Delta^1\to\c{C}; 0\mapsto x\)
が <b>\(p\)-cocartesian arrow</b>
であるとは，(\(\C{qCat}\)の)可換図式

\begin{CD}
  \c{C}_{f/} @>>> \c{C}_{x/} \\
  @VpVV @VVpV \\
  \c{D}_{pf/} @>>\t{isofib}> \c{D}_{px/} \\
\end{CD}

が誘導する関手
\(\c{C}_{f/} \to \c{C}_{x/}\times_{\c{D}_{px/}} \c{D}_{pf/}\)
が圏同値であるときを言う．
</div>{: .definition}

>
$$\c{D}$$ がquasicategoryであることを仮定しない場合の定義 [01TF](https://kerodon.net/tag/01TF) もあり，あった方が便利かもしれない．
{: .remark}

>
$$p\colon\c{C}\to\c{D}$$
が **cocartesian fibration**
であるとは，
- isofibrationであり，
- $$\c{D}$$ での $$g\colon p(c)\to d$$ という形の任意の矢印に対し， $$p$$-cocartesian lift[***](#note3) $$f\colon c \to c'$$ （in $$\c{C}$$）が存在するときを言う．
{: .definition}

<div id="note3" class="footnote-section">
[<a>***</a>] \(pf = g\) かつ \(f\) が\(p\)-cocart.という意味．
</div>

$$\c{D}$$ が一点の場合，条件は特になく，任意の quasicategory $$\c{C}$$ が一点上の cocartesian fibration であるとみなせます．

<div id="reljoin">
関手 \(\c{C} \to \c{D}\) に対して，relative join
\[\c{C} \star_{\c{D}} \c{D} \to \Delta^1 \]
は cocartesian fibration．
また，\(\Delta^1\)上の cocartesian fibrationは必ずこの形と圏同値になる．
</div>{: .example}

>
$$p\colon \c{C} \to \c{B}$$
が cocart. fibration
のとき，
$$p\circ(-) \colon \o{Fun}(A, \c{C}) \to \o{Fun}(A, \c{B})$$
もまた
cocartesian fibration
であり，
>
$$F\colon \Delta^1 \times A \to \c{C}$$
が
$$p\circ({-})$$-cocartesian
なのは，各点 $$a\in A$$ で
$$F_a \colon \Delta^1 \to \c{C}$$
が $$p$$-cocartesian であるとき，かつその時に限る．
{: .lemma}

これは非常に重要度が高く，技術的に非自明な命題でもあります．[01VS](https://kerodon.net/tag/01VS)のような議論に使います．

<div>
\(p\colon \c{C}\to \c{D}\) を cocartesian fibration とする．
<ul>
<li> full subcategory \(\left\{p\t{-cocarteisan arrows}\right\} \subset \o{Fun}(\Delta^1, \c{C})\) は左随伴をもつ．</li>
<li> 合成 \[\left\{p\t{-cocarteisan arrows}\right\} \hookrightarrow \o{Fun}(\Delta^1, \c{C}) \to \c{C} \vec{\times}_\c{D} \c{D}\] は圏同値．</li>
</ul>
</div>{: .lemma}


とくに，
- 任意の矢印 $$c\to c'$$ を $$p$$-cocartesian なものに近似できること
- 「$$p(c) \to d$$ から $$p$$-cocart lift $$c \to c'$$ を選ぶ操作」が関手的 $$\c{C} \vec{\times}_\c{D} \c{D} \to \o{Fun}(\Delta^1, \c{C})$$ になること

を言っています．さらに二番目の主張である圏同値は，cocartesian lift がどの意味で「一意」であるのかを明確に概念化しています．

>
逆にこの特徴を cocartesian fibration の定義に採用することもできる．
{: .remark}


<!---
### 米田の補題(0)

>
cocartesian fibration \\(p\colon \c{C}\to \c{D}\\) であって
\\(\c{C}\\)
のすべての矢印が
\\(p\\)-cocartesian
であるとき，**left fibration** と呼ぶ．
{: .definition}

>
- $$\c{C}_{c/} \to \c{C}$$ は left fibration.
{: .example}

>
left fibration の
opposite 概念 **right fibration** の定義．
{: .definition}

right fibration は前層に対応する概念になりますので，米田の補題の類似を示すことができます：

>
$$x \in \c{D}$$
が**終対象**であるとは，各
$$\o{Map}(d, x)$$
が一点 $$\ast \in \C{qCat}$$
と圏同値であることを指す．
{: .definition}

<div>
\(p\colon Z \to \c{C}\)
を right fibration とする．\(x\in Z\) が \(c\in\c{C}\) 上のファイバーにあるとき，次を可換にする関手が存在する．
\[ \begin{CD} \{\r{id}_c\} @>>> \{x\} \\ @VVV @VVV \\ \c{C}_{/c} @>\exists>> Z \\ @VVV @VVV \\ \c{C} @= \c{C} \end{CD} \]
</div>{: .lemma}

>
$$p\colon Z \to \c{C}$$
を right fibration とする．$$x\in Z$$
が終対象のとき，Lemma によって与えられる関手は圏同値．
\\[ \c{C}_{/c} \xrightarrow[\qquad]{\sim} Z \\]
{: .theorem}

--->


### Cat

\\(\oo\\)-圏のなすquasicategory $$\C{Cat}$$ が存在するという主張を次の形にまとめました．

<div>
cocartesian fibration \(p_\oo\colon\C{Cat}_{\ast\sslash} \to \C{Cat}\)
が存在して以下が成り立つ．
<ul>
<li>
  任意の単射 \(A\to B\) と 以下の二つの pullback図式（in \(\C{qCat}\)）
  \[ \begin{CD} X @>>> Y \\ @V\t{cocart.fib.}VV @V\t{cocart}V\t{fib.}V \\ A @>>> B \end{CD} \qquad\qquad \begin{CD} X @>>> \C{Cat}_{\ast\sslash} \\ @VVV @VV{p_\oo}V \\ A @>>> \C{Cat} \end{CD} \]
  に対して，cartesian rectangle への拡張
  \[ \begin{CD} X @>>> Y @>\exists>> \C{Cat}_{\ast\sslash} \\ @VVV @VVV @VVp_{\oo}V \\ A @>>> B @>>\exists> \C{Cat} \end{CD} \]
  が存在する．
</li>
</ul>
</div>{: .theorem}

cocartesian fibration の底をリフトすることが，$$\C{Cat}$$ への関手性の完全障害であるということを言っています．
定理の $$B$$ に $$\ast$$ や <a href="#reljoin">$$\Delta^1$$</a> などを入れれば，
$$\C{Cat}$$ の対象や矢印は，quasicategory とその間の関手に対応することがわかります．また，定理を満たす $$\C{Cat}$$ の候補が二つあった場合，両者の間の圏同値が存在することもわかります．

このような quasicategory
$$\C{Cat}$$
のオブジェクトを，**$$\oo$$-圏**と呼びます．定理から，quasicategory が $$\oo$$-圏の例を与え，本質的にそれで全て尽くされるということになるので，二つの用語の違いは強調されないことが多いです．

しかしこの段階だと，
$$\C{Cat}$$
は
"quasicategory of oo-categories"
であって
"oo-category of oo-categories"
ではない気がします．が，対応する「oo-cat of oo-cats」も同じ記号 $$\C{Cat}$$ で書いてしまうことにします．

また，1-圏のnerveで表されるquasicategory に対応する$$\oo$$-圏を，nerveの記号を書かないで表します．

いくつかの基本的な性質を述べます．

<div class="footnote-section" id="limits">
<b>Definition.</b>

<ul><li> <i>small</i> simplcial set から quasicategoryへの写像を，<b>diagram</b>と呼ぶ．</li>
<li>diagram \(f\colon A \to \c{C}\) の <b>limit cone</b>とは，\(\c{C}_{/f}\) の terminal object のことを指す．</li>
<li> constant diagram \(c\) から \(f\colon A \to \c{C}\) への自然変換 \(\epsilon\colon c \to f(-)\) が <b>\(c\) を \(f\) の極限として exhibit している</b>とは，\(\epsilon\)がlimit cone \(\in \c{C}_{/f}\) を定めるときを言う．</li>
</ul>
</div>

<div><ul>
<li> \(\C{qCat}\) での直積は，\(\C{Cat}\) での直積を与える．</li>

<li> quasicategory \(\c{A}, \c{B}\) に対して，evaluation map \(\c{A}\times\o{Fun}(\c{A},\c{B}) \to \c{B}\) は，\(\C{Cat}\) の射として，<a href="#universality">couniversal</a> along \(\c{A}\times(-)\colon\C{Cat}\to\C{Cat}\)．とくに，\(\C{qCat}\)の internal homが \(\C{Cat}\)の internal homを与える．</li>

<li> quasicategoryから\(\oo\)-圏を与える対応が，関手 \[\C{qCat} \to \C{Cat}\]に持ち上がり，post-compostion \[\o{Fun}(\C{Cat},\c{E}) \to \o{Fun}(\C{qCat}, \c{E})\]は一般にfully faithful．またその像は，\(\C{qCat}\)の圏同値を\(\c{E}\)の同型に送る関手全体のなすfull subcategoryに一致する．</li>

<li> cocartesian fibration \(X \to A\) に対応する図式 \(A \to \C{Cat}\) は，\(a\in A\) をファイバー \(X_a = \{a\}\times_A X \in \C{qCat}\)に送る．
</li>

<li> \(\C{qCat}\) でのlax pullback \[\c{C} \times_{\c{B}} \o{Fun}(\Delta^1,\c{B}) \times_{\c{B}} \c{D}\] は \(\C{Cat}\) でも limitになる．
</li>

<li> cocartesian fibrationの，cocartesian global sectionのなす関手圏を考えると，それが対応する \(\C{Cat}\)の図式の極限を与える． </li>

<li> cocartesian fibrationの全空間のcocartesian arrowを(Dwyer--Kan)局所化することで，対応する\(\C{Cat}\)の図式の余極限が得られる． </li>
</ul></div>{: .lemma}

専門用語を並べ立ててしまいましたが，直積・lax pullbackや関手圏といったこれまで導入した記号が，それらを（\\(\C{qCat}\\)ではなく）\\(\C{Cat}\\)の中で考えたものと一致している，ということが一つ重要です．また，$$\C{Cat}$$が無限圏として極限や余極限をもつことを，このような方針で抽象的に証明することができます．

$$\oo$$-圏の間の随伴は，quasicategoryの場合と同様に定義します．これは，$$\C{Cat}$$ の"homotopy 2-category"が，上で一度だけ用いた $$h_2\C{qCat}$$ と変わらないということから正当化することができます．

<div id="unst">
\(\C{Cat}\) の写像 \(p\colon \c{C}' \to \c{C}\) が <b>cocartesian fibration</b> であることを定義して，\(\oo\)-圏の同値
\[ \C{Cat}_{/(-)}^{\r{cocoart}} \simeq \o{Fun}(-, \C{Cat}) \]
を与えることもできる．（左辺は\(\C{Cat}_{/(-)}\)の nonfull subcategory）
</div>{: .remark}

このように，$$\C{Cat}$$ の存在を保証する過程で導入した全ての概念を，$$\C{Cat}$$ の中で完結する言葉に全て書き直すために，色々な議論を二周させる必要があります．



## 圏論

以降では，``\mathcal``は何も言わなければ $$\oo$$-圏とします．また，$$\oo$$-圏をたんに「圏」と言うこともあります．

$$\C{Cat}$$ での同型射を，やはり圏同値と言います．

注意点ですが，これ以降「一意」と言った場合，そのとき考えている対象のなす$$\oo$$-圏が一点と圏同値であるという意味になります．したがって，従来の集合論的な一意性よりもずっと強い意味の用語になってしまうわけですが，この分野の語法としてこれは標準的です．


### Right fibration

>
$$X \in \C{Cat}$$
が **anima** であるとは，
$$ X \to \o{Fun}(\Delta^1, X) $$
が圏同値であることとする．
>
$$\C{An}$$
は
$$\C{Cat}$$
の full subcategoryで定義する．
{: .definition}

アニマ（の圏）の意味・イメージには，
- $$\C{Set}$$ の非アーベル導来圏
- 一点の free colimit completion
- Postnikov towersのなす圏

などさまざまな捉え方がありますが，ここでは詳しく触れません．

また，この定義では非自明になりますが，$$\C{An}\subset\C{Cat}$$が
---極限で閉じているのみではなく---
余極限でも閉じているということが知られています．これは，descent や圏論の視点から極めて重要な性質になります．
実際，$$ \cat{Set} \subset \cat{Cat}_{(1,1)} $$ は余極限を保ちません．


>
$$p\colon \c{C}' \to \c{C}$$ in $$\C{Cat}$$ が**right fibration**であることを，
\\[ \o{Fun}(\Delta^1, \c{C}') \to \c{C} \vec{\times}_\c{C} \c{C}' \\]
が圏同値であることとして定義する．
>
$$\C{RFib}(\c{C}) \subset \C{Cat}_{/\c{C}}$$ を，$$\c{C}$$上のright fibration全体の生成するfull subcategoryとする．
{: .definition}

right fibrationのファイバーは，animaになります．

>
- 各$$c\in\c{C}$$ に対し， $$\c{C}_{/c} \to \c{C}$$ はright fibration．
- $$\oo$$-圏 \\(\c{C}\\) に対して，right fibration
\\[\o{Tw}(\c{C}) \to \c{C} \times \c{C}^\r{op}\\]
であって，各ファイバーが，\\(\o{Map}(x, y)\\)になっているものが存在する．（Twisted arrow category (の双対)と呼ばれる）
{: .example}

<div>
\(\o{Tw}(\c{C})\) を \(\c{C}\times\{c\} \to \c{C}\times\c{C}^\r{op}\) で basechange すると，\(\c{C}_{/c}\) に一致する．
</div>{: .remark}

もちろんquasicategoryレベルでのright fibrationの定義もありますが，省略しました．技術的には，quasicategoryの間のright fibrationという概念を調べておくことが避けられない可能性がありますが．

以下の定理（または[cocartesian版](#unst)）は，**straightening-unstraightening定理**と呼ばれます．

>
圏同値
\\[ \C{RFib}(-) \simeq \o{Fun}((-)^\r{op}, \C{An}) =: \cat{PSh}(\c{C}) \\]
が存在する．さらに，この圏同値において，right fibration $$\c{C}'\to\c{C}$$ に対応する前層 $$F\colon \c{C}^\r{op} \to \C{An}$$ は，$$c\in \c{C}^\r{op}$$ をその上のファイバー $$\c{C}'_c = \c{C}' \times_{\c{C}} \ast \in \C{An}$$ に送る．
{: .theorem}

>
right fibrationのglobal sectionのなすanimaが，前層の極限を計算する．
{: .corollary}

参照すべきものがわかりませんが，このような（関手的な）圏同値は一つしか存在しません．今後はこの圏同値を固定します．

>
$$\c{C}$$ の **mapping space/anima** $$\o{Map}_\c{C}(-,-)$$ を，(dual) twisted arrow category $$\o{Tw}(\c{C})$$ に対応する関手
\\[ \c{C}^\r{op} \times \c{C} \to \Cat{An} \\]
として与える[*](#large)．
{: .definition}

<div class="footnote-section" id="large">
[<a href="#large">*</a>]
\(\C{Cat}\) や \(\C{An}\) がそれぞれ small oo-圏/anima のなす圏であるのに対し，smallとは限らないものからなる圏 \(\Cat{Cat}, \Cat{An}\) などをあらかじめ用意しておくと良い．

私の記号では，\(\cat{Cat}, \cat{An}\)の対象は必ずsmallなもののみとしている．
</div>

<div class="footnote-section">
たんに(\(\oo\)-)圏と言った場合，smallは課さないことは多いが，anima と言う時には smallが課されることがほとんどである．
</div>



### Segal anima

この節はとくに後の議論とは関係ありませんが，イントロで触れたものを正確な主張として記録するために書きました．

圏が圏対象を定めることは，次の形で述べられます．以下の主張は Segal condition と呼ばれているものです．

<div>
単体的集合の写像 
\(\{0< 1\}\sqcup_{\{1\}} \{1< 2\} \cdots \sqcup_{\{n{-}1\}} \{n{-}1< n\} \to \{0<\cdots< n\}\)
が，圏同値
\[ \o{Fun}(\Delta^n, \c{C}) \xrightarrow{\sim} \o{Fun}(\Delta^1, \c{C}) \times_\c{C} \cdots \times_\c{C} \o{Fun}(\Delta^1,\c{C}) \]
および
\[ \o{Map}(\Delta^n, \c{C}) \xrightarrow{\sim} \o{Map}(\Delta^1, \c{C}) \times_\c{C} \cdots \times_\c{C} \o{Map}(\Delta^1,\c{C}) \]
を誘導する．
</div>{: .lemma}

<div>
関手
\[ \o{Map}(\Delta^\bullet, -) \colon \cat{Cat} \to \o{Fun}(\b{\Delta}^\r{op}, \cat{An}) \]
はfully faithful．<!---像は，complete Segal anima つまり 
\[ \left\{X_\bullet\in\o{Fun}(\b{\Delta}^\r{op},\cat{An}) \mid X_n \xrightarrow{\sim} X_1 \times_{X_0} \cdots \times_{X_0} X_1\right\} \]
に一致する．--->
</div>{: .theorem}

像は，**complete Segal anima**と呼ばれるものと一致します．特に，一般の$$(\oo,n)$$-圏が，complete Segal対象を取り続けることで定義することができます．



### Cofinality

<div>
関手 \(\phi \colon I \to J\) が<b>共終</b>であるとは，任意の \(\c{C}\) と \(f\colon J \to \c{C}\)に対して，
\[
  (-)\circ\phi \; \colon \; \c{C}_{f/} \to \c{C}_{f\phi/}
\]
が圏同値であることとする．
</div>{: .definition}

>
fully faithfulな右随伴関手 \\(g\\) は共終であることがわかる．実際，\\(f\\)を\\(g\\)の左随伴とすると，関手\\((-)\circ g\colon\o{Fun}(J,\cat{An}) \to \o{Fun}(I,\cat{An})\\)は，\\(f\\)による左Kan拡張関手と一致するので，\\((-)\circ g\\)がcolimitを変えないことがわかる．
{: .example}

>
1-圏の共終性からは，1-圏の間の$$\oo$$-圏論的共終性が従うとは限らない．例えば"walking coequalizer"の圏の対角写像は，1-圏論的には共終であるが，今回の意味で共終ではない．
{: .remark}

<div>
small \(\oo\)-圏 \(I,J\) の間の関手 \(\phi\)に対し以下同値．
<ul>
<li> \(\phi\) が共終．
</li>
<li> 任意の \(f\colon J \to \c{C}\)に対して，\[(-)\circ\phi \; \colon \; \c{C}_{f/} \to \c{C}_{f\phi/}\] が始対象を保つ．
</li>
<li> 任意の前層 \(X\colon J^\r{op} \to \cat{An}\) に対し，　\[ \o{lim}_{J^\r{op}} X \to \o{lim}_{I^\r{op}} X\phi \] が同型．
</li>
<li> 任意のright fibration \(\c{E} \to J\) に対し，\[ \o{Fun}_{/J}(J,\c{E}) \to \o{Fun}_{/I} (I, \phi^\ast\c{E}) \] が同型．
</li>
<li> 任意の \(f\colon J \to \c{C}\)に対して，\(\cat{Cat}_{/\c{C}}\)の射として\(\phi\) は right fibrationと left orthogonal．
</li>
<li> (Quillen's theorem A.) 各 \(j\in J\) に対し，\(I\times_J J_{j/}\) が weakly contractible<sup><a href="wc">*</a></sup>．
</li>
</ul>
</div>{: .lemma}

<div id="wc" class="footnote-section">
[<a>*</a>] small \(\oo\)-圏 \(\c{A}\) が <b>weakly contractible</b>であるとは，任意のanima \(X\) に対し，\(\o{Map}(\c{A}, X) = \ast\)であるということ．言い換えると，constant図式の余極限 \(\o{colim}_{\c{C}} \ast\) が一点でることに等しい．
</div>

証明のアウトラインを説明します．
上から順に下の条件を導くのは易しいです．とくに，(3)$$\Leftrightarrow$$(4) が straightening-unstraightening から，(4)$$\Leftrightarrow$$(5)は basechangeの議論から，それぞれほぼ同じ主張であることを言っています．

(5)$$\Rightarrow$$(1)を言うには，（何かしらの）*small object argument*を採用して，\\(\phi\\)を具体的な共終写像で近似する議論が用いられます．共終写像の「building block」---right anodyneと呼ばれる---が存在しているというのが重要です．しかし，もっとmodel independentな証明が知られている可能性はあります．

<!---さて，(1)$$\Leftrightarrow$$(5)により，\\[\Cat{RFib}(J) \subset \Cat{Cat}_{/J}\\] の左随伴が存在する．--->

(6)から(4)を示すために，\\(\phi\\)を以下の合成だとみなします．
\\[
I \hookrightarrow J \vec{\times}_J I \xrightarrow{p} J
\\]
最初の関手は左随伴をもつので，共終であることはよいです．第二の関手\\(p\\)は，弱可縮なファイバーをもつことが仮定されていることから，\\(p\\)が(4)の条件を満たすことを示すことができます---また納得することもできると思います---．

>
\\[\Cat{RFib}(\c{C}) \subset \Cat{Cat}_{/\c{C}}\\] の左随伴が存在し，（\\(\c{C}\\)上の）共終写像が，\\(\Cat{RFib}(\c{C})\\)の同型写像に送られる．
{: .corollary}


### Yoneda theorems

前層 \\(\o{Map}(-,c)\\) を \\(y(c)\\)と書きます．
また，\\(\o{Fun}^\r{L}(-,-)\\)で，余極限を保つ関手全体で生成される\\(\o{Fun}(-,-)\\)のfull subcategoryを表します．

<div>
\(\c{C}\)はlocally smallとする．\(c\in\c{C}\)．
<ul>
<li> 任意の \(F\colon \c{C}^\r{op} \to \cat{An}\) に対し，次の写像が同型． \[\o{Map}_{\cat{PSh}(\c{C})}(y(c),F) \xrightarrow{\r{ev}_c} \o{Map}(y(c)(c), F(c)) \xrightarrow{(-)\circ\r{id}_c} F(c)\]
</li>
<li> \(y\colon \c{C} \to \cat{PSh}(\c{C})\) は fully faithful かつ dense．
</li>
<li> \(\c{C}\) がsmallかつ \(\c{E}\) が colimitをもつとき，関手 \[ (-)\circ y \;\colon\; \o{Fun}^\r{L}(\cat{PSh}(\c{C}), \c{E}) \to \o{Fun}(\c{C}, \c{E}) \] は圏同値．
</li>
</ul>
</div>{: .theorem}

(1)は，一つ前のCorollaryから従います．実際，\\(y(c)\\)に対応するright fibrationとして，\\(\c{C}_{/c}\\)があり，これは終対象をもつため
\\( \t{｛}\r{id}_c\t{｝} \to\c{C}\_{/c} \\)が共終です．

(2)は各点Kan拡張のよくある議論と言って良いです．一般的な主張を下のLemmaに載せました．

(3)は，\\(\c{C}\\)がsmallなのでdensityから \\((-)\circ y \colon \o{Fun}(\cat{PSh}(\c{C}),\c{E}) \to \o{Fun}(\c{C},\c{E})\\)
がfully faithfulであることが従います．あとは，\\(y\\)に沿った左Kan拡張が \\(\o{Fun}^\r{L}\\)に値をとることを示すことで，\\((-)\circ y\\)がessentially surjectiveであることもわかります．

>
full subcategory \\(\c{D}'\subset \c{D}\\)に対して，以下同値
>
- 任意の\\(X\in\c{D}\\) が，カノニカルに \\(\c{D}'_{/X} \to \c{D}' \to \c{D}\\) のcolimit
- 合成 \\[\c{D} \xrightarrow{y} \o{Fun}(\c{D}^\r{op}, \Cat{An}) \xrightarrow{\r{res}} \o{Fun}(\c{D}'{}^\r{op},\Cat{An}) \\] がfully faithful
{: .lemma}



### Universality

>
\\(F\colon\c{C}\to\c{D}\\), \\(y\in\c{D}\\)とする．写像 \\(f\colon F(x) \to y\\)が**universal**であるとは，
\\[\o{Map}(-, x) \xrightarrow{F} \o{Map}(F(-), F(x)) \xrightarrow{f\circ} \o{Map}(F(-), y) \\]
が同型であることとする．
{: .definition}

例えば，随伴のデータ \\(\varepsilon \colon FG \to \r{id}\\)が与えられているとき，各 \\(\varepsilon\colon FG(y) \to y\\)はuniversalです．逆に，各点の普遍射から随伴のデータを構成できるか，というのが圏論の基本的な役割でした．

逆に，二つのuniversal arrow \\(F(x), F(x') \to y\\)があるとき，それらの間の同型 \\(x\cong x'\\)の存在が容易にわかります．1-圏の場合，この考察から直ちに随伴関手の存在を説得することができました．

無限圏ではこのような実験的な一意性の議論では，随伴の関手性に辿り着けないどころか，真の意味での一意性に程遠いという問題がありました．しかし米田の定理を使えば，無限圏においても随伴の関手性を導出することができます．

>
\\(F\colon\c{C}\to\c{D}\\)に対し，以下が同値．
- \\(F\\) の右随伴が存在する．
- 各 \\(d\in\c{D}\\)に対し，前層 \\[ \c{C}^\r{op} \xrightarrow{F} \c{D}^\r{op} \xrightarrow{y(d)} \Cat{An} \\] が表現可能．
- 各 \\(d\in\c{D}\\)に対し，universal arrow \\(f\colon F(c) \to d\\) が存在する．
- 各 \\(d\in\c{D}\\)に対し，\\(\c{C}\times_{\c{D}} \c{D}_{/d}\\) が終対象をもつ．
{: .theorem}

(4)$$\Rightarrow$$(1)のみ非自明です．ポイントは，\\[p\colon \c{C}\vec{\times}_\c{D} \c{D} \to \c{D}\\] がcocartesian fibrationであり，各ファイバーが終対象をもつということです．次のLemmaに帰着されます．

>
\\(p\colon E \to B\\)を，quasicategoryのcocartesian fibrationであって，各ファイバー \\(E_x\\) が終対象をもつとき，\\(p\\)の切断 \\(i\\)であって，各\\(i(x)\in E_x\\)がterminal objectであるようなものが存在する．
さらに，このような \\(i\\)は \\(p\\)の右随伴になる．
{: .lemma}

Full subcategory \\(E'\subset E\\)を，ファイバーの終対象で生成させます．このとき，(cocartesian fibrationであることを使うと) 制限 \\(p\colon E' \to B\\) は fully faithful essentially surjectiveであることがわかるので，圏同値になります．

したがって，\\(E'\hookrightarrow E\\) が左随伴を持つことを示せば良いです．これは，reflective localizationの基本定理[02FA](https://kerodon.net/tag/02FA)の適用で得られます．

または，結論のみ述べるならば，\\(E \star_{E} E' \to \Delta^1\\) が cocartesian fibration になることがわかり，straighteningして左随伴関手 \\(L\colon E \to E'\\) を得る，と説明できます．