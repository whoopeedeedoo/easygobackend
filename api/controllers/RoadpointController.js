/**
 * RoadpointController
 *
 * @description :: Server-side logic for managing roadpoints
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var fs = require('fs');

var getDistance = function(lat1, lon1, lat2, lon2){
    //算兩點距離
         var R = 6371; //地球半徑km
 var dLat = (lat2-lat1) * Math.PI / 180;
 var dLon = (lon2-lon1) * Math.PI / 180;
 var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(lat1 * Math.PI / 180 ) * Math.cos(lat2 * Math.PI / 180 ) * Math.sin(dLon/2) * Math.sin(dLon/2);
 var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
 var d = R * c;

 return d;//單位km
}

module.exports = {

'js_master' : function (req, res){
    /*
        fs.readFile(__dirname+"/../../assets/indieMusic.json", function (err, da) {
            if (err) {console.log(err);}

            var data = JSON.parse(da.toString());
            data.forEach(function(value, index){
                 console.log(value);
                 Roadpoint.create(value, function(err, roadpoint) {
                            return;
                 });
            });
        });
*/


        fs.readFile(__dirname+"/../../assets/hypage.json", function (err, da) {
            if (err) {console.log(err);}

            var data = JSON.parse(da.toString());
            data.forEach(function(value, index){
                 console.log(value);
                 Roadpoint_longterm.create(value, function(err, roadpoint_longterm) {
                            return;
                 });
            });
        });
},
'test': function(req, res){

    /*比日期大小
var d = new Date("2014/07/07");
var n = d.getTime();
    //if(info===  20140726)
        console.log(d);
        console.log(n);
        */


 //搜尋db
Roadpoint.find( function(err, roadpoint) {
      if (roadpoint) {
        console.log("okkkk");
        var data = roadpoint;
        var now = new Date();//現在日期和時間
        now = now.getTime();//日期物件轉換格式成十進位數字 since 1970/01/01
        console.log(now);
            data.forEach(function(value, index){
                var value_time = new Date (value.time);//db資料轉成Date object
                value_time = value_time.getTime();//日期物件轉換格式成十進位數字
                if(now == value_time){
                            console.log(value);
                }
            })//end forEach
        }
});

    res.end("sda");
},
'check_roadpoint': function (req, res){
    var lat_self = 25,//使用者所在緯度
    lon_self = 121,//使用者所在經度
    rad = 1,//要求半徑km
    result = [];//回傳的結果


//搜尋單日事件
Roadpoint.find( function(err, roadpoint) {
      if (roadpoint) {
        console.log("ok");
        var data = roadpoint;//JSON.parse(roadpoint);

            data.forEach(function(value, index){
                 console.log(index);
                 if( getDistance( lat_self, lon_self, value.latitude, value.longitude)< rad)
                 {
                    result.push(value);
                 }
            });
        }
    });//end Roadpoint.find
//搜尋長期事件
Roadpoint_longterm.find( function(err, roadpoint_longterm) {
      if (roadpoint_longterm) {
        console.log("ok");
        var data = roadpoint_longterm;//JSON.parse(roadpoint);

            data.forEach(function(value, index){
                 console.log(index);
                 if( getDistance( lat_self, lon_self, value.latitude, value.longitude)< rad)
                 {
                    result.push(value);
                 }
            });
        }
});//end Roadpoint_longterm.find


}

};

