# study-docker
 
### このフォルダ内の説明

1. ROOT直下README dockerの用語説明

## docker とはなにか

コンテナ型仮想環境を作成、実行、管理するためのプラットフォーム

開発 PC から、Docker リポジトリにあげて、それを検証サーバー、本番サーバーで、その Docker Image をダウンロードして、環境起動をする

## docker でできること

- アプリケーション開発環境
- 検証環境、本番環境
- Web サーバー、データベースサーバーなどの構築
- 各種プログラミング言語の実行環境
- その他様々なミドルウェアの環境構築

## docker を利用するメリット

- 実行環境構築が早い
- 他 PC と差異がなくなる(再現性のある環境構築)
  → 個人個人で、パッケージなどをインストールすると、バージョンの違いからエラーが発生することもある。
- 設定ファイルを共有することで、メンバー間で同じ環境を作れる
- PC を汚さない

## コンテナ型仮想化のデメリット

- ホスト OS のカーネルを利用するため、Windows OS 上で、直接 Linux コンテナは動作できない。
- 逆もまた然り

## docker デーモン

- docker の常駐型プログラム
- コンテナ作成やイメージ作成は、デーモンが受け取り、処理を行っている
- 起動していないと、docker の操作はエラーになる
