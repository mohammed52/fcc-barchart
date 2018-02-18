function getOrbitalPerioObj(obj){
	var GM = 398600.4418;
  	var earthRadius = 6367.4447;
	function maplog(str1){
		var LOGgetOrbitalPerioObj = true;
		if (LOGgetOrbitalPerioObj) {
			console.log(str1);
		}
	}
	var rInMeter = (earthRadius+obj.avgAlt)*1000;

	maplog("rCube: "+rInMeter);
	var rCube = Math.pow(rInMeter,3);
	maplog("rCube: "+rCube);
	var gmInMeters = GM*1000000000;
	maplog("gmInMeters: "+gmInMeters);
	rCubeByGM = rCube/gmInMeters;
	maplog("rCubeByGM: "+rCubeByGM);


	var twoPiInto = Math.round(Math.sqrt(rCubeByGM)*2*3.142);
	maplog("twoPiInto: "+twoPiInto);

	return obj;
}

obj = {
  name: "sputnik",
  avgAlt: 378632.553
};
getOrbitalPerioObj(obj);