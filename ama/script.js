let cart = 0;

function addToCart()
{
cart++;

document.getElementById("cartCount").innerText = cart;
}

function searchProduct()
{
let input = document.getElementById("search").value.toLowerCase();

let cards = document.getElementsByClassName("card");

for(let i=0;i<cards.length;i++)
{
let title = cards[i].getElementsByTagName("h3")[0].innerText.toLowerCase();

if(title.includes(input))
{
cards[i].style.display="block";
}
else
{
cards[i].style.display="none";
}
}
}