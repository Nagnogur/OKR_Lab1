function arr(n)
{
    var a = new Array(n - 1);
    for (var i = 0; i < n; i++)
    {
        a[i] = i;
    }
    return a;
}

function division(a, b, c)
{
    var n = true;
    if ((a % b != 0) || (a % c != 0))
        n = false;
    return n;
}

function capitalize(s)
{
    s = s[0].toUpperCase() + s.slice(1);
    return s;
}

console.log(arr(7));
console.log(division(-12, 2, -6));
console.log(capitalize('work'));