const api = 'https://randomuser.me/api/?results=1'
const loadUser =()=>{
  fetch(api)
  .then(res => res.json())
  .then(data => displayUser(data.results[0]))
}
loadUser();

const  displayUser = users =>{
  console.log(users);
  const profile = document.getElementById("profile")
  const intro = document.getElementById("intro")
  const display = document.getElementById('display')



  profile.src = `${users.picture.large}`
  intro.innerText = `Hi, My name is`
  display.innerText = `${users.name.title} ${users.name.first} ${users.name.last}`

  // another section 
    // name 
  document.getElementById("name").addEventListener('mouseover',()=>{
   display.innerText = `${users.name.title} ${users.name.first} ${users.name.last}`
   intro.innerText = `Hi, My name is`

  })
  // email 
  document.getElementById("email").addEventListener('mouseover',()=>{
   display.innerText = `${users.email}`
   intro.innerText = `My email address is`

  })
  // calender 
  document.getElementById("dob").addEventListener('mouseover',()=>{
   display.innerText = `${users.dob.date.slice(0,10)}`
   intro.innerText = `My birthday is`

  })
  // phone-number 
  document.getElementById("phone").addEventListener('mouseover',()=>{
   display.innerText = `${users.phone}`
   intro.innerText = `My phone number is`

  })
  // address 
  document.getElementById("address").addEventListener('mouseover',()=>{
   display.innerText = `${users.location.street.name}, ${users.location.street.number}, ${users.location.city}, ${users.location.country}`
   intro.innerText = `My address is`

  })
  // password 
  document.getElementById('password').addEventListener('mouseover', ()=>{
    display.innerText = `${users.login.password}`
    intro.innerText = `My password is`
  })
}