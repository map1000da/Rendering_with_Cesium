# Rendering_with_Cesium
pyorbitalで衛星軌道のczmlファイルを作成し，Cesiumを用いてweb上で描画

https://qiita.com/Ushinji/items/76d4901658bce767df36

こちらのサイトを参考に，作成．

①make_satelite_czml.pyで指定した衛星の軌道のczmlファイルを作成．

②main.js内で,czmlファイルを読み込み，Cesiumを使って描画．

実行の仕方は，https://qiita.com/keijipoon/items/615ebaf7561a27d744f5 を参考に，st をインストールし，

st -nc -i index.html

とターミナル上で打つことで，ローカルサーバを立ち上げることができる

