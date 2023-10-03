const acceptSMSel = document.querySelectorAll('[data-buyer-accepts-sms]');
if (acceptSMSel) {
  acceptSMSel.forEach(function(el) {
    let checkbox = el.querySelector('#checkout_buyer_accepts_sms');
    if (checkbox && (!checkbox.checked)) {
      console.log('checkbox && (!checkbox.checked)');
      checkbox.click();
    }
  });
}

const orderDiscountArea = document.querySelector('.order-summary__section--discount');
if (orderDiscountArea && GLOBALS.discountAreaNote) {
  let newEl = document.createElement('div');
  let message = '<div class="order-summary__section--discount-message" style="color:#b6412f;font-size:13px">' + GLOBALS.discountAreaNote + '</div>';
  newEl.innerHTML = message;
  orderDiscountArea.appendChild(newEl);
}