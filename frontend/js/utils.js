function showQtyOfProductsInCart ()
{
    let qty = 0;

    if (doesExists('panier'))
    {
        qty = get('panier').length;
    }

    document.getElementById('panier-qty').innerHTML = "Article(s) dans mon panier :" + qty;
}