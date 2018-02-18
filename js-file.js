/*jslint browser:true */
/*jshint strict:false */
/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */

// orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) 
// [{name: "sputnik", orbitalPeriod: 86400}].

// orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, 
// 	{name: "moon", avgAlt: 378632.553}]) 

// [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, 
// {name: "moon", orbitalPeriod: 2377399}]. 

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var retArr = [];

  function getOrbitalPerioObj(obj) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    function maplog(str1) {
      var LOGgetOrbitalPerioObj = true;
      if (LOGgetOrbitalPerioObj) {
        console.log(str1);
      }
    }
    var rInMeter = (earthRadius + obj.avgAlt) * 1000;

    maplog("rCube: " + rInMeter);
    var rCube = Math.pow(rInMeter, 3);
    maplog("rCube: " + rCube);
    var gmInMeters = GM * 1000000000;
    maplog("gmInMeters: " + gmInMeters);
    rCubeByGM = rCube / gmInMeters;
    maplog("rCubeByGM: " + rCubeByGM);


    var twoPiInto = Math.round(Math.sqrt(rCubeByGM) * 2 * Math.PI);
    maplog("twoPiInto: " + twoPiInto);

    return {
      name: obj.name,
      orbitalPeriod: twoPiInto
    };
  }

  for (var i = 0; i < arr.length; i++) {
    retArr.push(getOrbitalPerioObj(arr[i]));
  }

  console.log(retArr);

  return retArr;
}

orbitalPeriod([{
  name: "sputnik",
  avgAlt: 35873.5553
}]);
