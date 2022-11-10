## docker command 一覧

### local に存在する image をすべて表示

```cmd
docker images
```

output

```string
REPOSITORY TAG IMAGE ID CREATED SIZE
golang latest 8827cedaa309 3 weeks ago 992MB
foobar/hello 1.0 c66e6a41a21d 7 weeks ago 920MB
docker/whalesay latest 6b362a9f73eb 7 years ago 247MB
```

### image にタグ付けするコマンド

```cmd
docker tag docker/whalesay my_whalesay
```

docker/whalesay を my_whalesay に変更するコマンド

output

```string
REPOSITORY TAG IMAGE ID CREATED SIZE
golang latest 8827cedaa309 3 weeks ago 992MB
foobar/hello 1.0 c66e6a41a21d 7 weeks ago 920MB
my_whalesay latest 6b362a9f73eb 7 years ago 247MB
```

### image の詳細情報が表示されるコマンド

```cmd
docker inspect my_whalesay
```

ながい、、、
cmd が実行されるコマンド、env が環境だから、そこだけとりあえず、、？

output

```json
[
  {
    "Id": "sha256:6b362a9f73eb8c33b48c95f4fcce1b6637fc25646728cf7fb0679b2da273c3f4",
    "RepoTags": ["docker/whalesay:latest", "my_whalesay:latest"],
    "RepoDigests": [
      "docker/whalesay@sha256:178598e51a26abbc958b8a2e48825c90bc22e641de3d31e18aaf55f3258ba93b"
    ],
    "Parent": "",
    "Comment": "",
    "Created": "2015-05-25T22:04:23.303454458Z",
    "Container": "5460b2353ce4e2b3e3e81b4a523a61c5adc238ae21d3ec3a5774674652e6317f",
    "ContainerConfig": {
      "Hostname": "9ec8c01a6a48",
      "Domainname": "",
      "User": "",
      "AttachStdin": false,
      "AttachStdout": false,
      "AttachStderr": false,
      "Tty": false,
      "OpenStdin": false,
      "StdinOnce": false,
      "Env": [
        "PATH=/usr/local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
      ],
      "Cmd": [
        "/bin/sh",
        "-c",
        "#(nop) ENV PATH=/usr/local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
      ],
      "Image": "5d5bd9951e26ca0301423625b19764bda914ae39c3f2bfd6f1824bf5354d10ee",
      "Volumes": null,
      "WorkingDir": "/cowsay",
      "Entrypoint": null,
      "OnBuild": [],
      "Labels": {}
    },
    "DockerVersion": "1.6.0",
    "Author": "",
    "Config": {
      "Hostname": "9ec8c01a6a48",
      "Domainname": "",
      "User": "",
      "AttachStdin": false,
      "AttachStdout": false,
      "AttachStderr": false,
      "Tty": false,
      "OpenStdin": false,
      "StdinOnce": false,
      "Env": [
        "PATH=/usr/local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
      ],
      "Cmd": ["/bin/bash"],
      "Image": "5d5bd9951e26ca0301423625b19764bda914ae39c3f2bfd6f1824bf5354d10ee",
      "Volumes": null,
      "WorkingDir": "/cowsay",
      "Entrypoint": null,
      "OnBuild": [],
      "Labels": {}
    },
    "Architecture": "amd64",
    "Os": "linux",
    "Size": 247049019,
    "VirtualSize": 247049019,
    "GraphDriver": {
      "Data": {
        "LowerDir": "/var/lib/docker/overlay2/4e843b2401d41f37c28868e4f271fe7da983fd953b52c6aa40008391af052d9d/diff:/var/lib/docker/overlay2/3c77955abf1781b312e0060d4aeb267f74cedb3ad36c0e53533db00ac576c644/diff:/var/lib/docker/overlay2/f77408f55baf0b6b0ca41e44d0f0b028fc925526d7349a6b07620d2a66220702/diff:/var/lib/docker/overlay2/6f0e9ee29ce2f3ab0689fd126482da3b03b4ab804803a1597774f27444607073/diff:/var/lib/docker/overlay2/a879578d60a3603afd65184d135cdf610b646241fea2b5981fb03444b14acf5e/diff:/var/lib/docker/overlay2/accf76da79d665b7d42f21545beeb351daa575bd0d9388ad08e773db5bacee44/diff:/var/lib/docker/overlay2/4b928b3fdd1b1cb23cd24a81be7d5cc35ef47809b5ba26a16cf696cab9b9149c/diff:/var/lib/docker/overlay2/af3243a13e57920ad1b3733ddfb6ac58af921072230770fb7051004a2ddd768a/diff:/var/lib/docker/overlay2/8e39e0442b88847c471f1c02f5f4d2cecba36690c16dbb68a40879367e3c4c14/diff",
        "MergedDir": "/var/lib/docker/overlay2/5243b217c9b51da1589643c44d9606d7dc3f1794be1057da201b575f3f195059/merged",
        "UpperDir": "/var/lib/docker/overlay2/5243b217c9b51da1589643c44d9606d7dc3f1794be1057da201b575f3f195059/diff",
        "WorkDir": "/var/lib/docker/overlay2/5243b217c9b51da1589643c44d9606d7dc3f1794be1057da201b575f3f195059/work"
      },
      "Name": "overlay2"
    },
    "RootFS": {
      "Type": "layers",
      "Layers": [
        "sha256:1154ba695078d29ea6c4e1adb55c463959cd77509adf09710e2315827d66271a",
        "sha256:528c8710fd95f61d40b8bb8a549fa8dfa737d9b9c7c7b2ae55f745c972dddacd",
        "sha256:37ee47034d9b78f10f0c5ce3a25e6b6e58997fcadaf5f896c603a10c5f35fb31",
        "sha256:5f70bf18a086007016e948b04aed3b82103a36bea41755b6cddfaf10ace3c6ef",
        "sha256:b26122d57afa5c4a2dc8db3f986410805bc8792af3a4fa73cfde5eed0a8e5b6d",
        "sha256:091abc5148e4d32cecb5522067509d7ffc1e8ac272ff75d2775138639a6c50ca",
        "sha256:5f70bf18a086007016e948b04aed3b82103a36bea41755b6cddfaf10ace3c6ef",
        "sha256:d511ed9e12e17ab4bfc3e80ed7ce86d4aac82769b42f42b753a338ed9b8a566d",
        "sha256:d061ee1340ecc8d03ca25e6ca7f7502275f558764c1ab46bd1f37854c74c5b3f",
        "sha256:5f70bf18a086007016e948b04aed3b82103a36bea41755b6cddfaf10ace3c6ef"
      ]
    },
    "Metadata": {
      "LastTagTime": "2022-11-02T12:35:12.7052128+09:00"
    }
  }
]
```
