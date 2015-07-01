//Proxies are special objects that allow you to provide custom implementations
//for some of these operations. A proxy is created with two parameters:

//handler: For each operation, there is a corresponding handler method that
//– if present – performs that operation. Such a method intercepts the operation 
//(on its way to the target) and is called a trap (a term borrowed from the domain of operating systems).

//target: If the handler doesn’t intercept an operation then it is performed on the target. 
//That is, it acts as a fallback for the handler. In a way, the proxy wraps the target.

let target = {};
let handler = { 
     get(target, propKey, receiver) {
         console.log('get ' + propKey);
         return 123;
     }
};
let proxy = new Proxy(target, handler);

//When we get property foo, the handler intercepts that operation:

//> proxy.foo
//get foo
//123

//The handler doesn’t implement the trap set (setting properties). 
//Therefore, setting proxy.bar is forwarded to target and leads to target.bar being set.

//> proxy.bar = 'abc';
//> target.bar
//'abc'

