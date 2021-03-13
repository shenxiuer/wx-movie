// pages/predicted/predicted.js
// import Notify from "@vant/weapp/dist/notify/notify.js";

var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeKey: 0,
    words:'',
    list:null,
    flag:false,
    page:1,
    nextPage:2,
    prePage:0,
    checked: true,
    amovies:[],
    dmovies:[],
    smovies:[],
    movieId:null,
    type:'movies',
    directorId:null,
    title:'电影',
    name:'movies'
  },
  navi(e)
  {
    console.log(e)
    this.setData({
      // words: e.detail,
     
      name:e.detail.name,
      title:e.detail.title
   })

  },
  onChange({ detail }) {
     // 需要手动对 checked 状态进行更新
     this.setData({ checked: detail });
   },
   
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
     directorId: options.directorId
    })
   
     this.onClick()
  },
   
  onClick(){
    // if(e)
    // console.log("e"+e.currentTarget.dataset.cid)

    var that = this
   
     this.setData({

     })
    
    wx.request({
     
      url: app.globalData.commonUrl+'director/'+that.data.directorId,
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      
      success: function (res) {
    
        console.log(res)
    
        var template = res.data
        var director = template.director
        director.imageName="http://106.54.68.249:10025/person_picture/"+ director.imageName;
        that.setData({
          list:director,
          amovies:template.amovies,
          dmovies:template.dmovies,
          smovies:template.smovies
        })
              
        console.log(that.data.smovies)
      } 
    })
    
    
  },
 
  onReady: function () {
    
  
     
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
    this.onClick()
   
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