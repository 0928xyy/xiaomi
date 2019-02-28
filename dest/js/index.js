		var deff = $.ajax({
			type:"get",
			url:"../json/index.json",
			async:true
		});
		
		deff.done(function(json){
 			var title = "";
			var str = "";
			for(var attr in json){
				title += `<li cname = ${attr}><a>${json[attr].name}</a></li>`;
				for(var i = 0 ; i < json[attr].list.length; i++){
 					var pro = json[attr].list[i];
  					   str += `<ol>
					             	 <li>
					             	 		<img src="../img/${pro.src}" alt="" />
					             	 		<b>${pro.name}</b>
					             	 		<span>${pro.price}</span>
					             	 </li>
             	                </ol>`;
 				}
				
 			}
			$(".conter-center ul").html(title);
			$('.Te').html(str);
			$(".conter-center ul li").mouseenter(function(){
 				var cname = $(this).attr("cname");
				var strCon = "";
				for( var i = 0 ; i <json[cname].list.length ; i++ ){
					var pro = json[cname].list[i];
 					strCon += `<ol>
				             	 <li>
				             	 		<img src="../img/${pro.src}" alt="" />
				             	 		<b>${pro.name}</b>
				             	 		<span>${pro.price}</span>
				             	 	</li>
             	                </ol>`;
				   }
 				$(".Te").html(strCon);
			})
			$(".conter-center ul li").mouseenter(function(){
   				var cname = $(this).attr("cname");
				var strCon = "";
				for( var i = 0 ; i <json[cname].list.length ; i++ ){
					var pro = json[cname].list[i];
 					strCon += `<ol>
				             	 <li>
				             	 		<img src="../img/${pro.src}" alt="" />
				             	 		<b>${pro.name}</b>
				             	 		<span>${pro.price}</span>
				             	 	</li>
             	                </ol>`;
				   }
   				$(".Te").html(strCon);
   				$(".Te").css('display','block')
			})
			$(".conter-center ul li").mouseleave(function(){
				$(".Te").css('display','none')
			})
			$(".Te").mouseenter(function(){
				$(".Te").css('display','block')
			})
			$(".Te").mouseleave(function(){
				$(".Te").css('display','none')
			})
               $(".Te").css('display','none')
  		})
  	 