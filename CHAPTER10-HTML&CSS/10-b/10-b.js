 // function toggleButton() {
 //     const button = document.querySelector('.js-button');
 //     button.classList.toggle('is-toggled');
 // }

 //  function toggleButton(buttonElement) {
 //      buttonElement.classList.toggle('is-toggled');
 //  }



 function toggleButton(clickedButton) {
     const allButtons = document.querySelectorAll('.js-button');

     allButtons.forEach(button => {
         button.classList.remove('is-toggled');
     });

     clickedButton.classList.add('is-toggled');
 }