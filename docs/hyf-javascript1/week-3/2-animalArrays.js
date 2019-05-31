let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];

console.log(favoriteAnimals);

favoriteAnimals.push('turtle');

console.log(favoriteAnimals);

favoriteAnimals.splice(1,0, 'meerkat');

console.log(favoriteAnimals);

console.log('this array has a length of ',favoriteAnimals.length);

favoriteAnimals.splice(3,1,);

console.log(favoriteAnimals);

var meerkatIndex =  favoriteAnimals.indexOf("meerkat");

console.log('The item you are looking for is at index: ',meerkatIndex);