const scriptURL = 'https://script.google.com/macros/s/AKfycbzKFoAIUWIOGJPl9CuUD3Ac_gQUnjzHywF-ugpbb1WjZLWLbgYFEz0q3xydy795tREiNg/exec';

const form = document.forms['addForm'];

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { 
    method: 'POST',
    mode: 'no-cors',  // Fix CORS issue (Browser will not block it)
    body: new FormData(form)
  })
  .then(() => { window.location.reload(); }) // Refresh after submission
  .catch(error => console.error('Error!', error.message));
});
