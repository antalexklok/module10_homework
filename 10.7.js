// задание 8
let animals = new Map([
    ["dog", "good"],
    ["cat", "bad"],
    ["parrot", "kind"]
]);
animals.forEach((value, key) => {
    console.log(`${key} - x = ${value} - y`);
});
