let data = ["a", "b", "c", "d"];
console.log(data);

let strData = JSON.stringify(data);
console.log(strData);
console.log(strData.length);

let jsonToData = JSON.parse(strData);
console.log(jsonToData);