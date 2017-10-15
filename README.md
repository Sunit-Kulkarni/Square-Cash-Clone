# skware-cash

Welcome! Skware Cash is a simple clone of Square Cash designed to be a playground for Javascript and JQuery programming. Please note that this isn't a complete clone - only the transactions list has been rebuilt.

You will find a folder named "src" and a folders named "lib". Src contains these 4 files:

- index.html
	- Prebuilt HTML, no transactions showing to the screen
- index.css
	- Prebuilt CSS
- index.js
	- Implement your code here!
- data.js
	- Contains an array of transaction objects. This array is a global variable that you can access in index.js!

Your task is to implement search bar filtering with JQuery and Javascript! When a user types into the search bar at the top of the page, the list of transactions should filter down to only the ones that contain the search string.

For example, given these three transactions:

```
		[{
			name: "Virgil Szaruga",
			for: "Rent",
			date: "April 26th",
			amount: "$1500.00"
		},{
			name: "Nicole Stevens",
			for: "Drinks",
			date: "September 26th",
			amount: "$15.12"
		},{
			name: "Sephiroth O'Hoolihan",
			for: "Lost a bet",
			date: "July 26th",
			amount: "$15.12"
		}]
```

	A user types "Sep" in the search bar. The following transactions would show up:

```
		[{
			name: "Nicole Stevens",
			for: "Drinks",
			date: "September 26th",
			amount: "$15.12"
		},{
			name: "Sephiroth O'Hoolihan",
			for: "Lost a bet",
			date: "July 26th",
			amount: "$15.12"
		}]
```

	And the following transactions wouldn't show up:

```
		[{
			name: "Virgil Szaruga",
			for: "Rent",
			date: "April 26th",
			amount: "$1500.00"
		}]
```

HINT: Write a function that will draw transactions to the screen given a list of transactions

HINT: Use .filter() and .on('input', ...)

HINT: I have included CSS for transaction rows. A transaction row should look like this:
```html
<div class="transaction">
	<div class="name">Name</div>
	<div class="for">For</div>
	<div class="date">Date</div>
	<div class="amount">Amount</div>
</div>
```

BONUS: underscore-min.js is a library that I've included in this project. Try reading their documentation and use their functions for filtering collections!
