function calculator()
{
    let num1 = parseFloat(document.getElementById('number1').value);
    let num2 = parseFloat(document.getElementById('number2').value);

    let operation = document.getElementById('operators').value;

    if (operation === 'plus') // SI ES UNA SUMA...
    {
        document.getElementById('result').value = (num1 + num2).toFixed(3); // DESPLIEGA EL RESULTADO DE LA SUMA.
    }

    if (operation === 'minus') // SI ES UNA RESTA...
    {
        document.getElementById('result').value = (num1 - num2).toFixed(3); // DESPLIEGA EL RESULTADO DE LA RESTA.
    }

    if (operation === 'divide') // SI ES UNA DIVISIÓN...
    {
        document.getElementById('result').value = (num1 / num2).toFixed(3); // DESPLIEGA EL RESULTADO DE LA DIVISIÓN.
    }

    if (operation === 'multiplicate') // SI ES UNA MULTIPLICACIÓN...
    {
        document.getElementById('result').value = (num1 * num2).toFixed(3); // DESPLIEGA EL RESULTADO DE LA MULTIPLICACIÓN.
    }
}