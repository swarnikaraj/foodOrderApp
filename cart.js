items=JSON.parse(localStorage.getItem('cart_p2'))


parent=document.getElementById('parent')

append_data(items)
function append_data(data){

    

data.forEach(item => {

  div=document.createElement('div')

 img=document.createElement('img')
 img.src=item.strMealThumb

    
  h1=document.createElement('h1')
  h1.innerHTML=item.strMeal


  

  p2=document.createElement('p')
  p2.innerHTML=item.idMeal
   
  
  div.append(img,h1,p2)
  

  parent.append(div)
  
});






}



// 0 seconds : Your order is accepted 3 seconds : Your order is being cooked 8 seconds : Your order is ready 10 seconds : Order out for delivery 12 seconds : Order delivered


function order(){

    setTimeout(function(){
    alert('Order is Accepted');
    
}, 0000);


   
setTimeout(function(){
    alert('Your order is being cooked 8 seconds');
    
}, 8000);
  


setTimeout(function(){
    alert('Your order is ready');
    
}, 10000);

setTimeout(function(){
    alert('Order out for delivery');
    
}, 12000);


}


