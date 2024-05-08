const s = {
    name: "Shreya",
    age:22,
    height:5.3,
    weight:60,
    isMarried:false,
    "shreya ka fav col":"purple"
}

console.log(s);
console.log(s.age);
console.log(s['shreya ka fav col']);
console.log(s['name']);

s.name="Parth"; /// this is for updating key value of existing objects
console.log(s.name);