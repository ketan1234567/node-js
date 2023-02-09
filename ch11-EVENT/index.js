import EventEmitter from 'events';

//creating class
class MyEmitter extends EventEmitter{}


//creating object

const myEmitter=new MyEmitter();

//exmple 1
//register Event Listner 
//myEmitter.on('event',(a={})=>{
  //  console.log("Event is occured",a);
//});
//trigger event 

//myEmitter.emit('event',{name:'ketan'});
//myEmitter.emit('event');


//exmple 2
//register Event Listner 
/*var i=0;
//myEmitter.once('event',()=>{
    console.log("Event is occured",++i);
});
//trigger event once

/*myEmitter.emit('event');
myEmitter.emit('event');
*/



