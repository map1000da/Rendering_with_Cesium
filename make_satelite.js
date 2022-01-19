
import * as satellite from 'satellite.js';

// TLEを使い、satrecオブジェクトを初期化
const line1 = '1 25544U 98067A   21260.38326868  .00002108  00000-0  47329-4 0  9995';
const line2 = '2 25544  51.6436 246.8533 0003182  25.6729 121.4393 15.48402825302886';
const satrec = satellite.twoline2satrec(line1, line2);

// 現在時刻の衛星の位置を計算
const now = new Date();
const { position: positionEci } = satellite.propagate(satrec, now);

// 衛星位置の座標系を変換(ECI -> geodetic location)
const gstime = satellite.gstime(now); // GMST(グリニッジ恒星時)に変換
const positionGd = satellite.eciToGeodetic(positionEci, gstime);

// 計算結果
console.log(positionGd.longitude); // 経度[rad]
console.log(positionGd.latitude); // 緯度[rad]
console.log(positionGd.height); // 高度[km]
