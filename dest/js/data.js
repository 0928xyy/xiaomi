   window.onload= function(){
        var deff = $.ajax({
   	  	type:"get",
   	  	url:"../json/data.json",
   	  	async:true
    	  });
    	deff.done(function(json){
 			var title = "";
			var str = "";
			for(var attr in json){
				title += `<li cname = ${attr}><a>${json[attr].name}</a></li>`;
				for(var i = 0 ; i < json[attr].list.length; i++){
 					var pro = json[attr].list[i];
  					   str += ` 
  					            <li>
					           	<img src="../img/${pro.src}" alt="" />
					            <a>${pro.name}</a></li>`;
 				}
				
 			}
			$(".banner-left ul").html(title);
			$('#banul li').html(str);
			$(".banner-left ul li").mouseenter(function(){
 				var cname = $(this).attr("cname");
				var strCon = "";
				for( var i = 0 ; i <json[cname].list.length ; i++ ){
					var pro = json[cname].list[i];
 					strCon += ` 
  					            <li>
					           	<img src="../img/${pro.src}" alt="" />
					            <a>${pro.name}</a></li>`;
				   }
 				$("#banul").html(strCon);  

			})
			$(".banner-left ul li").mouseenter(function(){
   				var cname = $(this).attr("cname");
				var strCon = "";
				for( var i = 0 ; i <json[cname].list.length ; i++ ){
					var pro = json[cname].list[i];
 					strCon += ` 
  					            <li>
					           	<img src="../img/${pro.src}" alt="" />
					            <a>${pro.name}</a></li>`;
				   }
   				$("#banul").html(strCon);
   				$("#banul").css('display','block')
			})
//			$(".banner-left ul li").mouseleave(function(){
//				$("#banul").css('display','none')
//			})
			$("#Tei li").mouseenter(function(){
				$("#banul").css('display','block')
			})
			$("#banul").mouseleave(function(){
				$("#banul").css('display','none')
			})
  	})		
  }