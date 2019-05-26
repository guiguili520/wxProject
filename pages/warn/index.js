// pages/warn/index.js
var data = require('../../data/data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
     itemsValue:[{
        value:"私锁私用",
        checked:false,
        color:"#b9dd08"
       }, {
         value: "车牌缺损",
         checked: false,
         color: "#b9dd08"
       }, {
         value: "轮胎坏了",
         checked: false,
         color: "#b9dd08"
       }, {
         value: "车锁坏了",
         checked: false,
         color: "#b9dd08"
       }, {
         value: "违规乱停",
         checked: false,
         color: "#b9dd08"
       }, {
         value: "密码不对",
         checked: false,
         color: "#b9dd08"
       }, {
         value: "刹车坏了",
         checked: false,
         color: "#b9dd08"
       }, {
         value: "其它故障",
         checked: false,
         color: "#b9dd08"
       }, ],
       picUrls:[],
       checkboxValues:[],
       btnColor:'#f2f2f2',
       actionText:'拍摄/相册',
       num:0,
       desc:''     
      
  },
  changeCheckbox: function(e) {
    console.log(e)
    var _value = e.detail.value;
    if (_value.length == 0) {
      this.setData({
        btnColor: '#f2f2f2',
        checkboxValues: []
      })
    } else {
      this.setData({
        checkboxValues: _value,
        btnColor: '#b9dd08'
      })
    }
  },
  clickPhoto:function(){
      wx.chooseImage({
        success: (res)=> {
          console.log(res)
          var _picUrls = this.data.picUrls;
          var _tfs = res.tempFilePaths;
          for(let temp of _tfs){
            _picUrls.push(temp)
            this.setData({
              picUrls:_picUrls,
              actionText:'+'
            })
          }
        },
      })
  },
  delPic:function(e){
    let index = e.target.dataset.index;
    let _picUrls = this.data.picUrls;
    _picUrls.splice(index, 1);
    this.setData({
      picUrls: _picUrls
    })
    if (_picUrls.length == 0) {
      this.setData({
        actionText: '拍摄/相册'
      })
    }
  },
  changeNumber:function(e){
    console.log(e)
    this.setData({
        num:e.detail.value
    })
  },
  changeDesc:function(e){    
    console.log(e)
    this.setData({
        desc:e.detail.value
    })
  },
  submit:function(){
   if(this.data.picUrls.length > 0 && this.data.checkboxValues.length > 0){
      wx.request({
        url: 'https://easy-mock.com/mock/5ce6b76ceb09d13a91198834/example/getSubmit',
        success:(res)=> {

        }
      })
   }else{
      wx.showModal({
        title: '请填写完整的反馈信息',
        content: '谢谢合作',
        confirmText:'去填写',
        cancelText:'忍心离去',
        success:(res)=>{
          console.log(res)
         if(res.confirm){
             
         }else{
           wx.navigateBack({
             delta:1
           })
         }
        }
      })
   }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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