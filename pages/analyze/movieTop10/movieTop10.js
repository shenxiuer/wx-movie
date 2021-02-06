import * as echarts from '../../../ec-canvas/echarts';

const app = getApp();
 var year =null
let chart = null;
var score = null;
var title = null;
function initChart(canvas, width, height, dpr) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);
  
  var option = {
    title: {
      text: '电影年度评分排行(top10)',
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
      data: ['热度', '评分', ''],
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
        }
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
        name: '评分',
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
var that = this
   
    option.series[1].data=score
 
    option.title.text =  '电影'+year+'年评分排行(top10)'
    option.yAxis[0].data=title
    
    // console.log(option.series[0].data)
    // console.log(option.series[0].data)
    chart.setOption(option,true );
    // clearInterval(interval);
  }, 500)
   
  return chart;
}
 

Page({


  /**
   * 页面的初始数据
   */
  data: {
    mainActiveIndex: 0,
    activeId: null,
    items:[
      {
        // 导航名称
      
            // 名称
            text: '2020',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
 
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: 3,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        dot: true,
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
     
      },
      {
        // 导航名称
      
            // 名称
            text: '2019',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
 
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: 3,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        dot: true,
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
     
      }, {
        // 导航名称
      
            // 名称
            text: '2019',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
 
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: 3,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        dot: true,
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
     
      }, {
        // 导航名称
      
            // 名称
            text: '2019',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
 
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: 3,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        dot: true,
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
     
      }, {
        // 导航名称
      
            // 名称
            text: '2019',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
 
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: 3,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        dot: true,
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
     
      },
    ],
    boxTopYear:'2019',
    title:[],
    score:[],
    ec: {
      onInit: initChart
    },
 
  },
  onChange(event) {
    setTimeout(function() {

    }, 500)
    wx.showToast({
      icon: 'none',
      title: `当前年份：${event.detail}`,
    });
    this.setData({
      boxTopYear:event.detail
    })
    year = this.data.boxTopYear
    this.show()
  },
  show() {
    //      for(var i in this.data.series)
    //      {
    //          console.log(i+" "+this.data.series[i].name)
    //      }
    //    console.log("seies"+this.data.series)
    var that = this
     console.log(this.data.boxTopYear)
     year = this.data.boxTopYear
    wx.request({
      
      url: app.globalData.commonUrl + '/movie/boxTopYear?year='+that.data.boxTopYear,
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },

      success: function (res) {
        console.log(res)
        that.data.list = res.data
        console.log(that.data.list)
        var array = that.data.list
         
   
        for (var i in array) {
          that.data.score.unshift(array[i].score)
          that.data.title.unshift(array[i].title)
          
        }
        
        score =that.data.score
        title =that.data.title
        that.data.score = []
        that.data.title = []

 
      
      }

    })
  }
   
 

  /**
   * 生命周期函数--监听页面加载
   */
  ,
 
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