import dns from 'dns';


/*dns.lookup('www.npmjs.com',(error,address,family)=>{
    if(error) throw error;
 console.log(family);  // if are family zero is coming it won't  part of  IPV4 IPV6 
});  */

dns.resolve('www.npmjs.com',(error,records)=>{
    if(error) throw error;
 console.log(records);  // if are family zero is coming it won't  part of  IPV4 IPV6 
}); 

