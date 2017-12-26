Page({
  data: {
    phone: '',
    password: '',
    _focus:1
  },
  focus_1(e){
    this.setData({
      _focus:1
    })
    console.log(this.data._focus)
  },
  focus_2(e) {
    this.setData({
      _focus: 2
    })
    console.log(this.data._focus)
  },
  // 获取输入账号  
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },

  // 获取输入密码  
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  // 登录  
  login: function () {
    if (this.data.phone.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '请输入信息',
        icon: 'loading',
        duration: 2000
      })
    } else {
      // 这里修改成跳转的页面  
      console.log(this.data)
      wx.showToast({
        title: '登录成功',
        icon: 'success',
        duration: 2000
      })
    }
  }
})  