const app = getApp();
wx.cloud.init({
  traceUser: true
})
const db = wx.cloud.database({
  env: 'f-1fcd37'
});
const information_food = db.collection('information_food');
Page({
  data: {
    img: '',
    font:'',
    inform:[],
  },
  onLoad: function (options) {
    this.setData({
      img:options.img,
      font:options.name
    })
    information_food.get({
      success: res => {
        this.setData({
          inform: res.data,
        })
        
      }
    })
  }
})