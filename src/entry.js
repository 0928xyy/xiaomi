var a =1;


function fnAdd(arr){
	return eval(arr.join("+") );
}
 
function fnMax(arr){
	return Math.max.apply(null,arr);
}
 
export {a as num,fnAdd,fnMax};
