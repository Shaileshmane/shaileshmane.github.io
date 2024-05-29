
// document.addEventListener('DOMContentLoaded', function() {
//     const toggleButton = document.getElementById('toggleButton');
    
//     toggleButton.addEventListener('click', function() {
//         document.body.classList.toggle('dark-mode')
    
//     });
// });



function SendMail(){
    
var templateParams = {
    name: document.getElementById("fullname").value,
    email : document.getElementById("email").value,
    message: document.getElementById("message").value
  };
  
  emailjs.send('service_vo8ka9i', 'template_6z6xe1y', templateParams).then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
    },
    (error) => {
      console.log('FAILED...', error);
    },
  );

}
