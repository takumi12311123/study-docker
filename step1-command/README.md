## docker command 一覧

### localに存在するimageをすべて表示
```docker images```

output
```
REPOSITORY               TAG             IMAGE ID       CREATED         SIZE
golang                   latest          8827cedaa309   3 weeks ago     992MB
foobar/hello             1.0             c66e6a41a21d   7 weeks ago     920MB
docker/whalesay          latest          6b362a9f73eb   7 years ago     247MB
```
### imageにタグ付けするコマンド

```docker tag docker/whalesay my_whalesay```

docker/whalesayをmy_whalesayに変更するコマンド

output

```
REPOSITORY               TAG             IMAGE ID       CREATED         SIZE
golang                   latest          8827cedaa309   3 weeks ago     992MB
foobar/hello             1.0             c66e6a41a21d   7 weeks ago     920MB
my_whalesay              latest          6b362a9f73eb   7 years ago     247MB
```
