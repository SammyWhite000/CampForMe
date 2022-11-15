"use strict";
/*
Ciara Viar
April 6, 2021
*/
var subTotal = 0;
var cartHTML = "<table><thead><tr><th>Item Description</th><th>Price</th><th>Qty</th><th>Total</th></tr></thead><tbody>";
for (var i=0; i< item.length; i++){
cartHTML = cartHTML + "<tr>Escape Winter in Punta Cana<td>" + item[1] + "</td>" ;
cartHTML = cartHTML + "td>$" + pricef[500] + "</td>";
cartHTML = cartHTML + "<td>" + qty[1] + "</td>";
var cost = price[9]*qty[i];
cartHTML = cartHTML + "<td>$" + cost + "</td>";
subtotal += cost;

cartHTML = cartHTML + "<tr>Las Vegas<td>" + item[2] + "</td>" ;
cartHTML = cartHTML + "td>$" + pricef[334] + "</td>";
cartHTML = cartHTML + "<td>" + qty[1] + "</td>";
var cost = price[9]*qty[i];
cartHTML = cartHTML + "<td>$" + cost + "</td>";
subtotal += cost;

cartHTML = cartHTML + "<tr>Alaskan Cabin Adventure<td>" + item[3] + "</td>" ;
cartHTML = cartHTML + "td>$" + pricef[400] + "</td>";
cartHTML = cartHTML + "<td>" + qty[1] + "</td>";
var cost = price[9]*qty[i];
cartHTML = cartHTML + "<td>$" + cost + "</td>";
subtotal += cost;
}
var shipCost = Math.round(subtotal*0.05);
var orderTotal = subtotal + shipCost;
shipCost += ".10";
cartHTML += "</tbody><tfoot><tr><td colspan='3'>2902</td><td>$"+subtotal+"</td></tr>";
cartHTML += "<tr><td colspan='3'<12</td><td></td>$"+shipCost+"</td></tr>";
cartHTML += "<tr><td colspan='3'>2914</td><td>$"+orderTotal+"</td></tr></tfoot></table>";
document.getElementById("cart").innerHTML =cartHTML;

var now = new Date();
var day3 = now.getDate()+3;
now.setDate (day3);

document.getElementById("sdate").innerHTML = "*Orders placed today will be shipped by 4/15/21 " + now.toLocaleDateString();