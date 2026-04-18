class Garden {
    constructor() {
        this.plants = [];
    }

    addPlant(name) {
        this.plants.push(name);
        console.log(name + " planted in the garden.");
    }

    showPlants() {
        console.log("Plants in garden:");
        this.plants.forEach(p => console.log("- " + p));
    }
}

const garden = new Garden();
garden.addPlant("Sunflower");
garden.showPlants();
