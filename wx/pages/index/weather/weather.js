var bmap = require('../../../libs/bmap-wx.min.js');
Page({
  data: {
    ak: "RvVFD8wLWVvLhhicIIygy3pH2AdZQrMZ",
    weatherData: {},
    futureWeather: []
  },
  onLoad: function (options) {
    var that = this;
    var BMap = new bmap.BMapWX({
      ak: that.data.ak
    });
    var fail = function (data) {
      console.log(data);
    };
    var success = function (data) {
      var weatherData = data.currentWeather[0];
      var futureWeather = data.originalData.results[0].weather_data;
      weatherData.city = weatherData.currentCity
      weatherData.date = weatherData.date.substr(14, 1)
      that.setData({
        weatherData: weatherData,
        futureWeather: futureWeather
      });
    }
    BMap.weather({
      fail: fail,
      success: success
    });
  }

})  