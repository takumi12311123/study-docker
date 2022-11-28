# nginx を用いた web server の構築

```cmd
docker run --name <container name> -d -p <ホスト側のポート番号>:<コンテナ側のポート番号> <image name>
```

`-d`はデタッチドモードのこと,ターミナルをそのまま動かせるモードのこと
`-p`はポート番号

```cmd
docker run --name test-nginx -d -p 8080:80 nginx
```

`http://localhost:8080/`にアクセス！！

すると、、


## 止め方
```cmd
docker stop test-nginx
```

## 消し方
```cmd
docker rm test-nginx
```
