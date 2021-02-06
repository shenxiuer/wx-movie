import * as echarts from '../../../ec-canvas/echarts';

const app = getApp();
var year = null
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
       text: '年度总票房趋势',
       left: 'center'
     },
     color: ["#FF4500", "#67E0E3", "#9FE6B8"],
     legend: {
       data: ['A', 'B', 'C'],
       top: 50,
       left: 'center',
       backgroundColor: 'red',
       z: 100
     },
     grid: {
       containLabel: true
     },
     tooltip: {
       show: true,
       trigger: 'axis'
     },
     xAxis: {
       type: 'category',
       boundaryGap: true,
       data: null,
       // show: false
     },
     yAxis: {
       x: 'center',
       type: 'value',
       title:{
          text:'123',
          left:'left'
       },
       splitLine: {
         lineStyle: {
           type: 'dashed'
         }
       }
       // show: false
     },
     series: [{
       name: null,
       type: 'line',
       smooth: true,
       data: null}
     // }, {
     //   name: 'B',
     //   type: 'line',
     //   smooth: true,
     //   data: [12, 50, 51, 35, 70, 30, 20]
     // }, {
     //   name: 'C',
     //   type: 'line',
     //   smooth: true,
     //   data: [10, 30, 31, 50, 40, 20, 10]
     // }]
     ]
   };
  var interval = setInterval(function() {
 
    option.xAxis.data=year
    option.series[0].data=office
    option.series[0].name= year

   
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
    year:[]
  },

  show() {
    //      for(var i in this.data.series)
    //      {
    //          console.log(i+" "+this.data.series[i].name)
    //      }
    //    console.log("seies"+this.data.series)
    var that = this
    wx.request({
      
      url: app.globalData.commonUrl + '/movie/boxYear',
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },

      success: function (res) {
        // console.log(res)
        that.data.list = res.data
     //    console.log(that.data.list)
        var array = res.data
     //    that.ChartData=[]
    
        for (var i in array) {


         that.data.office.push(array[i].boxoffice)

          that.data.year.push(array[i].year)
      
      

        }
         office =  that.data.office
         year = that.data.year
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
    this.show()
 
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

  
})