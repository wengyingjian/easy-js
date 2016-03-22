	var $ =  new Object();
	$.create = new Object();
	$.create.form = new Object();

	//创建指定标签，第一个参数为标签字符串，后面的两两一组，为属性与属性值
	$.create.element=function (elementTag){
		var element = document.createElement(elementTag);
		for(var i=1;i<arguments.length;){
			element[arguments[i]]=arguments[i+1];
			i=i+2;
		}
		return element;
	}
	//创建隐藏的”name“＝key，“value”＝value的标签
	$.create.input = function(key,value){
		return $.create.element("input","text","hidden","name",key,"value",value);
	}
	$.create.form = function(action,method){
		return $.create.element("form","action",action,"method",method);
	}
	$.create.form.post = function (action){
		return $.create.form(action,"post");
	}
	//demo-->$.post("http://localhost:8080/","zhangsan","lisi");
	$.post = function (url){
		var form = $.create.form.post(url);
		for(var i=1;i<arguments.length;){
			var element = $.create.input(arguments[i],arguments[i+1]);
			form.appendChild(element);
			i=i+2;			
		}
		form.submit();
	}
	
