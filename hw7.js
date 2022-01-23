const number = +prompt('Введите число между 0 и 3', '');

switch(number) {
    case 0 :
        console.log('its 0');
    break;
    case 1:
        console.log('its  1');
    break;
    case 2:
    case 3:
        console.log('its 2 or 3')
}