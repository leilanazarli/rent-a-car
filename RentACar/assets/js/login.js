const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
		this.parentElement.classList.add('is-active')
	})
})

let Base_url="http://localhost:8000"
console.log(Base_url);
 let email=document.querySelector("#login-email")
 let password=document.querySelector("#login-password")
 let form_login=document.querySelector(".form-login")
 
 form_login.addEventListener("submit" , async function (e) {
	e.preventDefault()
	let res=await axios(`${Base_url}/adminPanel`)
	console.log(res.data);
	let data=res.data
	if(data.find(element=>element.email===email.value && element.password===password.value)){
		alert("login successful")
		window.location.href="http://127.0.0.1:5500/adminpanel.html"
	}
	else{
	alert("wrong")
	}
 })