function showQtyOfProductsInCart ()
{
    let qty = 0;

    if (storage.doesExists('panier'))
    {
        qty = storage.get('panier').length;
    }

    document.getElementById('panier-qty').innerHTML = "Article(s) dans mon panier :" + qty;
}