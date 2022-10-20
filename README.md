# study-docker
  
### このフォルダ内の説明 

1. ROOT 直下 README docker の用語説明

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

## docker image

- コンテナを実行に必要なファイルをまとめたファイルシステム

## 動作確認用 image

`docker run hello-image`

### docker hub から image を pull するとき、何も指定しないと、自動的に:latest を pull している

`docker run hello-image:latest`

### docker hello-image の linux 版

`docker run hello-image:linux`

## Ubuntu 用 docker deamon 起動方法

`sudo service docker start`

## build

Dockerfile から Docker イメージを作成することを build という
