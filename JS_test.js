//js的构造函数:
// var Person = function(name){
// 	this.name = name;
// 	// this.say = function(){
// 	// 	return "I am " + this.name;
// 	// }
// 	// return this;
// };
// Person.prototype.say = function(){
// 	return "I am " + this.name;
// }
// var aPerson = new Person("aPerson");
// console.log(aPerson.say());



//未使用new,this指向全局变量:
// function Person(){
// 	if(!(this instanceof Person))
// 		return new Person();
// 	this.name = "aPerson";
// }
// var aPerson = Person();
// console.log(aPerson.name);



//数组的不同声明方法:
// var arr_01 = [8];
// console.log(arr_01.length);
// console.log(arr_01[0]);

// var arr_02 = new Array(8);
// console.log(arr_02.length);
// console.log(arr_02[0]);



//闭包:

//例一:
// function a(){
// 	var i=0;
// 	function b(){
// 		console.log(++i);
// 	}
// return b;
// }0
// var c=a();
// c();
// c();

//例二:
// var a = 1
// function f(b) {
//   return function g(c) {
//     return function h(d) {
//       return a + b + c + d
//     }
//   }
// }
// var add2 = f(2)
// var add4 = add2(2)
// var add5 = add2(3)
// var r1 = add4(10)
// var r2 = add5(10)
// console.log(r1,r2)



//函数的重定义:
// var fun = function(){
// 	console.log("function");
// 	fun = function(){
// 		console.log("function again");
// 	}
// }

// var another_fun = fun;
// another_fun();
// another_fun();

// fun();
// fun();



//即时函数:
// (function(){
// 	console.log(1);
// }());
// (function(){
// 	console.log(2);
// }());
// (function(){
// 	console.log(3);
// }());

// (function(time){
// 	console.log(time);
// }(new Date()));

// var result = function(time){
// 	return time;
// }(new Date());
// console.log(result);

// var result = function(){
// 	var value = 1;
// 	console.log(value);
// 	return function(){
// 		console.log(++value);
// 	};
// }();
// result();
// result();
// result();
// result();




//字符串的方法:

//  toUpperCase():
// 	作用:    所有字母转换为大写.
// 	返回值:      新的字符串.  
// 	参数:            无.      
//  原字符串:      无变化.
// var str = "avmvm";
// console.log(str.toUpperCase());
// console.log(str);


//  toLowerCase():
// 	作用:    所有字母转换为大写.
// 	返回值:      新的字符串.  
// 	参数:            无.           
//  原字符串:      无变化. 
// var str = "SFSFaA";
// console.log(str.toLowerCase());
// console.log(str);


//  concat(str):
//  作用:     拼接两串川字符串.
//  返回值:      新的字符串.  
//  参数:      欲拼接的字符串.      
//  原字符串:      无变化.  
// var str_01 = "abc";
// var	str_02 = "def";
// var str = str_01.concat(str_02);
// console.log(str_01);
// console.log(str_02);
// console.log(str);


//  indexOf(ch):
//  作用:     返回首个匹配子字符串的首索引;
//			   	     无则返回-1.
//  返回值:           索引或-1.  
//  参数:         欲查找的子字符串.      
//  原字符串:          无变化.
// var str = "aac";
// var	ch = "ac";
// var pos = str.indexOf(ch);
// console.log(pos);
// console.log(str);


//  lastIndexOf(ch):
//  作用:     返回最后匹配子字符串的首索引;
//			         无则返回-1.
//  返回值:           索引或-1.  
//  参数:         欲查找的子字符串.      
//  原字符串:          无变化.
// var str = "aac";
// var	ch = "a";
// var pos = str.lastIndexOf(ch);
// console.log(pos);
// console.log(str);


//  charAt(num):
//  作用:      返回该索引对应的字符;
//  返回值:         匹配字符.  
//  参数:       	字符索引.      
//  原字符串:        无变化.
// var str = "aac";
// var	num = 2;
// var ch = str.charAt(num);
// console.log(ch);
// console.log(str);


//  charCodeAt(num):
//  作用:      返回该索引对应字符的Unicode码;
//  返回值:         十进制的Unicode码.  
//  参数:       		字符索引.      
//  原字符串:        	 无变化.
// var str = "aa四c";
// var	num = 2;
// for(var i = 0; i<str.length; i++)
//  console.log(str.charCodeAt(i));
// console.log(str);


//  fromCharCode(num,num...):
//  作用:      静态方法,Unicode码返回对应的字符串;
//  返回值:         	 字符串.  
//  参数:       		Unicode码.      
//  原字符串:        	   无.
// var str = String.fromCharCode(87,101,98);
// console.log(str);


//  match(regexp || str):
//  作用:      输入检索的值或正则表达式,
//			  返回一个包含结果信息的数组.
//  返回值:      		数组.  
//  参数:          值或正则表达式.      
//  原字符串:          无变化.
//  注:  	  全局检索不返回位置及字符信息.
// var str = "231aa四c";
// var	ch = "四";
// console.log(str.match("a"));
// var result = str.match(/[a-z]/g);
// console.log(result);
// console.log(str);


//  search(regexp):
//  作用:      查找第一个匹配子字符串的首位置
//  返回值:         		索引.  
//  参数:           	 正则表达式.      
//  原字符串:              无变化.
//  注:  	  	       忽略全局匹配(g).
// var str = "231aa四c";
// var result = str.search(/[a-z]/g);
// console.log(result);
// console.log(str);


//  replace(regexp || str, str):
//  作用:      		替换符合条件的字符串
//  返回值:         	 新的字符串.  
//  参数:     正则表达式(或字符串)与替代字符串.
//  原字符串:              无变化.
// var str = "231aa四c";
// var result = str.replace(/[a-z]/g,"xx");
// console.log(result);
// console.log(str);


//  trim():
//  作用:      		  除末尾空格.
//  返回值:           新的字符串.  
//  参数:     			  无.
//  原字符串:           无变化.
// var str = "23 1 a a 四c   ";
// var result = str.trim();
// console.log(result+"end");
// console.log(str+"end");


//  split(regexp || str,limit):
//  作用:      	  按给定字符分离字符串,
//				并返回分离后的字符串数组.
//  返回值:            字符串数组.  
//  参数:      正则(或字符串),数组长度(可选).
//  原字符串:            无变化.
// var str = "23>>1>aa四>c";
// var result_01 = str.split(">");
// var result_02 = str.split(/>/g,2);
// console.log(result_01);
// console.log(result_02);
// console.log(str);


//  slice(begin,end):
//  作用:     提取开始索引到结束索引前一位;
//					  组成的字符串;
//  返回值:              字符串.
//  参数:      		开始索引,结束索引.
//  原字符串:            无变化.
//  注: 			   参数可为负.
// var str = "231aa四c";
// var result_01 = str.slice(0,2);
// var result_02 = str.slice(-2,-1);
// console.log(result_01);
// console.log(result_02);
// console.log(str);


//  substring(begin,end):
//  作用:     提取开始索引到结束索引前一位;
//					  组成的字符串;
//  返回值:              字符串.
//  参数:      		开始索引,结束索引.
//  原字符串:            无变化.
//  注: 			  参数不可为负.
// var str = "231aa四c";
// var result_01 = str.substring(0,2);
// var result_02 = str.substring(-2,-1); //错误.
// console.log(result_01);
// console.log(result_02);
// console.log(str);


//  substr(num,length):
//  作用:       提取从索引到字符末尾的字符串.
//  返回值:               字符串.
//  参数:      	   	  索引,长度(可选)
//  原字符串:             无变化.
//  注: 		 	未标准化,不推荐使用
// var str = "231aa四c";
// var result_01 = str.substr(2);
// var result_02 = str.substr(-4,3);
// console.log(result_01);
// console.log(result_02);
// console.log(str);


//数组的方法:

//  join(str):
//  作用:          合并数组并返回字符串.
//  返回值:               字符串.
//  参数:      	   	      分隔符.
//  原数组:               无变化.
//  注: 		 未引入参数默认用逗号分隔.
// var arr = [1,2,3];
// var result = arr.join("-");
// console.log(result);
// console.log(arr);

//  concat(arr):
//  作用:              合并两个数组.
//  返回值:            合并后的数组.
//  参数:      	   	       数组.
//  原数组:               无变化.
// var arr_01 = [1,2,3];
// var arr_02 = [4,5,6]
// var result = arr_01.concat(arr_02);
// console.log(result);
// console.log(arr_01);


//  concat(arr):
//  作用:              合并两个数组.
//  返回值:            合并后的数组.
//  参数:      	   	       数组.
//  原数组:               无变化.
// var arr_01 = [1,2,3];
// var arr_02 = [4,5,6];
// var result = arr_01.concat(arr_02);
// console.log(result);
// console.log(arr_01);


//  pop():
//  作用:         删去并返回最后一位元素.
//  返回值:            最后一位元素.
//  参数:      	   	        无.
//  原数组:          删去最后一位元素.
// var arr = [1,2,3];
// var result = arr.pop();
// console.log(result);
// console.log(arr);


//  push(element):
//  作用:        在末尾添加一位元素并返回当前长度.
//  返回值:                 新的长度.
//  参数:      	   	          元素.
//  原数组:             末尾添加一位元素.
// var arr = [1,2,3];
// var result = arr.push(5);
// console.log(result);
// console.log(arr);

//  shift():
//  作用:          删去并返回头一位元素.
//  返回值:             头一位元素.
//  参数:      	   	        无.
//  原数组:           删去头一位元素.
// var arr = [1,2,3];
// var result = arr.shift();
// console.log(result);
// console.log(arr);

 // unshift(element):
 // 作用:        在开头添加一位元素并返回当前长度.
 // 返回值:                 新的长度.
 // 参数:      	   	          元素.
 // 原数组:             开头添加一位元素.
// var arr = [1,2,3];
// var result = arr.unshift(5);
// console.log(result);
// console.log(arr);


 // reverse():
 // 作用:             逆序当前数组的元素
 // 返回值:             当前数组的引用.
 // 参数:      	   	          无.
 // 原数组:      		     逆序
// var arr = [7,4,7,6];
// var result = arr.reverse();
// result[1] = 22;
// console.log(result);
// console.log(arr);



 // sort(callback):
 // 作用:              重排序当前数组的元素
 // 返回值:               当前数组的引用.
 // 参数:      	   	         回调函数.
 // 原数组:      重排列,无回调函数时按Unicode码排序
 // 回调函数的参数:
 // (thisValue,nextValue);

// var arr_01 = [1,7,3,6,4,545];
// var result_01 = arr_01.sort();
// console.log(result_01);
// console.log(arr_01);

// var arr_02 = [1,7,3,6,4,545];
// var cmp = function(num_01,num_02){
// 	return num_01-num_02;
// }
// var result_02 = arr_02.sort(cmp);
// console.log(result_02);
// console.log(arr_02);


 // copyWithin(target,start,end):
 // 作用:          移位覆盖目标索引与其后的数.
 // 返回值:             当前数组的引用.
 // 参数:      	   目标索引,开始索引,结束索引.
 // 原数组:      		 被目标段覆盖.
// var arr = [1,2,3,4,5,6,7,8,9,10];
// var result = arr.copyWithin(2,4,6);
// result[0] = 1100;
// console.log(result);
// console.log(arr);


 // fill(element,start,end):
 // 作用:       用一个元素覆盖目标索引至结束索引前一位的数.
 // 返回值:             	当前数组的引用.
 // 参数:      	   	    元素,开始索引,结束索引.
 // 原数组:      	    	被参数元素覆盖.
// var arr = [1,2,3,4,5,6,7,8,9,10];
// var result = arr.fill(2,4,6);
// result[0] = 1100;
// console.log(result);
// console.log(arr);


 // slice(start,end):
 // 作用:      提取开始索引到结束索引前一位;
 //					   组成的数组;
 // 返回值:            	  数组.
 // 参数:      	  	开始索引,结束索引.
 // 原数组:         	 无变化.
// var arr = [1,2,3,4,5,6,7,8,9,10];
// var result = arr.slice(2,4);
// console.log(result);
// console.log(arr);


 // splice(start,count,new):
 // 作用:      裁剪开始索引及后的count-1位;
 //					 返回其组成的数组;
 // 返回值:             裁剪掉数组.
 // 参数:      开始索引,数量,替代元素(可选).
 // 原数组:        除去(替换)裁剪元素.
// var arr = [1,2,3,4,5,6,7,8,9,10];
// var result = arr.splice(2,2,22,22,55);
// console.log(result);
// console.log(arr);


 // includes(element):
 // 作用:        检索数组是否包含该元素.
 // 返回值:            	Boolean值.
 // 参数:      	  		  元素.
 // 原数组:         	 无变化.
// var arr = [1,2,3,4,5,6,7,8,9,10];
// var result = arr.includes(4);
// console.log(result);
// console.log(arr);


 // indexOf(element):
 // 作用:        检索数组是否包含该元素.
 // 返回值:      首匹配元素的索引(或-1).
 // 参数:      	  		  元素.
 // 原数组:         	 无变化.
// var arr = [1,2,3,4,5,6,7,8,9,10];
// var result = arr.indexOf(4);
// console.log(result);
// console.log(arr);


 // lastIndexOf(element):
 // 作用:        检索数组是否包含该元素.
 // 返回值:      末匹配元素的索引(或-1).
 // 参数:      	  		  元素.
 // 原数组:         	 无变化.
// var arr = [1,2,3,4,5,4,7,8,9,10];
// var result = arr.lastIndexOf(4);
// console.log(result);
// console.log(arr);


 // find(callback,thisValue(可选,做this的值)):
 // 作用:           迭代寻找单个符合条件的元素.
 // 返回值:          首元素的值(或undefined).
 // 参数:      	   	         回调函数.
 // 原数组:      			  无变化.
 // 回调函数的参数:
 // (currentValue,currentIndex(可选),arr(可选));

// var arr = [1,7,3,6,4,545];
// var jud = function(ele){
// 	if(ele>5) return ele;
// }
// var result = arr.find(jud);
// console.log(result);
// console.log(arr);


 // filter(callback,thisValue(可选,做this的值)):
 // 作用:          迭代寻找所有符合条件的元素.
 // 返回值:       匹配元素组成的数组(或空数组).
 // 参数:      	   	       回调函数.
 // 原数组:      			无变化.
 // 回调函数的参数:
 // (currentValue,currentIndex(可选),arr(可选));

// var arr = [1,7,3,6,4,545];
// var jud = function(ele){
// 	if(ele>5) return ele;
// }
// var result = arr.filter(jud);
// console.log(result);
// console.log(arr);


 // findIndex(callback,thisValue(可选,做this的值)):
 // 作用:             迭代寻找符合条件的元素.
 // 返回值:             首元素的索引(或-1).
 // 参数:      	   	         回调函数.
 // 原数组:      			  无变化.
 // 回调函数的参数:
 // (currentValue,currentIndex(可选),arr(可选));

// var arr = [1,7,3,6,4,545];
// var jud = function(ele){
// 	if(ele>5) return ele;
// }
// var result = arr.findIndex(jud);
// console.log(result);
// console.log(arr);


 // forEach(callback,thisValue(可选,做this的值)):
 // 作用:             遍历数组并执行回调函数.
 // 返回值:                 undefined.
 // 参数:      	   	         回调函数.
 // 原数组:      		   遍历后的数组.
 // 回调函数的参数:
 // (currentValue,currentIndex(可选),arr(可选));

// var arr = [1,7,3,6,4,545];
// var add = function(value,n,arr){
// 	arr[n] = value + 8;
// }
// var result = arr.forEach(add);
// console.log(result);
// console.log(arr);


 // map(callback,thisValue(可选,做this的值)):
 // 作用:             遍历数组并执行回调函数.
 // 返回值:              返回值组成的数组.
 // 参数:      	   	         回调函数.
 // 原数组:      		   遍历后的数组.
 // 回调函数的参数:
 // (currentValue,currentIndex(可选),arr(可选));

// var arr = [1,7,3,6,4,545];
// var add = function(value,n,arr){
// 	arr[n] = value + 8;
// 	return value + 16;
// }
// var result = arr.map(add);
// console.log(result);
// console.log(arr);


 // every(callback,thisValue(可选,做this的值)):
 // 作用:           遍历数组并用回调函数进行检测.
 // 返回值:                 Boolean值.
 // 参数:      	   	        回调函数.
 // 原数组:      		     无变化.
 // 注: 				    一假即假.
 // 回调函数的参数:
 // (currentValue,currentIndex(可选),arr(可选));

// var arr = [1,7,3,6,4,545];
// var jud = function(value){
// 	return value > 8;
// }
// var result = arr.every(jud);
// console.log(result);
// console.log(arr);


 // some(callback,thisValue(可选,做this的值)):
 // 作用:           遍历数组并用回调函数进行检测.
 // 返回值:                 Boolean值.
 // 参数:      	   	        回调函数.
 // 原数组:      		     无变化.
 // 注: 				    一真即真.
 // 回调函数的参数:
 // (currentValue,currentIndex(可选),arr(可选));

// var arr = [1,7,3,6,4,545];
// var jud = function(value){
// 	return value > 8;
// }
// var result = arr.some(jud);
// console.log(result);
// console.log(arr);


 // reduce(callback,initialValue(初值,可选)):
 // 作用:          从左往右归并数组.
 // 返回值:           	 值.
 // 参数:      	   	  回调函数.
 // 原数组:      	   无变化.
 // 回调函数的参数:
 // (total,currentValue,currentIndex(可选),arr(可选));
 
// var arr = [1,7,3,6,4,545];
// var sum = function(total,value){
// 	return value + total;
// }
// var result = arr.reduce(sum);
// console.log(result);
// console.log(arr);


 // reduceRight(callback,initialValue(初值,可选)):
 // 作用:          从右往左归并数组.
 // 返回值:           	 值.
 // 参数:      	   	  回调函数.
 // 原数组:      	   无变化.
 // 回调函数的参数:
 // (total,currentValue,currentIndex(可选),arr(可选));

// var arr = [1,7,3,6,4,545];
// var sum = function(total,value){
// 	return total + "," + value.toString();
// }
// var result = arr.reduceRight(sum);
// console.log(result);
// console.log(arr);