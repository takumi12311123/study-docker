# docker fileについて

docker fileとは
docker imageを作成するための指示書となる設定ファイルのこと

DockerではDockerfileという名前のファイルがデフォルトでイメージのビルドに使用される

Dockerでビルドを行った場合、Dockerfileに定義された内容を上から順に処理をしていき、
最終的な状態の環境がDocker imageとして保存される


## docker fileのbuild仕方

```cmd
docker build -t docker-whale .
```

Root直下のdockerfileに基づいて、imageが作成される

```cmd
docker run docker-whale
```

output

<img width="283" alt="image" src="https://user-images.githubusercontent.com/103009749/203227504-53b3fa76-07e5-47de-84de-690e360c5657.png">
<img width="264" alt="image" src="https://user-images.githubusercontent.com/103009749/203227531-068da1e4-7e1f-410d-aff2-07785efcd6ee.png">

fortuneで英語の格言が1つ生成されて、docker-whalesayに渡されて、クジラが話してくれる

1回実行すると、キャッシュがあるので、早く起動できるようになる

