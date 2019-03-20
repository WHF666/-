// pages/post/post.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 组件所需的参数
    nvabarData: {
      showCapsule: 1, //是否显示左上角图标   1表示显示    0表示不显示
      title: '(*/ω＼*)', //导航栏 中间的标题  

  },
    // 此页面 页面内容距最顶部的距离
    height: app.globalData.height * 2 + 20,
  },
  onLoad() {
    console.log(this.data.height)
  },
  /**
   * counter事件
   */
  counter:function(){
    wx.redirectTo({
      url: '../index/index',
    })
  },
  /**
   * beauty事件
   */
  beauty:function(){
    wx.redirectTo({
      url: '../beauty/beauty',
    })
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