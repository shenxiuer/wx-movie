// pages/predicted/predicted.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeKey: 0,
    words:'',
    list:[],
    flag:true,
    page:1
  },
  onChange(e) {
    this.setData({
      words: e.detail,
       
    });}
    ,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onSearch()
  {
    var that = this
    wx.request({
      url: app.globalData.backUrl+'search/movies?page=1&pageSize=10&type=1&words='+this.data.words,
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      
      success: function (res) {
        console.log("successful！")
        var lis = res.data.movies;
        console.log(lis)
        for(var i in lis)
        {
            lis[i].movie.imageName="http://106.54.68.249:10025/movie_picture/"+lis[i].movie.imageName;
        }
          that.setData({
            list: lis,
            page:that.data.page
          })
          
         
      }
    })
    console.log('搜索' + this.data.words);
  },
  onClick(e) {
    var that = this

    console.log(this.data.page)
    console.log(parseInt(e.currentTarget.dataset.cid))
    var temp = parseInt(e.currentTarget.dataset.cid)
    if(this.data.page+parseInt(e.currentTarget.dataset.cid)!=0)
    this.data.page+=parseInt(e.currentTarget.dataset.cid)
    wx.request({
      url: app.globalData.backUrl+'search/movies?pageSize=10&type=1&words='+this.data.words+"&page="+this.data.page,
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      
      success: function (res) {
        console.log("successful！")
        var lis = res.data.movies;
        console.log(lis)
        for(var i in lis)
        {
            lis[i].movie.imageName="http://106.54.68.249:10025/movie_picture/"+lis[i].movie.imageName;
        }
          that.setData({
            list: lis,
            page:that.data.page
          })
          
         
      }
    })
    console.log('搜索' + this.data.words);
  },
  showtime()
  {
    var that = this

    console.log(this.data.page)
    console.log(parseInt(e.currentTarget.dataset.cid))
var temp = parseInt(e.currentTarget.dataset.cid)
    if(this.data.page+temp!=0)
    this.data.page+=parseInt(e.currentTarget.dataset.cid)
    wx.request({
      url: app.globalData.backUrl+'search/movies?page=1&pageSize=10&type=1&words= ',
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      
      success: function (res) {
        that.data.flag=true
        console.log("successful！")
        var lis = res.data.movies;
        console.log(lis)
        for(var i in lis)
        {
            lis[i].movie.imageName="http://106.54.68.249:10025/movie_picture/"+lis[i].movie.imageName;
        }
          that.setData({
            list: lis
          })
          
         
      }
    })
    console.log('搜索' + this.data.words);
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
    
    this.onSearch()
  
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