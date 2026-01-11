/* fetch("https://dummyjson.com/products/100")
    .then((x) => x.json()
        .then(data => console.log(data)
        )
    )

fetch("https://dummyjson.com/products/100")
    .then(resp => resp.json())
    .then(data => console.log(data)) */


console.log("A");

setTimeout(() => console.log("B"), 0);

fetch("https://dummyjson.com/products/1")
    .then(() => console.log("C"));

console.log("D");


async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
};