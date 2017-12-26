// pages/my/my.js
Page({

  data: {
    my_type:["收藏","我的卡","浦发"],
    member_centre:[{
      pic:"http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
      title:"收藏"
    }, {
      pic: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
      title: "地理"
      }, {
        pic: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
        title: "发现"
    }, {
      pic: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
      title: "订阅"
      }, {
        pic: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
        title: "设置"
      },]
  },
  login(){
    wx.navigateTo({
      url: './login/login',
    })
  }
})