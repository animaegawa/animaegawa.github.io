---
layout: post
title: "群の拡大の分類"
date: 2025-03-29
keywords: ["分類空間", "拡大", "A_\\infty-群", "中心拡大"]
lang: ja
---

以下の記事の内容を一部踏まえています：
<ul>
    <li><a href="/blog/oo-cat.html">∞-圏入門</a> </li>
</ul>
---
<div style="text-align: right;">
  <a href="../ja/">日本語Top</a> |
  <a href="../">English</a>
</div>


## 分類定理

<div>
\(\o{Grp}(\C{An})\)の可換図式

\[
  \begin{CD} N @>>> G \\ @VVV @VVfV \\ 1 @>>> K \end{CD}
\]

が*群の拡大*であるとは，カルテシアンかつ \(f\)がeffective epiであることを言う．
</div>
{: .definition}

すべて群対象の射としているので，

$$
\begin{CD} BN @>>> BG \\ @VVV @VVBfV \\ \ast @>>> BK \end{CD}
$$

という可換図式があり，もしこれがカルテシアンであれば，以下の長方形たちも（pasting lawから）順に全ての四角がカルテシアンになる．

$$
\begin{CD} N @>>> 1 @. \\ @VVV @VVV @. \\ G @>f>> K @>>> \ast \\ @VVV @VVV @VVV \\ \ast @>>> BN @>>> BG \\ @. @VVV @VVBfV \\ @. \ast @>>> BK \end{CD}
$$


<div>
群の拡大に対し，図式

\begin{CD} BN @>>> BG \\ @VVV @VVBfV \\ \ast @>>> BK \end{CD}

はカルテシアン
</div>{: .theorem}

<div>
次がカルテシアン．
\begin{CD}
BG @>>> (BN)_{\o{Aut}(BN)} \\ @VVV @VVV \\ BK @>>> B{\o{Aut}}(BN)
\end{CD}

とくに，群の拡大の全体は次のように表現可能．

\[
\o{Ext}^1(K, N) \cong \pi_0 \o{Map}_\ast(BK, B{\o{Aut}}(BN))
\]
</div>{: .corollary}

しばしば，Grothendieck構成は半直積の一般化と言われることがあるが，このようにAutで基点を固定しなければ任意の拡大をGrothendieck構成(=(lax) pullback)で再構成できることがわかる．亜群対象ではなくアニマを用いることの帰結と言っても良い．



## 証明

### Group object

>
Segal anima
$$
X_\bullet \colon \b{\Delta}^\r{op} \to \C{An}
$$
であって
$$X_0$$
が終対象であるものを，**monoid** [<sup>1</sup>](#note1) という．
{: .definition}

<div id="note1" class="footnote-section">
[1]: 古典的に \(E_1\)-space と呼ばれるもの．
</div>

>
Monoid であって
\\[\begin{pmatrix}1 & 0 \\\\ 1 & 1\end{pmatrix} \colon M\times M \to M\times M\\]
が同型なものを，**group** という．
{: .definition}

<div>
anima \(X\) と点 \(x\in X\)
に対し，based loop群 \(\Omega X\in \o{Grp}(\C{An})\)
を次のチェック構成<a href="#note2"><sup>2</sup></a>で定義する．
\[
\{x\}^{\times_X[-]}\colon \; \xymatrix{
   \{x\} \ar[r]
 & \{x\}\times_X \{x\} \ar@<0.3em>[l] \ar@<-0.3em>[l] \ar@<0.3em>[r] \ar@<-0.3em>[r]
 & \{x\}\times_X \{x\}\times_X\{x\} \ar[l] \ar@<0.6em>[l] \ar@<-0.6em>[l] \ar@{.}[r]
 & 
}\]
</div>{: .construction}

<div id="note2" class="footnote-section">
[2]: 厳密には，図式 \(\{x\} \to X\) を \(\b{\Delta}^\r{op}_\r{aug}\) に右 Kan 拡張して定義する．
</div>

### Recognition principle

群は`deloop'できるという定理を復習しておく．

<div>
関手 \(\Omega \colon \C{An}_\ast \to \o{Grp}(\C{An})\) は，fully faithful な左随伴 \(B\colon \o{Grp}(\C{An})\to \C{An}_\ast\) をもつ．
\(B\) の像は，connected anima のなす部分圏 \(\C{An}_\ast^{\ge1}\)．
</div>{: .lemma}

定理の証明に入る．

<div>
\(G\to K\)
がeff epiであることと，\(Bf \colon BG \to BK\) のファイバーが連結であることが同値であることに注意する．

\(\Omega \colon \C{An}_\ast^{\ge1} \to \o{Grp}(\C{An})\)
が圏同値なので，\(BN \to BG \to BK\) が　\(\C{An}_\ast^{\ge1}\) で fiber sequence であることと，\(\Omega BN \to \Omega BG \to \Omega BK\) が \(\o{Grp}(\C{An})\) で fiber系列であることが等しい．

なお，忘却 \(\o{Grp}(\C{An}) \to \C{An}\) は極限をcreateする．
</div>{: .proof}



## abelian group

>
\\(A\\) が， \\(\C{An}\\)のアーベル群対象のとき，
\\[B{\o{Aut}}(BA) = (BBA)\_{\o{Aut}\_{\r{Grp}}(A)}\\]
{: .example}

したがって \\(A\\) による\\(K\\)の拡大は，準同型 \\(\varphi \colon K \to \o{Aut}\_{\r{Grp}}(A)\\)
および (\\(\varphi\\)-twisted) 2-cocycle \\[BK \to (BBA)_K \quad \in \C{An}\_{/BK}\\] で分類される．




## Universal group extension

>
\\[ G \xrightarrow{\r{conj}} \o{Aut}_{\r{Grp}}(G) \to \o{Aut}(BG)\\]
is a group extension.
{: .example}