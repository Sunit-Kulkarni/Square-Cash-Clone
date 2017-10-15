//code 

//JSLint comments here:
/*global fullTransactionData*/
/*jslint devel: true*/
/*jslint browser: true*/
/*global $, jQuery, alert*/

/*jslint nomen: true*/

$(function () { //document ready equivalent
    "use strict";
    
    //rendering function - takes information to visual realm
    function printTransactionsToScreen(listOfTransactions) { //updates transactions over and over
        //inject HTML into the screen that represents a transaction
        var transactionList = $('.transactions');
        
        $('.transaction').remove();
        
        listOfTransactions.forEach(function (transaction) {
            var transactionDiv = $('<div class = "transaction"></div>');
            
            //append the child divs to main transaction div (name, for, date, amount)
            //creates new HTML that represents the new transaction element
            
            transactionDiv.append('<div class="name">' + transaction.name + '</div>');
            transactionDiv.append('<div class="for">' + transaction.for + '</div>');
            transactionDiv.append('<div class="date">' + transaction.date + '</div>');
            transactionDiv.append('<div class="amount">' + transaction.amount + '</div>');
            
            transactionList.append(transactionDiv);
        });
        
    }
    
    printTransactionsToScreen(fullTransactionData);

    $('.search-input').on('input', function () { // will respond as you type in the search bar
        //call function above so that transactions are drawn to the screen as soon as the page loads.
        var filteredTransactions = _.filter(fullTransactionData, function (transaction) {
            //we want to keep transactions that match the search term
            //if we can find the search string insde of name, for, date, or amount, then keep it
            
            //make sure searching is non case sensitive
            
            var searchString = $('.search-input').val().toLocaleLowerCase();
            
            var isContainedInName = transaction.name.toLocaleLowerCase().includes(searchString);
            var isContainedInFor = transaction.for.toLocaleLowerCase().includes(searchString);
            var isContainedInDate = transaction.date.toLocaleLowerCase().includes(searchString);
            var isContainedInAmount = transaction.amount.toLocaleLowerCase().includes(searchString);
            
            var keepThisTransaction = isContainedInName || isContainedInFor || isContainedInDate || isContainedInAmount;
            
            if (keepThisTransaction) {
                return true;
            } else {
                return false;
            }
        });
        
        printTransactionsToScreen(filteredTransactions);
    });
    
});