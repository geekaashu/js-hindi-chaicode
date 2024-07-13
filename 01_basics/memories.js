//There are total two types of memoary 

//01 Stack memoary mostly used in primitive data types like //String, number, boolean, null, undefined , symbol , bigint


//02 heap memoary mostly used in non primitive data types like array abject and function

let myyoutubename = "techmaster"

let anothername = myyoutubename

anothername = "techmastertwo"

console.log(anothername)

console.log(myyoutubename)

let userone = {

email: "ashutosh.com",

upi: "ashu@upi",



}
 
let usertwo = userone

 usertwo.email = "aashu@gmail.com"


console.log(userone.email)

console.log(usertwo.email)




