//路由配置中，规定layout模板名为 layout
// 添加路由包， meteor add iron:router
Router.configure({
	layoutTemplate:'layout',
	loadingTemplate:'waiting',	//加载时的等待
	notFoundTemplate:'amen',	//路由错误时的提示
	waitOn:function(){
		console.log('hello world');
	}
});

//路由器定义：指定“/ ” 指定的模板名称
Router.route('/',{name:'projectList'});

Router.route('/test',{name:'test'});

// 传递参数给 模板名为projectPage模板
// 
Router.route('/projects/:_id',{
	name:'projectPage',
	data:function(){return Projects.findOne(this.params._id);}

});
//
// 路由正确，但没有数据时的解决办法
Router.onBeforeAction('dataNotFount',{only:'projectPage'})