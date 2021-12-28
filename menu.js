async function getdata(){


    try{


    res= await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    data= await res.json()

    
    append_data(data.meals)

    console.log(data.meals)

    }

     
    catch(e){
        console.log(e)
    }


}

getdata()


show_item=document.getElementById('show_item')


function append_data(data){

    

   data.forEach(item => {

    img=document.createElement('img')
    img.src=item.strMealThumb

       
     h1=document.createElement('h1')
     h1.innerHTML=item.strMeal


     p=document.createElement('p')

     p.innerHTML=item.strInstructions

     p2=document.createElement('p')
     p2.innerHTML=item.idMeal
      
     

     btn=document.createElement('button')
     btn.innerHTML='Add to Cart'
      btn.onclick= ()=>{

        addtocart(item)

      }

     show_item.append(img,h1,p,p2,btn)
     
   });

   




   }

   if(localStorage.getItem('cart_p2')==undefined){
        localStorage.setItem('cart_p2',JSON.stringify([]))
    }


function addtocart(item){

    arr= JSON.parse(localStorage.getItem('cart_p2'))
    arr.push(item)

   localStorage.setItem('cart_p2',JSON.stringify(arr))



}