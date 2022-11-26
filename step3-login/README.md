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

で、タグ付けが完了する

次は、pushしていく

```cmd
docker push takumi12311123/docker-whale:ver1
```

すると

```error
denied: requested access to the resource is denied
```

errorが出てきた

アクセスが拒否られているので、調べてみると、

タグ名が必要だったり、名前が違うっていうトラブルシューティングしている人たちが出てきた

両方あるので、違う

そこで

```cmd
sudo docker push takumi12311123/docker-whale:ver1
```

を実行したらpush完了できた！！！！

Ubuntuの権限で、`sudo`つける必要があったんですね
