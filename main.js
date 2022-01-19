(function() {
  "use strict";

  var czml = [
  	{
  		"id": "document",
  		"name": "CZML",
  		"version": "1.0"
  	},
  	{
  		"id": "satellite",
  		"name": "animation",
  		"description": "動きます",
  		"availability": "2022-01-12T09:59:11Z/2022-01-12T11:39:11Z",
  		"position": {
  			"epoch": "2022-01-12T09:59:11Z",
  			"cartographicDegrees": [
  				0,
  				-76.50758134156756,
  				26.218690327760154,
  				419552.4030873023,
  				60,
  				-73.84462419210234,
  				23.37461014073792,
  				419431.0517521978,
  				120,
  				-71.30450454779161,
  				20.47783459595952,
  				419365.3591825224,
  				180,
  				-68.86804171249453,
  				17.537276913379806,
  				419364.33972071554,
  				240,
  				-66.5174515470459,
  				14.560932675066713,
  				419435.85853486287
  			]
  		},
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
  ];

  //console.log(czml);

  var viewer = new Cesium.Viewer('cesium', {shouldAnimate: true,});

  //var data_source_tmp = Cesium.CzmlDataSource.load(czml);
  //var data_source = Cesium.CzmlDataSource.load("sample.czml");

  //おそらくこの読み込みの部分でエラーを吐いている．
  var data_source_false = Cesium.CzmlDataSource.load("satellite.czml")

  //console.log(data_source);
  //viewer.dataSources.add(data_source_tmp);
  //viewer.dataSources.add(data_source);
  viewer.dataSources.add(data_source_false)






  //viewer.zoomTo(viewer.entities);


}());
