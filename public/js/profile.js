const newFormHandler = async (event) => {
  event.preventDefault();

  const giftName = document.querySelector('#gift-name').value.trim();
  const cost = document.querySelector('#gift-cost').value.trim();
  const whereToBuy = document.querySelector('#gift-store').value.trim();
  const is_purchased = document.querySelector("#cd-bought").checked

  if (giftName && cost && whereToBuy ) {
    const response = await fetch(`/api/gift`, {
      method: 'POST',
      body: JSON.stringify({ giftName, is_purchased, cost, whereToBuy  }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create gift');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/gifts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete gift');
    }
  }
};

document
  .querySelector('#gift-btn')
  .addEventListener('click', newFormHandler);

document
  .querySelector('.gift-list')
  .addEventListener('click', delButtonHandler);
