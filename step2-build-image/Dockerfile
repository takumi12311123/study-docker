# FROMはイメージを作成する際に基にするものを指定するコマンド
# 元のレイヤーに重ねて作成していくことができる
FROM docker/whalesay:latest

# 命令を実行させるにはRUNを使う

RUN apt-get -y update && apt-get install -y fortunes

CMD /usr/games/fortune | cowsay
