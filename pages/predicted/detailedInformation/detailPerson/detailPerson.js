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
    scriptwriter:false,
    director:false,
    checked: false,
    amovies:[],
    dmovies:[],
    smovies:[],
    show:false,
    show1:false,
    show2:false,
    movieId:null,
    type:'movies',
    typeWriter:null,
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
     console.log(detail)
     this.setData({
        checked: detail,
        show:detail 
    });
     
   },
   onChange1({ detail }) {
    // 需要手动对 checked 状态进行更新
    console.log(detail)
    this.setData({
       director: detail,
       show1:detail 
   });
    
  }, onChange2({ detail }) {
    // 需要手动对 checked 状态进行更新
    console.log(detail)
    this.setData({
       scriptwriter: detail,
       show2:detail 
   });
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(Object.keys(options))
    var tmp = Object.keys(options)[1]
    tmp = tmp=='directorId'?'actor':tmp
    this.setData({
     directorId: options.directorId,
     typeWriter:tmp
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
     
      url: app.globalData.commonUrl+that.data.typeWriter+'/'+that.data.directorId,
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      
      success: function (res) {
    
        console.log("typeWriter")
         console.log(that.data.typeWriter)
         console.log(that.data.directorId)
    
        var template = res.data
        var usually =null
        if(that.data.typeWriter==='director') usually = template.director
        if(that.data.typeWriter==='scenarist') usually = template.scenarist
        if(that.data.typeWriter==='actor')  usually = template.actor
       if(usually.imageName!=null) usually.imageName="http://106.54.68.249:10025/person_picture/"+ usually.imageName;
        that.setData({
          list:usually,
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