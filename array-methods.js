const product = [
    {name: 'leptop', price: 3200, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: 7000, brand: 'pihone', color: 'golden'},
    {name: 'watch', price: 3000, brand: 'casio', color: 'yellow'},
    {name: 'sungals', price: 300, brand: 'pibon', color: 'black'},
    {name: 'camera', price: 9000, brand: 'canon', color: 'gray'}
];
const brand = product.map(product => product.brand);
console.log(brand);
const price = product.map(product => product.price);
console.log(price);
product.forEach(product => console.log(product));
product.forEach(product => console.log(product.color));

product.forEach(product =>{
    console.log(product.name);
});

// 3. filter 
const cheap = product.filter(product => product.price <= 5000);
console.log(cheap);
const specificName = product.filter(product => product.name.includes('n'));
console.log(specificName);

// 4. find 
const findName = product.find(product => product.name.includes('n'));
console.log(findName);
