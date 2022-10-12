const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#gift-name').value.trim();
  const needed_funding = document.querySelector('#gift-funding').value.trim();
  const description = document.querySelector('#gift-desc').value.trim();

  if (name && needed_funding && description) {
    const response = await fetch(`/api/gifts`, {
      method: 'POST',
      body: JSON.stringify({ name, needed_funding, description }),
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
  .querySelector('.new-gift-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.gift-list')
  .addEventListener('click', delButtonHandler);
