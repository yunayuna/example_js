JavaScriptは大きく分けて、クライアントサイドと、サーバーサイドJSがある。
# クライアントサイドJS

## alt.js

JavaScriptを書くのが大変なので、その代替とするための言語群   
下記のほかにもDart
Haxe
JSX
Scala.js
他100種ほどある。
#### ECMAScript
2016とかは、JSのバージョン
JavaScript の標準
ＥＣＭＡ（European Computer Manufacture Association）Internationalが、ECMAScript（ECMA-262）規格を策定し、
それによる標準化されたJavaScriptを ECMAScript を示している

#### TypeScript


ECMAScript6 の仕様を積極的に取り込んでいる。

`class`と宣言することで、クラスが書ける。  
`extends`でクラスの継承ができる。   
`module`を使うことで型や、名前空間の定義を行うことができる。   
CoffeeScriptよりコンパイル速度は遅い。   

#### CoffeeScript

CoffeeScriptの書き方

`&&` -> `and`   
`||` -> `or`   
`hoge === huga` -> `hoge is huga`   
`var`や`function`いらない。   
`()`や`{}`ではなく、インデントで行う。カンマもセミコロンもいらない。

そのため書きやすい。


### js フレームワーク(MVC系)


フロント側のみの操作なら、jQueryだけでも平気だが、大規模になってくると、UI操作のロジック、Ajaxだのコールバック関数だのが必要になり、複雑なコードになりがち   
→そこでMVCパターンを考慮してアプリケーションを作成することで、UI操作ロジックとアプリケーションるロジック、さらに業務ロジックを分離、集約することができ、コードの可読性が向上。
また、「イベント」という仕組みにより業務ロジックがUIに依存しなくなるため、再利用もしやすくなる。

React.js   
Angular.js   
Angular.js 2.0   
Backbone.js   
Vue.js   
Mithril.js   
Aurelia.js   
Knockout.js   
Ember.js   
Riot.js   
Ractive.js   
などなど…


### DOM操作ライブラリ

jQuery
# サーバーサイドJS(サーバーサイドの操作をJSで行う)
### Node.js


サーバサイドJavaScriptには、「CommonJS」と呼ばれる標準化が策定されている。
Node.jsは、このCommonJSに則って開発されている。

#### npm
npmはnode.jsのpackageを管理するためのツール。

# ビルドツール

### WebPack
2016年4月現在のトレンドでは、GruntよりGulpとWebPackの方が人気。GulpはGruntと比べてシンプルな記述と高速な処理が可能なタスクランナー、WebPackはJavaScriptからCSS、画像等あらゆるアセットを生成する近年人気のビルドツールです。   
Browserifyは非常に便利ですが、調べてみるとWebPackの方が良さげでした。
CSS, Image, json, フォント… 何でもビルドして1つのbundle.jsにしてしまえるから。   
また、1ファイルではなく複数のファイルにビルドすることも可能なようです。
* コード分割
- requireの使い方で、AMDのような非同期のロードもサポート
- Loaderという読み込み時に適用するプラグイン
- require時に変数が入っていてもパースできるような、賢いパース
- Pluginによる拡張

### Browserify

→BrowserifyとWebpackとの一番の違いは、Browserifyが 単一ファイル を作成するのに特化していたのと比較して、Webpackは 複数ファイルを出力すること を念頭に置いている点

*****
ここからはWebpackを実際にやってみた自分の備忘録

1. `$ npm init` パッケージの管理下におく   
2. `$ npm install webpack --save-dev` webpackをインストールする`webpack`の部分を変えれば`bootstrap`のような外部モジュールを読み込むことができる。パッケージをインストールし、package.jsonへ書き込む
`--save`オプションを指定して、package.jsonのdependenciesにバージョン付きで書き込む   
`--save--dev`オプションを指定して、package.jsonのdevDependenciesにバージョン付きで書き込む   
`-g`オプションでグローバル領域にインストール   
このオプションは開発時のみに利用するライブラリのバージョンを管理する。
3. `<script type="text/javascript" src="bundle.js" charset="utf-8"></script>` head内に記述する   
4. `$ webpack main.js bundle.js` `webpack (ソース.js) (出力する.js)` でビルドする
5. `$ npm ls -g` グローバルインストールされたパッケージの一覧

ビルド時に圧縮`--optmize-minimize`  
ファイルの変更を監`$ webpack --watch`
Webサーバーとして動作、移動リロード
`webpack-dev-server --inline`
