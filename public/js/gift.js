const delButtonHandler = async (event) => {
  console.log(event)
    if (event.target.hasAttribute('data-id')) {
      const gift_id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/gift/${gift_id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/gift');
      } else {
        alert('Failed to delete gift');
      }
    }
};

// document

//   .querySelector('.deleteButton')
//   .addEventListener('click', delButtonHandler);

// Listen for clicks on the entire window
document.addEventListener('click', function (event) {

	// If the clicked element has the `.click-me` class, it's a match!
	if (event.target.matches('.deleteButton')) {
		delButtonHandler(event)
	}

});


// document.addEventListener('click', function (event) {

// 	// If the clicked element has the `.click-me` class, it's a match!
// 	if (event.target.hasAttribute('data-id-gift.id')) {
// 		delButtonHandler()
// 	}

// });

