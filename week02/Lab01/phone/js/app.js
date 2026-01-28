let var1 = document.querySelector('#callStatus');
 let var2 = document.querySelector('.accepted');
 let var3 = document.querySelector('.declined');
 let var4 = document.querySelector('.message');

 var2.addEventListener('click', (evt) =>   var1.textContent = 'Call Accepted!');
  var3.addEventListener('click', (evt) =>   var1.textContent = 'Call Declined.');
   var4.addEventListener('click', (evt) =>   var1.textContent = 'Sending Message...');
 setTimeout(() => {
 alert("I will call you later"); // Show alert after update
}, 200);

