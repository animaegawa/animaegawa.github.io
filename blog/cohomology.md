---
layout: post
title: "（非アーベル）コホモロジー，無限トポス"
date: 2025-04-10
lang: ja
last_modified: 
---

HTT 6章のまとめ記事．

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

## 導入

ホモトピー不変量の研究が，代数的トポロジーという分野でした．

普遍的なホモトピー不変量の作り方として，点（の集合）をホモトピーで割ったアニマ \\(\o{Sing}(X)\\)
のほかに，*局所定数関数の全体 \\(H^0(X)\\) を考える*という方法があります．

通常の集合論的な局所定数関数 \\(H^0(X;\bb{Z})\\)のみでは，連結成分のみに依存する不変量になってしまいますが，*higher*な，圏論的に高次の，（局所定数）関数 \\(H^0(X; B^n\bb{Z})\\) を考えることにより，高次のgenusが現れる，という理論が**コホモロジー**です．


## 1-localic case