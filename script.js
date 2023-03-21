//your JS code here. If required.
function fun(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("Hello, world!")
		},1000)
})
}
fun().then(data=>{
document.getElementById("output").innerText= data;
})