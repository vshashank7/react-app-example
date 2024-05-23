import mammal from './assets/Tiger.png';
import bird from './assets/Bird.png';
import fish from './assets/Fish.png';
import reptile from './assets/Snake.png';
import amphibian from './assets/Frog.png';

export const ANIMAL_DETAILS = [
    {
        imageUrl : mammal,
        title : "Mammals",
        description : "Mammals are a group of warm blooded vertebrate animals with hairs."
    },
    {
        imageUrl : bird,
        title : "Birds",
        description : "Birds are warm-blooded vertebrates and are the only animals with feathers."
    },
    {
        imageUrl : fish,
        title : "Fishes",
        description : "A fish is an aquatic, anamniotic, gill-bearing vertebrate animal with swimming fins and a hard skull, but lacking limbs with digits."
    },
    {
        imageUrl : reptile,
        title : "Reptiles",
        description : "Reptiles are tetrapod vertebrates, creatures that either have four limbs or, like snakes, are descended from four-limbed ancestors."
    },
    {
        imageUrl : amphibian,
        title : "Amphibians",
        description : "Amphibians are small vertebrates that need water, or a moist environment, to survive."
    }
];

export const ANIMAL_EXAMPLES = {
    "Mammals" : {
        title : "Mammals",
        description : "Mammals are a group of warm blooded vertebrate animals with hairs.",
        example : "Human, Dog, Cow, Platypus, Lion, Tiger, Primate, Bats, Marsupials, Cat, Monotreme, Goat"
    },
    "Birds" : {
        title : "Birds",
        description : "Birds are warm-blooded vertebrates and are the only animals with feathers.",
        example : "Parrots, Chicken, Budgerigar, Owl, Columbidae, Blue jay, Hummingbirds, Penguins, Toucans, Finches"
    },
    "Fishes" : {
        title : "Fishes",
        description : "A fish is an aquatic, anamniotic, gill-bearing vertebrate animal with swimming fins and a hard skull, but lacking limbs with digits.",
        example : "Siamese fighting fish, Jawless fish, Airbreathing catfishes, Queen angelfish, Wels catfish, Oyster toadfish, Mozambique tilapia, Blue ring angelfish, Atlantic blue marlin, Cartilaginous fishes"
    },
    "Reptiles" : {
        title : "Reptiles",
        description : "Reptiles are tetrapod vertebrates, creatures that either have four limbs or, like snakes, are descended from four-limbed ancestors.",
        example : "Lizards, Turtles, Snake, Dinosaur, Komodo dragon, Chameleons, Crocodiles, Iguanas, Bearded dragons, Alligators"
    },
    "Amphibians" : {
        title : "Amphibians",
        description : "Amphibians are small vertebrates that need water, or a moist environment, to survive.",
        example : "Axolotl, Frogs, Salamanders, Caecilians, Diplocaulus, Labyrinthodontia, Microsauria, Anthracosauria"
    }
};