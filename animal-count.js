function animalCount( miles ) {
    const animalsDensityFirst10Miles = 10;
    const animalsDensitySecond10Miles = 50;
    const animalsDensityThird10Miles = 100;
    if ( miles <= 10 ) {
        const count = miles * 10;
        return count;
    }
    else if ( miles <= 20 && miles > 10 ) {
        const firstDensAnimal = 10 * animalsDensityFirst10Miles;
        const restMiles = miles - 10;
        const secondDensAnimal = restMiles * animalsDensitySecond10Miles;
        const totalAnimels = firstDensAnimal + secondDensAnimal;
        return totalAnimels;
    }
    else {
        const firstDensAnimal = 10 * animalsDensityFirst10Miles;
        const secondDensAnimal = 10 * animalsDensitySecond10Miles;
        const restMiles = miles - 20;
        const thirdDensAnimal = restMiles * animalsDensityThird10Miles;
        const totalAnimels = firstDensAnimal + secondDensAnimal + thirdDensAnimal;
        return totalAnimels;
    }
}

const animals = animalCount( 500 );
console.log( animals );