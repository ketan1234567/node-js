//URL Module
import {URL} from 'url';


const myurl=new URL('https://www.exmple.com:8080/p/a/t/h? query=string#hash');
//console.log(myurl.hash);
//console.log(myurl.host);
//console.log(myurl.hostname);
//console.log(myurl.href);

//console.log(myurl.pathname);
//console.log(myurl.searchParams); //return object 
console.log(myurl.toString()); //return serialize 
console.log(myurl.toJSON());




