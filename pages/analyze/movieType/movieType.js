import * as echarts from '../../../ec-canvas/echarts';

const app = getApp();
var app1 = new Array()
var parameter = app.globalData.parameter 
var show1;
var ss;

//页外页面指针
let that =null;
function exc(){
 
     
 
}
 
let chart = null;

function initChart2(canvas, width, height, dpr) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    color: ['#37a2da', '#32c5e9', '#67e0e3'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      },
      confine: true
    },
    legend: {
      data: ['热度', '正面', '负面']
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
        data: ['汽车之家', '今日头条', '百度贴吧', '一点资讯', '微信', '微博', '知乎'],
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
        name: '热度',
        type: 'bar',
        label: {
          normal: {
            show: true,
            position: 'inside'
          }
        },
        data: [300, 270, 340, 344, 300, 320, 310],
        itemStyle: {
          // emphasis: {
          //   color: '#37a2da'
          // }
        }
      },
      {
        name: '正面',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true
          }
        },
        data: [120, 102, 141, 174, 190, 250, 220],
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
        data: [-20, -32, -21, -34, -90, -130, -110],
        itemStyle: {
          // emphasis: {
          //   color: '#67e0e3'
          // }
        }
      }
    ]
  };

  chart.setOption(option);
  return chart;
}
function initChart(canvas, width, height, dpr) {
  
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    title: {
      text: '电影类型占比(top20)',
      left: 'left'
    },
    backgroundColor: "#fff",
    color: ["#37A2DA", "#32C5E9", "#67E0E3", "#91F2DE", "#FFDB5C", "#FF9F7F"],
    series: [{
      label: {
        normal: {
          fontSize: 15
        }
      },
      
          
      type: 'pie',
      center: ['50%', '40%'],
      radius: ['40%', '60%'],
      title:'电影类型百分比',
      // data: [{
      //   value: 55,
      //   name: '北京'
      // }, {
      //   value: 20,
      //   name: '武汉'
      // }, {
      //   value: 10,
      //   name: '杭州'
      // }, {
      //   value: 20,
      //   name: '广州'
      // }, {
      //   value: 38,
      //   name: '上海'
      // }]
      data:null
    }]
  };
  chart.on('click', function(param) {
    console.log(param.data.name );
    that.setData({
      ss:'noshow',show: true,
   
  });
    app.globalData.movieType = param.data.name ;
    console.log(app.globalData.movieType+"  movieType")
  wx.navigateTo({
    url: './everyTop/everyTop'
  });
   
});
  var test = function(){
    console.log('a')
}
  var interval = setInterval(function() {
    console.log(parameter)
    option.series[0].data=parameter
    app.globalData.parameter += 5
    // console.log(option.series[0].data)
    // console.log(option.series[0].data)
    chart.setOption(option,true);
    clearInterval(interval);
  }, 500)
   
  return chart;
}
Page({


  /**
   * 页面的初始数据
   */
  data: {
    url:'',
    ec: {
      onInit: initChart
    },
    ec2: {
      onInit: initChart2
    },
    show: show1,
    ss:ss,
    ChartData:[
      {name:'t1',value:100},
      {name:'t2',value:200},
      {name:'t3',value:300}
    ]
  },
  onClickShow() {
 
    this.setData({
      ss:'noshow',show: true
    });
  },

  onClickHide() {
    
       this.setData({    ss:'show',show: false });
  },
  noop() {},
  show() {
    //      for(var i in this.data.series)
    //      {
    //          console.log(i+" "+this.data.series[i].name)
    //      }
    //    console.log("seies"+this.data.series)
    var that = this
    wx.request({
      
      url: app.globalData.commonUrl + '/movie/typeCount',
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },

      success: function (res) {
        // console.log(res)
        that.data.list = res.data
        // console.log(that.data.list)
        var array = that.data.list
        that.ChartData=[]
        console.log(array)
        var j = 0;
        for (var i in array) {
 
          that.ChartData.unshift({
            
            value: array[i] / 5888 * 100,
            name: i,
            url:j,
            index:j,
          })
          j++;
      
      

        }
        parameter=that.ChartData
        // console.log(that.data.ec)
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
    this.show()
 

  },
  onLoad: function ()
  {
    that =this;   //页外保存page指针
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
    that =null;   //记得释放
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