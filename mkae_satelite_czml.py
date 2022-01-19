import math
from datetime import datetime, timedelta
from pyorbital.orbital import Orbital
from pyorbital.tlefile import Tle
import json

print("aaa")
def get_satelite_name():
    print("衛星の名前を記述してください")
    #ISS (ZARYA)
    return input()

satelite_name = get_satelite_name()
satelite = Orbital(satelite_name)

print(satelite.tle)
# 現在時刻の取得(UTC)
start = datetime.utcnow()

# 現在時刻を基準として60秒毎の衛星位置の計算をループ
result = []
for i in range(100):
    # get_lonlatalt()メソッドで、TLE情報と時間から衛星の位置を計算
    # lon:経度、lat:緯度、alt:高度(km)
    utc_time = start + timedelta(minutes=i)
    lon, lat, alt = satelite.get_lonlatalt(utc_time)
    result.append(i * 60)
    result.append(lon)
    result.append(lat)
    result.append(alt * 1000) # CZML用に高度の単位をキロメートル(km)からメートル(m)へ変換

start_position = result[1:4] #緯度，軽度，高度
end = start + timedelta(minutes=100)

result_dict =[{
   "id": "document",
   "name": "CZML",
   "version": "1.0"
  },
  {
    "id": "satelite",
    "name": satelite_name,
    "description": "animation_satellite",
    "availability": f'{start.strftime("%Y-%m-%dT%H:%M:%SZ")}/{end.strftime("%Y-%m-%dT%H:%M:%SZ")}',
    "position": {
      "epoch":start.strftime("%Y-%m-%dT%H:%M:%SZ"),
      "cartographicDegrees": result
    }
   ,
   "point": {
     "color": {
       "rgba": [
       255,
       0,
       0,
       255
       ]
     },
     "pixelSize": 8
   }
  }
]

with open('test.czml', 'w') as f:
    json.dump(result_dict, f, indent=2)
