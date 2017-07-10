	Vue.filter("RMB",function(value){
		value = value/8
		return Math.round(value)
	})

	Vue.filter('custome',function(value){
		value = value.toString();
		var result  = "元";
		var count = 0;//个，十，白，千
		var con = 0;//万、亿、万亿、亿亿
		var hidden = 0;
		for (var i = value.length-1; i > -1; i--) {
			var Chinese = ["零","一","二","三","四","五","六","七","八","九"];
			var unit1 = ["十","百","千"]
			var unit2 = ["万","亿","万亿","亿亿"];
			var chi = Chinese[parseInt(value.charAt(i))];

			if(chi!="零"){
			    if(count>3){
				    con++;
					result = unit2[con-1] + result;
					count = 0;
				}
				if(count>0){
					result =  unit1[count-1] + result;
				}
				count++;
				result = chi + result;
			}else{
				if(hidden=0){
					result = chi + result;
				}
				if(count>3){
					con++;
					count = 0;
				}
				count++;
			}
		}
		return result;
	})

	var t001 = new Vue({
		el: '#t001',
		data: {
			dollar: 15649854899466154986
		}
	})