# docke hub への login

`docker hub`に push するために、command からログインを進めていきます.

```cmd
sudo docker login
```

※`sudo`を付けて管理者で実行しないと、自分の環境では、エラーが出ました

同じ環境の際は、つけることをお勧めします

docker hub に login が成功すると

```output
login sucseeded
```

と表示されます.

## docker hub に image を push する

### タグ付けのルール

```cmd
<Docker ID>/<image名>:<タグ名>
```

```cmd
docker tag docker-whale takumi12311123/docker-whale:ver1
```

で、タグ付けが完了する

次は、push していく

```cmd
docker push takumi12311123/docker-whale:ver1
```

すると

```error
denied: requested access to the resource is denied
```

error が出てきた

アクセスが拒否られているので、調べてみると、

タグ名が必要だったり、名前が違うっていうトラブルシューティングしている人たちが出てきた

両方あるので、違う

そこで

```cmd
sudo docker push takumi12311123/docker-whale:ver1
```

を実行したら push 完了できた！！！！

Ubuntu の権限で、`sudo`つける必要があったんですね

折角 push したので、pull してみましょう

一度、image を削除します

```cmd
docker rmi -f <imageId>
```

```cmd
docker images
```

local にないことが確認出来たら

```cmd
docker pull takumi12311123/docker-whale:ver1
```

```output
Status: Downloaded newer image for takumi12311123/docker-whale:ver1
```

できましたね
