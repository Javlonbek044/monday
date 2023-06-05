var usdToSum = 11435.00;
var euroToSum = 12278.56;



var flightTicket = 500; // dollar
var hotelPayment = 250; // dollar
var  sightseeingExpenses = 400; // yevro



var alisherMoney = prompt("you have some expenses,so I colculate all your expenses, if you enter your money that you want to use during the holiday");



var flightTicketInSom = flightTicket * usdToSum;
var hotelPaymentInSom = hotelPayment * usdToSum;
var sightseeingExpensesInSom = sightseeingExpenses * euroToSum;


var totalExpens = flightTicket + hotelPayment + sightseeingExpenses;

if(alisherMoney >= totalExpens){
    document.write("<h1>you have enough money, you can go </h1>")
}else {
    document.write("<h1>you don't have enough money, you can't go </h1>")
}