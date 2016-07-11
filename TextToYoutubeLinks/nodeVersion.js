//Node.js Version

var fs = require('fs')
//replace stuff.html file of your choice, e.g. db.txt, hhh.xml
fs.readFile('stuff.txt','utf-8',function(err, data){
    if(err){
        console.log(err);
        return err;
    }
    db = data.toString()
.split(/host_id">(\w{1,})<|name="name">([\w!@#$%^&*()_+\-=\[\]{};':"\\|,.\/? \u1100-\u11FF\u3130\u318F\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF]{1,})</g)
	.filter(function(x){ return x !== undefined})
	.filter(function(x,i){if(i % 2 == 1) return x})
	.reduce(function(obj,x,i,arr){
		if(i % 2 == 1)
			obj.push({name: arr[i-1],link: 'https://www.youtube.com/watch?v=' + arr[i]})
			
		return obj
	}
	, [])

    
    fs.writeFile('video_links.txt', db.map(x => 'Name: ' + x.name + ' Link: ' + x.link + '\n').join(''),'utf-8',function(err){
        if(err){ console.log(err)
        return err}
    })
})