document.addEventListener('DOMContentLoaded', function () {
    var optionButtons = document.querySelectorAll('.option-btn');
  
    optionButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var siblings = btn.parentNode.querySelectorAll('.option-btn');
  
        siblings.forEach(function (sibling) {
          sibling.classList.remove('active');
        });
        btn.classList.add('active');
      });
    });
  
    // Quantity 
    var quantityElement = document.querySelector('.quantity');
    var minusBtn = document.getElementById('minus');
    var plusBtn = document.getElementById('plus');
  
    minusBtn.addEventListener('click', function () {
      var currentQuantity = parseInt(quantityElement.textContent);
      if (currentQuantity > 0) {
        quantityElement.textContent = currentQuantity - 1;
      }
    });
  
    plusBtn.addEventListener('click', function () {
      var currentQuantity = parseInt(quantityElement.textContent);
      quantityElement.textContent = currentQuantity + 1;
    });
  });
  