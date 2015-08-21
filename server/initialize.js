if(Projects.find().count() === 0){
	Projects.insert({
		title:'login in',
		url:'http://192.168.1.2'
	});

	Projects.insert({
		title:'login out',
		url:'http://192.168.1.3'
	});
}