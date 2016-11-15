# PaintBBS NEO Next Generation (PNG)
Copyright (c) 2016, mirido
All rights reserved.

## 概要
PaintBBS互換品をHTML5 + javascriptで書く企画。

既設のお絵かき掲示板を、サーバー側の変更を要さずそのまま利用する投稿ツールとしての形態を目指す。

当サブフォルダhtml5_experiment内のうち、"submit.js"を除く全ソースコードはhtml5_experimentプロジェクトからの派生物である。
html5_experimentプロジェクトのソースコードは修正BSDライセンスのもとで公開する。（COPYRIGHTファイル参照。）

## 最新状況
- 2016-11-15 V0.05 alpha
  - 「元に戻す」（Undo）機能と「やり直し」（Redo）機能を追加した。

## 使い方

### 準備（1回だけやれば良いです）
- [ここの手順](http://qiita.com/nyanchu/items/15d514d9b9f87e5c0a29)
に従ってNode.jsとElectronをインストールする。

- 当サブフォルダ"html5_experiment"にてコマンドウィンドウを開き、<BR>
```$npm install request --save```<BR>
を実行する。<BR>
（カレントフォルダにrequestモジュールがインストールされ、"package.json"が適切に書き換えられます。）<BR>

### 起動
- 当サブフォルダ"html5_experiment"でコマンドウィンドウを開いて<BR>
```$ electron .```
<BR>とする。

## スクリーンショット

![スクリーンショット](https://github.com/mirido/neo/blob/master/html5_experiment/_screenshot/app_image.png)


## ドキュメント
0. \_doc/interface_speccification.md -- インターフェース仕様書


## ファイル構成

### 汎用ライブラリ
0. dbg-util.js -- デバッグ用関数集。
0. geometry.js -- 幾何学関数集。
0. graphics.js -- グラフィック描画関数集。
0. imaging.js -- 画像処理関数集。
0. ui-util.js -- GUI構成用関数およびクラス集。

### アプリ固有のクラスライブラリ
0. picture-canvas.js -- お絵かき領域を表すPictureCanvasクラス他。
0. tool-palette.js -- ツールパレットを表すPoolPaletteクラス他。
0. oebi-tools.js -- ツールパレットに乗るツールのクラス集。
0. ui-element.js -- PaintBBS互換GUIのフレームワーク。

### スタイルシート
0. default_style.css
0. oebi_pane.css

### プログラムのエントリポイント
0. index.html -- 最初にブラウザで開くファイル。
0. index.js -- index.htmlのロード完了時に呼ばれるinit_wnd()を定義する。

# 更新履歴

- 2016-09-26
  - funige氏のPaintBBS NEOのソースコードを見てHTML5の可能性を知った。


- 2016-10-01
  - 当プロジェクト開始。


- 2016-10-02
  - canvasの重ねあわせ表示を実現した。
  - PaintBBS風レイアウトを実現した。
  - 当該canvas上の画像の合成処理を実現した。


- 2016-10-09
  - 鉛筆ツールを部分的に実装した。<BR>PaintBBSにおける鉛筆ツールに当たる箇所をクリックすると選択状態がトグルする。<BR>選択状態になるとき画面下部の「線の太さ」選択ボックスの値を反映する。<BR>※ 後述するインターフェース仕様書に従い構造を変更中。


- 2016-10-18 V0.02 alpha
  - 鉛筆ツール、カラーパレット、カラースライダ、線幅ツール、スポイトツールを実装した。PaintBBSと同様の連携動作をする。


- 2016-10-23 V0.03 alpha
  - マスクツールと逆マスクツールを実装した。


- 2016-11-01 V0.04 alpha
  - レイヤー切替機能、塗り潰し（ペイント）ツール、消しペンツール、四角ツール、線四角ツールを追加した。


- 2016-11-08 V0.041 alpha
  - マスク（または逆マスク）有効状態におけるレイヤーの可視状態変更処理に問題があったので修正した。

以上
