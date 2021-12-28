async function login(){
    username=document.getElementById('username').value
  
    
  
   
  
  user={
    username:document.getElementById('username').value,
  password:document.getElementById('password').value
  
  }
  
  
  
  data_to_send=JSON.stringify(user)
  
      
  try{
  response=await fetch('https://masai-api-mocker.herokuapp.com/auth/login',{
  
   method:"POST",
   body:data_to_send,
   headers:{
       'Content-Type':'application/json'
   }
    
  
  
   })
  
   data=await response.json()
  
   fetchprofile(username,data.token)
   console.log(username,data.token)
   document.getElementById('profbtn').innerText='LogedIn' + " " +username
  
  }
  
  catch(e){
  
   console.log(e)
  
  }
  
  
  
  
  }
  
  
  
  async function fetchprofile(username,token){
  
  try{
  
   response=await  fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
      headers:{
  
          "Content-Type":"application/json",
          'Authorization': `Bearer ${token}`,
      },
  
     })
  
    prof=await response.json()
  
     document.getElementById('userprofile').textContent=`${username}`
    console.log(prof)
  
    }
  
    catch(e){console.log(e)}
  
  }