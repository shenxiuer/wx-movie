// pages/analyze/analyze.js
Page({

     /**
      * 页面的初始数据
      */
     data: {
          charts: [{
               id: 'movieTop10',
               name: '电影年度票房TOP10'
             }, {
              id: 'movieScoreTop10',
              name: '电影年度评分TOP10'
            }, {
               id: 'movieType',
               name: '电影类型占比' 
             }, {
               id: 'officeTrend',
               name: '年度总票房趋势'
             }, {
               id: 'Filmmakers',
               name: '影人排行榜rank10'
             }],
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

     open: function (e) {
          wx.navigateTo({
            url: './' + e.target.dataset.chart.id + '/'+e.target.dataset.chart.id
          });
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