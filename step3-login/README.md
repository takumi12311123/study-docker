# docke hubへのlogin

`docker hub`にpushするために、commandからログインを進めていきます.


```cmd
sudo docker login
```

※`sudo`を付けて管理者で実行しないと、自分の環境では、エラーが出ました

同じ環境の際は、つけることをお勧めします

docker hubにloginが成功すると

```output
login sucseeded
```

と表示されます.

## docker hubにimageをpush する

### タグ付けのルール

```cmd
<Docker ID>/<image名>:<タグ名>
```

```cmd
docker tag docker-whale takumi12311123/docker-whale:ver1
```

### push 仕方

```how-to-push
docker push takumi12311123/docker-whale:ver1
```
