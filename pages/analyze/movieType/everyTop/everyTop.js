import * as echarts from '../../../../ec-canvas/echarts';

const app = getApp();
 
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
 
    option.series[1].data=score
 
     option.title.text = app.globalData.movieType+"电影评分排行Top10"
    option.yAxis[0].data=title
    
    // console.log(option.series[0].data)
    // console.log(option.series[0].data)
    chart.setOption(option );
    clearInterval(interval);
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
    title:[],
    score:[],
    movieType:'',
    ec: {
      onInit: initChart
    },
    option1: [
      { text: '全部商品', value: 0 },
      { text: '新款商品', value: 1 },
      { text: '活动商品', value: 2 },
      { text: '活动商品', value: 2 },
      { text: '活动商品', value: 2 },
      { text: '活动商品', value: 2 },
      { text: '活动商品', value: 2 },
      { text: '活动商品', value: 2 },
      { text: '活动商品', value: 2 },
    ],
    option2: [
      { text: '默认排序', value: 'a' },
      { text: '好评排序', value: 'b' },
      { text: '销量排序', value: 'c' },
    ],
    value1: 0,
    value2: 'a',
  },
  show() {
    //      for(var i in this.data.series)
    //      {
    //          console.log(i+" "+this.data.series[i].name)
    //      }
    //    console.log("seies"+this.data.series)
    this.setData({
         movieType:  app.globalData.movieType
    })
    console.log(this.data.movieType)
    var that = this
     
    wx.request({
      
      url: app.globalData.commonUrl+"/movie/boxTopType?type=" +that.data.movieType,
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
        console.log(score)
        // console.log(title)
        // console.log(that.data.ec)
        // var option = that.data.ec.onInit.name.getOption();
        // option.series[0].data =  that.ChartData;
        // onInit.setOption(option);
        // console.log("that")
        // console.log(that.ChartData)
        
      
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
    // this.show()
 

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