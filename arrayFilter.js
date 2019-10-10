const Animals = [
    {name: "Fluffykins" , species: "rabbit" },
    {name: "Caro" , species: "dog" },
    {name: "Hamilton" , species: "dog"},
    {name: "Harold", species: "fish"},
    {name: "Ursula" , species: "cat"},
    {name: "Jimmy", species: "fish"}
];

function filter(dataSet) {
    let dogs = [];
    for (i = 0; i < dataSet.length; i++) {
        if (dataSet[i].species === 'dog') {
            dogs.push(dataSet[i]);
        }
    }
    return dogs;
}


console.log(filter(Animals));
