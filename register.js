async function signup(){


    user_data={  
    name:document.getElementById('name').value,
    email:document.getElementById('email').value,
    password:document.getElementById('password').value,
    username:document.getElementById('username').value,
    mobile:document.getElementById('mobile').value,
    description:document.getElementById('description').value
    
    
    }
    
    
    data_to_send=JSON.stringify(user_data)
    
    
    try{
    response=await fetch('https://masai-api-mocker.herokuapp.com/auth/register',{
    
    method:"POST",
    body:data_to_send,
    headers:{
        'Content-Type':'application/json'
    }
     
    
    
    })
    
    data=await response.json()
    
    console.log(data)
    alert('Registered')
    
    }
    
    catch(e){
    
    console.log(e)
    
    }
    
    
    }
    
    
    
    
    
    
    
    
    