
function validateForm() {
    const email = document.getElementById('email').value;
    const com = document.getElementById('com').value;
    const rate = document.getElementById('rate').value;
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }
    if (com === '') {
      alert('Please enter a comment.');
      return false;
    }
    if (isNaN(rate) || rate < 0 || rate > 5) {
      alert('Please enter a rating between 0 and 5.');
      return false;
    }
    return true;
  }
document.getElementById('submit').addEventListener('click', function() {
    if (!validateForm()) {
        event.preventDefault();
    }
});