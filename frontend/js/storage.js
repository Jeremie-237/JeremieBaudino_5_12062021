function get(item)
{
    return JSON.parse(localStorage.getItem(item)); 
}
function store(item , value)
{
    localStorage.setItem(item, JSON.stringify(value)); 
}
function doesExists(item)
{
    return !!get(item);
}