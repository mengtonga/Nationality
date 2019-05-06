// pages/Word/Word.js
var Newsdata = require("../../Homedata/data.js");
Page({

    data: {

    },

    onLoad: function (options) {

        const db = wx.cloud.database({//获取数据库的引用
            env: 'nation-7f5157'
        })
        var data = db.collection('Homedata').get({//得到环境Homedata
            success: (res) => {
                this.setData({
                    image1: res.data[1].wordimage1,
                    image2: res.data[1].wordimage2,
                    image3: res.data[1].wordimage3,
                    text_title1: res.data[1].wordtext[0],
                    text_title2: res.data[1].wordtext[1],
                    text_title3: res.data[1].wordtext[2],
                    text1: res.data[1].wordtext[3],
                    text2: res.data[1].wordtext[4],
                    text3: res.data[1].wordtext[5],
                })
            }
            })
        this.setData({
            image1: Newsdata.Homedata[3].wordimage1,
            image2: Newsdata.Homedata[3].wordimage2,
            image3: Newsdata.Homedata[3].wordimage3,
            text_title1: Newsdata.Homedata[3].wordtext.text_title1,
            text_title2: Newsdata.Homedata[3].wordtext.text_title2,
            text_title3: Newsdata.Homedata[3].wordtext.text_title3,
            text1: Newsdata.Homedata[3].wordtext.text1,
            text2: Newsdata.Homedata[3].wordtext.text2,
            text3: Newsdata.Homedata[3].wordtext.text3
        })
    }

})