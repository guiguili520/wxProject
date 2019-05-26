// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      latitude:0,
      longitude:0
  },
  bindcontroltap:function (e){
      switch(e.controlId){
        case 1 :
           this.movetoCenter();
           break;
        case 2 :
           if(this.timer){
             wx.navigateBack({
               delta:1,
             })
           }else{
             wx.scanCode({
               success: () => {
                 wx.showLoading({
                   title: '正在获取密码',
                 })
                 wx.request({
                   url: 'https://www.easy-mock.com/mock/5ce6b76ceb09d13a91198834/example/getPassword',
                   success: (res) => {
                     wx.hideLoading();
                     wx.redirectTo({
                       url: '../scanResult/index?getPassword=' + res.data.data.Password + '&number=' + res.data.data.Number + '',
                       success: (res) => {
                         wx.showToast({
                           title: '获取密码成功',
                           duration: 1000
                         })
                       }
                     })
                   }
                 })
               },
               fail: () => {

               }
             })
           }
           break;
        case 3 :
           wx.navigateTo({
             url: '../warn/index',
           })
           break;
        case 4 :
           wx.navigateTo({
             url: '../my/index',
           })
      }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.time)
    this.timer = options.time;
      wx.getLocation({
        type: 'gcj02',
        success: (res)=> {
          console.log(res)
          this.setData({
            latitude:res.latitude,
            longitude:res.longitude
          })
        },
      })
      wx.getSystemInfo({
        success: (res)=> {
          this.setData({
            controls:[{
              id:1,
              iconPath:"/static/image/localhost.png",
              position:{
                width:70,
                height:70,
                left:15,
                top:res.windowHeight - 100
              },
              clickable:true
            },{
              id:2,
              iconPath:"/static/image/1.png",
              position:{
                width:105,
                height:80,
                top:res.windowHeight - 110,
                left:res.windowWidth/2 - 45
              },
              clickable:true
            },{
                id:3,
                iconPath:"/static/image/3.png",
                position:{
                  width:70,
                  height:70,
                  top:res.windowHeight - 100,
                  left:res.windowWidth - 85
                },
                clickable: true
              }, {
                id: 4,
                iconPath: "/static/image/4.png",
                position: {
                  width: 100,
                  height: 100,
                  top: res.windowHeight - 175,
                  left: res.windowWidth - 100
                },
                clickable: true
              }, {
                id: 5,
                iconPath: "/static/image/5.png",
                position: {
                  width: 35,
                  height: 70,
                  top: res.windowHeight/2 - 55,
                  left: res.windowWidth/2 - 17
                }
            }]
          })
        },
      })
      
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  movetoCenter:function() {
    this.mapctx.moveToLocation();
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
     this.mapctx = wx.createMapContext("ofo-map");
     this.movetoCenter();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})