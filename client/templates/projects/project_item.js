Template.projectItem.helpers({
	//定义数据 为匿名函数;Template.模板名称.helpers();
	domain:function(){
		var a=document.createElement('a');	//获取a标签
		a.href=this.url;	//this是调用postItem的元素
		return a.hostname;
	}
});