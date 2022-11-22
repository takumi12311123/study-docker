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

