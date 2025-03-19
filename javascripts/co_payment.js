"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Tutorial Case

   Payment Form Script
   
   Author: Brandy Guzman
   Date:   3/18/2025
   
   Filename: co_payment.js
   
   Function List
   =============
   
   runSubmit()
      Runs validation tests when the submit button is clicked
      
   validateCVC()
      Validates the credit card CVC number
      
   validateMonth()
      Validates that the user has selected the expiration month of the credit card
      
   validateYear()
      Validates that the user has selected the expiration year of the credit card
      
   validateNumber()
      Validates that the user has entered a valid and legitimate card number
      
   validateCredit()
      Validates that the user has selected a credit card type
      
   validateName()
      Validates that the user has specified the name on the credit card
      
   sumDigits(numStr)
      Sums the digits characters in a text string
      
   luhn(idNum)
      Returns true of idNum satisfies the Luhn Algorithm

*/

window.addEventListener("load", function() {
   // Retrieve the field/value pairs from the URL
   var formData = this.location.search.slice(1);

   formData = formData.replace(/\+/g, " ");

   formData = decodeURIComponent(formData);

   var formFields = formData.split(/[&=]/g);

   // Write the field values to the order form
   this.document.forms.order.elements.orderDate.value = formFields[1];
   this.document.forms.order.elements.modelName.value = formFields[5];
   this.document.forms.order.elements.qty.value = formFields[7];
   this.document.forms.order.elements.initialCost.value = formFields[9];
   this.document.forms.order.elements.protectionName.value = formFields[13];
   this.document.forms.order.elements.protectionCost.value = formFields[15];
   this.document.forms.order.elements.subtotal.value = formFields[17];
   this.document.forms.order.elements.salesTax.value = formFields[19];
   this.document.forms.order.elements.totalCost.value = formFields[21];
});


function validateName() {
   var cardName = document.getElementById("cardName");
   if (cardName.validity.valueMissing) {
      cardName.setCustomValidity("Enter your name as it appears on the card");
   } else {
      
   }
}