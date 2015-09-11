// 发布数据，向客户端发布何种数据，从这里开始控制。
Meteor.publish('projects',function(){
	return Projects.find();
});