import {pretty, Elements, FromFile} from '../index';

const template2 = Elements(
    FromFile(__dirname + '/html/header.html'),
    FromFile(__dirname + '/html/Home.html'),
    FromFile(__dirname + '/html/footer.html'),
)

console.log(pretty(template2));