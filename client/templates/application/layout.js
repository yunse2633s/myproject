Template.layout.helpers({
	projectTitle:function(){
		return Session.get('projectTitle');
	}
});
// 在浏览器控制台 可以使用Session.set('projectTitle','标题名称') 赋值。