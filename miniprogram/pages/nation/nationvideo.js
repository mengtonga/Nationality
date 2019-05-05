// pages/nation/nation.js
Page({
    data: {
     font:'',
     nationCu:[]
    },


    onLoad: function (options) {

        const db = wx.cloud.database({//获取数据库的引用
          env: 'f-1fcd37'
        })
        db.collection('nationculture').get({//得到环境nationculture
            success: (res) => {
                this.setData({
                    src: res.data[0].src,
                    title: res.data[0].title,
                    text1: res.data[0].text1,
                    text2: res.data[0].text2,
                    text3: res.data[0].text3,
                    nationCu: res.data,
                    font: options.name,
                })
            }
        })
    },

    
})