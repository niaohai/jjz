//index.js
//获取应用实例
const app = getApp()

Page({
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  data: {
    imgUrls: [
  'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,

    under_pic:[{
      pic_src: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      title:'今日天气'
    }, {
      pic_src: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      title: '查积分'
      }, {
        pic_src: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        title: '银行秒杀'
    }, {
      pic_src: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      title: '我的订单'
    },],
    type_choose:["全部","活动","美食","咖啡","西点","电影"],
    event:[{
      title:"您的权益已上线",
      pic:"http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"
    },{
        title: "双十一来啦,快快召集小伙伴吃煌上煌了",
        pic: "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"
    },{
        title: "光棍节浪够了么?不要怕,还有双十二哦",
        pic: "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"
    }],
    _num: 0,
  },
  item_choose(e){
    this.setData({
      _num: e.target.dataset.num
    }) 
  },
  test_weather(){
    wx.navigateTo({
       url: './weather/weather',
      // url: '../map/map',
    })
  }
})
