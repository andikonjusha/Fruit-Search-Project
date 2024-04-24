const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];
// checks if anything is in search bar then filters for any fruit that match string and makes lowercase
function search(str) {
	let results = [];
	if(str.length>0){
		results =fruit.filter(item => {
			return item.toLowerCase().includes(str.toLowerCase())
		})
	}
	return results;
}
// Handle input event on input field
function searchHandler(e) {
	let inputVal = e.target.value;
	let results = search(inputVal)
	showSuggestions(results, inputVal);
}
// Will show the suggested list based on input
function showSuggestions(results) {
	suggestions.innerHTML ="";
	results.forEach((val) => {
		let li = document.createElement('li')
		li.textContent = val;
		suggestions.appendChild(li)
	})

}
// Will select and replace input if clicked on from list
function useSuggestion(e) {
	if(e.target.matches('li')){
		let inputVal = e.target.textContent;
		input.value = inputVal;
		suggestions.innerHTML = "";
	}
}

document.body.addEventListener('click', function(event) {
    // Check if the clicked element is not the input field or the suggestion list
    if (event.target !== input && event.target !== suggestions) {
        // Remove the suggestion list
        suggestions.innerHTML = "";
    }
});

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);