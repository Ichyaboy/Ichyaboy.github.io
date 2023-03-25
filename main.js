const listItems = document.querySelectorAll('.list > li');
	listItems.forEach(item => {
	  const nestedList = item.querySelector('.nested-list');
	  item.addEventListener('click', () => {
		nestedList.classList.toggle('active');
	  });
	});
