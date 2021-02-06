import * as echarts from '../../../ec-canvas/echarts';

const app = getApp();
var name = null
var office = null
function initChart(canvas, width, height, dpr) {
  
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);
  var option = {
     title: {
       text: '影人票房排行(top10)',
       left: 'left',
       color:'#37a2da'
     },
     color: ['#37a2da', '#32c5e9', '#67e0e3'],
     tooltip: {
       trigger: 'axis',
       axisPointer: {            // 坐标轴指示器，坐标轴触发有效
         type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
       },
       confine: true
     },
     legend: {
       data: ['热度', '票房(亿)', ''],
       right:'right'
     },
     grid: {
       left: 20,
       right: 20,
       bottom: 15,
       top: 40,
       containLabel: true
     },
     xAxis: [
       {
         type: 'value',
         axisLine: {
           lineStyle: {
             color: '#999'
           }
         },
         axisLabel: {
           color: '#666'
         },
         name:''
       }
     ],
     yAxis: [
       {
         type: 'category',
         axisTick: { show: false },
         data: [],
         axisLine: {
           lineStyle: {
             color: '#999'
           }
         },
         axisLabel: {
           color: '#666'
         }
       }
     ],
     series: [
       {
         name: ' ',
         type: 'bar',
         label: {
           normal: {
             show: true,
             position: 'inside'
           }
         },
         data:null,
         itemStyle: {
           // emphasis: {
           //   color: '#37a2da'
           // }
         }
       },
       {
         name: '票房(亿)',
         type: 'bar',
         stack: '总量',
         label: {
           normal: {
             show: true
           }
         },
         data: null,
         itemStyle: {
           // emphasis: {
           //   color: '#32c5e9'
           // }
         }
       },
       {
         name: '负面',
         type: 'bar',
         stack: '总量',
         label: {
           normal: {
             show: true,
             position: 'left'
           }
         },
         data: null,
         itemStyle: {
           // emphasis: {
           //   color: '#67e0e3'
           // }
         }
       }
     ]
   };
  var interval = setInterval(function() {
     option.series[1].data=[]
     option.series[1].data=office
 

     option.yAxis[0].data=[]
     option.yAxis[0].data=name
//     option.series[0].name= name

   
    chart.setOption(option,true);
//     clearInterval(interval);
  }, 500)
   
  return chart;
}
Page({


  /**
   * 页面的初始数据
   */
  data: {
    ec: {
      onInit: initChart
    },
    office:[],
    name:[],
    type:'/actor',
    boxTop:'/boxTop'
    
  },
  onClick(event) {
     wx.showToast({
       title: `点击标签 ${event.detail.name}`,
       icon: 'none',
     });
   },
   radioChange(e)
   {
     console.log(e)
     switch(e.detail.value)
     {
          case "1":this.setData({
               type:'/actor',
               boxTop:'/boxTop'
          });break;
          case "2":this.setData({
               type:'/director',
               boxTop:'/boxTop'
          });break;
          case "3":this.setData({
               type:'/scenarist',
               boxTop:'/boxTop'
          });break;
          case "4":this.setData({
            type:'/actor',
            boxTop:'/boxFemaleTop'
        });break;
         case "5":this.setData({
          type:'/actor',
          boxTop:'/boxMaleTop'
          });break;

          default:break;
               
     }
     console.log(this.data.type)
   },
  show() {
    //      for(var i in this.data.series)
    //      {
    //          console.log(i+" "+this.data.series[i].name)
    //      }
    //    console.log("seies"+this.data.series)
    var that = this
    wx.request({
      
      url: app.globalData.commonUrl + that.data.type+that.data.boxTop,
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },

      success: function (res) {
        console.log(res)
    
     //    console.log(that.data.list)
        var array = res.data
     //    that.ChartData=[]
        for (var i in array) {
         that.data.office.unshift(array[i].boxoffice/1e4)
          that.data.name.unshift(array[i].name)    

        }
         office =  that.data.office
         name = that.data.name
         that.data.office = []
         that.data.name = []

        console.log(name)
        console.log(office)
        // var option = that.data.ec.onInit.name.getOption();
        // option.series[0].data =  that.ChartData;
        // onInit.setOption(option);
        // console.log("that")
        // console.log(that.ChartData)
        
      
      }

    })
    
   
 
  },
  /**
   * 生命周期函数--监听页面加载
   */
 
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
//     this.show()
 
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
   
     this.show()

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

  
})