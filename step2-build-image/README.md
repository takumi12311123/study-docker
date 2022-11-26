# docker file について

docker file とは
docker image を作成するための指示書となる設定ファイルのこと

Docker では Dockerfile という名前のファイルがデフォルトでイメージのビルドに使用される

Docker でビルドを行った場合、Dockerfile に定義された内容を上から順に処理をしていき、
最終的な状態の環境が Docker image として保存される

## docker file の build 仕方

```cmd
docker build -t docker-whale .
```

Root 直下の dockerfile に基づいて、image が作成される

```cmd
docker run docker-whale
```

output

<img width="283" alt="image" src="https://user-images.githubusercontent.com/103009749/203227504-53b3fa76-07e5-47de-84de-690e360c5657.png">
<img width="264" alt="image" src="https://user-images.githubusercontent.com/103009749/203227531-068da1e4-7e1f-410d-aff2-07785efcd6ee.png">

fortune で英語の格言が 1 つ生成されて、docker-whalesay に渡されて、クジラが話してくれる

1 回実行すると、キャッシュがあるので、早く起動できるようになる
