
// // step 1 set event handler

// // document.getElementById ('id').addeventListener('click',fun)
// document.getElementById('button-login')
// .addEventListener('click',function(event){
//     // set-2 prevent default behavior (prevent reloading browser)

//     event.preventDefault();

// // step 3 get the phone number
//  const phoneNumber = document.getElementById('phone-number').value;

//  const pinNumber = document.getElementById('pin-number').value;
//   console.log(phoneNumber,pinNumber);

// //   step 4 validate phone and pin
// //   this not perfect way //temporary .you should  do lke this
//   if(phoneNumber === '5' && pinNumber === '1234'){

//     console.log('you are logged in');
//     //  step 5 all user to use the website
    
//   }
//   else{
//     alert('wrong phone number or pin');
//   }
// })

document.getElementById('button-login')
.addEventListener('click',function(event){
  event.preventDefault();
  // get hone number and pin
  const phoneNumber = document.getElementById('phone-number').value;
  const pinNumber = document.getElementById('pin-number').value;


  // console.log(phoneNumber,pinNumber);

  // bad way to  validate 
  if(phoneNumber === '5' && pinNumber === '1234'){
    console.log('you are logged in');
    window.location.href = '.home.html'
     
  }
  
  else {
    alert('wrong  phone number or pin.')
  }
});

