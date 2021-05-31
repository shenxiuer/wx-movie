// pages/predicted/predicted.js
// import Notify from "@vant/weapp/dist/notify/notify.js";

var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeKey: 0,
    type:11,
    list:[],
    flag:false,
    page:1,
    nextPage:2,
    radio: '1',
    releaseTime:true,
    prePage:0,
    boxoffice:true,
    spring:[],
    string:"?date1=2021-02-11&date2=2021-02-18",
    title:'电影',
    gradientColor: {
      '0%': '#ff6666',
      '100%': '#gf6512',
    },
    avg:1,
    max:200000,
    coverUrl:'http://shenxiaodou.jyzero.club/santi.jpg',
    name:'movies'
  },
  onChange(event) {
    this.setData({
      radio: event.detail,
    });
  },
  radioChange(e) {
    
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    
    this.setData({
      type:e.detail.value
     
    })
     
      
    

    
  },
  navi(e)
  {
    // console.log(e)
    this.setData({
      // words: e.detail,
      
      name:e.detail.name,
      title:e.detail.title
   })

  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
   
  onClick(e) {
    if(e)
    console.log("e1111"+e.currentTarget.dataset.cid)

    var that = this
   
    // console.log(this.data.page)
    // console.log(parseInt(e.currentTarget.dataset.cid))
    // var temp = parseInt(e.currentTarget.dataset.cid)
    if(e)
    {
      console.log("clicke"+e)
      // if((parseInt(e.currentTarget.dataset.cid)==-1)||parseInt(e.currentTarget.dataset.cid==1))
      // {
        // if(this.data.page+parseInt(e.currentTarget.dataset.cid)!=0)
        // {
          if(e.currentTarget.dataset.cid)
          {
            if((parseInt(e.currentTarget.dataset.cid))+this.data.page!=0) 
            this.setData({
            page: this.data.page+parseInt(e.currentTarget.dataset.cid)
            })
          }
        
          else
          {
            this.setData({
              page: 1
          })
          }
        // }
     
      
      }
      else
      {
        this.setData({
          page: 1
      })
    }
    
   
   
   
 
    if(this.data.type==1)
    {
     
     this.setData({
 
      string:"?boxoffice=false&page=" 
     })
       
    }
    else if(this.data.type == 2)
    {

      this.setData({
        
        string:"?releaseTime=false&page=" 
        
       })
      
    }
 
 
    wx.request({
     
      url: app.globalData.predictUrl+that.data.string+that.data.page,
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      
      success: function (res) {
         console.log(res)
         var lis = res.data.records;
         for(var i in lis)
         {
             lis[i].imageName="http://106.54.68.249:10025/movie_picture/"+lis[i].imageName;
             if(lis[i].boxoffice == null)
             lis[i].boxoffice = 0.00
             var k = ( Math.min(lis[i].expectedBoxoffice,lis[i].boxoffice)/Math.max(lis[i].expectedBoxoffice,lis[i].boxoffice)*100).toFixed(2)
             console.log(k)
             if(k==0.00)
             lis[i]['key'] = 100.00
             else 
             lis[i]['key'] = k
         }
          that.setData({
            list:lis,
            page:that.data.page,
            flag:true
          })
       
        
         
      } 
    })
    
   
  },
  onMovieClick(e) {
    if(e)
    console.log("e"+e.currentTarget.dataset.cid)

    var that = this
   
    // console.log(this.data.page)
    // console.log(parseInt(e.currentTarget.dataset.cid))
    // var temp = parseInt(e.currentTarget.dataset.cid)
    if(e)
    {
     
      // if((parseInt(e.currentTarget.dataset.cid)==-1)||parseInt(e.currentTarget.dataset.cid==1))
      // {
        // if(this.data.page+parseInt(e.currentTarget.dataset.cid)!=0)
        // {
          if(e.currentTarget.dataset.cid)
          {
            if((parseInt(e.currentTarget.dataset.cid))+this.data.page!=0) 
            this.setData({
            page: this.data.page+parseInt(e.currentTarget.dataset.cid)
            })
          }
        
          else
          {
            this.setData({
              page: 1
          })
          }
        // }
     
      
      }
      else
      {
        this.setData({
          page: 1
      })
    }
    
   
   
   
 
    if(this.data.type==11)
    {
     
     this.setData({
 
      string:"?date1=2021-02-11&date2=2021-02-18"
     })
       
    }
    else if(this.data.type == 22)
    {

      this.setData({
           
        string:"?date1=2019-09-30&date2=2019-10-08"
        
       })
      
    }  else if(this.data.type == 33)
    {

      this.setData({
           
        string:"?date1=2019-09-14&date2=2019-09-28"
        
       })
      
    }  else if(this.data.type == 44)
    {

      this.setData({
           
        string:"?date1=2019-05-31&date2=2019-06-10"
        
       })
      
    }
 
 
    wx.request({
     
      url: app.globalData.commonUrl+'movieSchedulePage'+that.data.string+'&page='+that.data.page,
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      
      success: function (res) {
         console.log(res)
      
         var lis = res.data.records;
      
         for(var i in lis)
         {
             lis[i].imageName="http://106.54.68.249:10025/movie_picture/"+lis[i].imageName;
             var k = ( Math.min(lis[i].expectedBoxoffice,lis[i].boxoffice)/Math.max(lis[i].expectedBoxoffice,lis[i].boxoffice)*100).toFixed(2)
             console.log(k)
             if(k==0.00)
             lis[i]['key'] = 100.00
             else 
             lis[i]['key'] = k
         }
          
          that.setData({
            list:lis,
            page:that.data.page,
            flag:true
          })
       
        
         
      } 
    })
    
   
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  
    
    console.log(this.data.flag)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
    this.onMovieClick()
   
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