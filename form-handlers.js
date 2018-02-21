function capture(){
  event.preventDefault()
  console.log("form submitted")
  
  var emailAdd =document.custInfo.email.value
  console.log("Thanks for signing up to our mailing list " + emailAdd)
  var firstName =document.custInfo.name.value
  console.log("That's a swell name " + firstName)
  var lastName =document.custInfo.last.value
  console.log("Altogether, that sounds great " + firstName + " " + lastName)
  alert("You're all signed up " + firstName + " " + lastName);
}