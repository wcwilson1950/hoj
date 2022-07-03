# hoj
This responsitory is based on the book Higher Order Perl. I can read Pearl. Translating to javascript helps me understand the language better and extend my knowledge of javascript.

The website, [Higher Order Javascript](https://interglacial.com/hoj/hoj.html#HOJ.0:_Functional_JavaScript_Reviewed) is also a source of inspiration for these experiments. This site is based on earlier versions of javascript and a lot of the language changes not shown.  

## Javascript Changes ##
### Scope ###
Javascript now has block scope. It's possible to define constants and variables that exists only with the local scope:

```
const foo = 'bar';
{
    const foo = 'local';
    console.log(foo); // local
}
console.log(foo); // bar
```
### Function Declarations ##

There are a number of ways to declare a function in Javascript. The one illustrated in HOJ is the function statement form.

```
function foo(bar) {
    return bar;
}
```

Another form is the function definition form.

```
const foo = function (bar) { return bar; };
```

This form actually creates an anonymous function that is assigned to 'foo'.  
