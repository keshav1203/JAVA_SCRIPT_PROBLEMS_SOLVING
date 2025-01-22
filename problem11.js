//  a program to calculate the total price of your phone purchase. You will keep
//purchasing phones (hint: loop!) until you run out of money in your bank account. You'll
//also buy accessories for each phone
//After you've calculated your purchase amount, add in the tax, then print out the
//calculated purchase amount, properly formatted.
//Finally, check the amount against your bank account balance to see if you can afford it
//or not.

const taxs = 0.28;
let phone_price = prompt("enter price of phone");
phone_price = Number(phone_price);
let accessory_cost = prompt("enter price of your accessory");
accessory_cost = Number(accessory_cost);
let bank_balance = prompt("enter your bank balace");
bank_balance = Number(bank_balance);


function tax(){
    tax_phone =phone_price + phone_price*taxs;
    tax_accessory = accessory_cost + accessory_cost*taxs;
    var total = tax_phone + tax_accessory ;
    console.log("phone price is",+tax_phone);
    console.log("accessory price is ",+tax_accessory);
    return total ;
}

let total_cost=tax();
if(bank_balance>total_cost){
console.log("you can afford it , total price is " ,total_cost);
}else{
    console.log("you can't buy it");
}
