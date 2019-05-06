// import jobStorage from '../../pages/test/test.js'
Page({
	data: {
		pic:[
			{name:"sdf",}
		],
		id: '77',
		job: [],
		savejob: [],
	},
	onLoad: function (options) {
		console.log(wx.getStorageSync('jobData'));
		let savejob = wx.getStorageSync('jobData')//获得缓存
		let index = savejob.length - 1;
		console.log(savejob[index].id);
		let jobid = savejob[index].id
		let temp = jobStorage[jobid] //将获得缓存后匹配的数据放入新的数组
		let job = [];
		job.push(temp);
		this.setData({
			id: index,
			job: job,
		})
	},
})