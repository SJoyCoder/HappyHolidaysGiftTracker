const newFormHandler = async (event) => {
  event.preventDefault();
console.log(event)
  const giftName = document.querySelector('#gift-name').value.trim();
  const cost = document.querySelector('#gift-cost').value.trim();
  const whereToBuy = document.querySelector('#gift-store').value.trim();
  const is_purchased = document.querySelector("#cd-bought").checked
  const recipientId = document.querySelector("select").value
  
  if (giftName && cost && whereToBuy ) {
   
    const response = await fetch(`/api/gift`, {
      method: 'POST',
      body: JSON.stringify({ giftName, is_purchased, cost, whereToBuy, recipientId  }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      // document.location.replace('/profile');
      document.location.replace('/gift');
    } else {
      alert('Failed to create gift');
    }
  }
};


const recipientHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#recipient-name').value.trim();
  const relationship = document.querySelector('#recipient-relationship').value.trim();
  const budget = document.querySelector('#budget').value.trim();
  const hasGiftIdea = document.querySelector("#hasGiftIdea").checked

  if (name && relationship && budget ) {
    const response = await fetch(`/api/recipient`, {
      method: 'POST',
      body: JSON.stringify({ name, relationship, budget, hasGiftIdea }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create recipient');
    }
  }
}



document
.querySelector('#addRecipientButton')
.addEventListener('click', recipientHandler);

document
  .querySelector('#addGiftButton')
  .addEventListener('click', newFormHandler);





document
  .querySelector('.gift-list')
  .addEventListener('click', delButtonHandler);

