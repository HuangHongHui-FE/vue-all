let product = { price: 5, quantity: 2 }


// console.log('quantity is ' + product.quantity)


// console.log('quantity is ' + product['quantity'])
// 我们还可以使用 ES6 Reflect
// console.log('quantity is ' + Reflect.get(product,'quantity'))


// Proxy（代理）是另一个对象的占位符，默认情况下对该对象进行委托
// let proxiedProduct = new Proxy(product,{})
// console.log(proxiedProduct.quantity)



// let proxiedProduct = new Proxy(product, {
//     get(target, key) {
//         console.log('Get was call with key = ' + key)
//         return target[key] //Bracket notation
//     }
// })
// console.log(proxiedProduct.quantity)



// let proxiedProduct = new Proxy(product, {
//     get(target, key, receiver) {
//         console.log('Get was call with key = ' + key)
//         // receiver,它保证了当我们的对象有继承自其它对象的值或函数时 this 指针能正确的指向使用（的对象）
//         return Reflect.get(target, key, receiver)
//     }
// })

// console.log(proxiedProduct.quantity)




// let proxiedProduct = new Proxy(product, {
//     get(target, key, receiver) {
//         console.log('Get was call with key = ' + key)
//         return Reflect.get(target, key, receiver)
//     },
//     set(target, key, value, receiver) {
//         console.log('Set was called with key = ' + key + ' and value ' + value)
//         return Reflect.set(target, key, value, receiver)
//     }
// })
// proxiedProduct.quantity = 4
// console.log(proxiedProduct.quantity)




// function reactive(target) {
//     const handler = {
//         get(target, key, receiver) {
//             console.log('Get was call with key = ' + key)
//             return Reflect.get(target, key, receiver)
//         },
//         set(target, key, value, receiver) {
//             console.log('Set was called with key = ' + key + ' and value ' + value)
//             return Reflect.set(target, key, value, receiver)
//         }
//     }
//     return new Proxy(target, handler)
// }


// let productRes = reactive(product)
// productRes.quantity = 4
// console.log(productRes.quantity)