// Object 键值对去重；把数组的值存成 Object 的 key 值，比如 Object[value1] = true，在判断另一个值的时候，如果 Object[value2]存在的话，就说明该值是重复的。

var arr = [1, 2, 4, 4, 6, 8, 2, 4]
//将数组转换成对象
			 //利用对象的key值不能重复这一特性
       var toObject = function(array) {
			  var obj = {};
			  for(var i=0,j=array.length;i<j;i++){
			  	obj[array[i]] = true;
			  }
			  return obj;
			}
			
			//再将对象转换成数组
			var toArray = function(obj){
				
				var arr = [];
				for(var i in obj){
					arr.push(Number(i));  // parseInt  \   Number  都可以将字符串转变为数组
				}
				return arr;
			}
			
			//综合前两者，完成去数组重复项方法
			var uiq = function(arr){
				return toArray(toObject(arr));
			}
			var arr1 = uiq(arr);
			console.log(arr1);
