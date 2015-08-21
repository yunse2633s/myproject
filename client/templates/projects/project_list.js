// 静态模拟数据
// var projectData=[
// 	{
// 		title:'Login register',
// 		url:'http://192.168.1.2'
// 	},
// 	{
// 		title:'Login in',
// 		url:'http://192.168.1.3'
// 	}
// ];
// Template.projectList.helpers({
// 	projects:projectData
// });


// 动态模拟数据
Template.projectList.helpers({
	projects:function(){
		return Projects.find();
	}
	// 客户端执行Projects.find()获取Projects集合中所有数据，并赋值给projects变量
});