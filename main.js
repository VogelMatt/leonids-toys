
const toyToFind = 5;
const toys = [
    {
    id: 1,
    inStock: true,
    name: "Frank",
    maker: "LegoINC",
    price: 5.99,
    year: 1993,
    weight: .24
    },
    {
    id: 2,
    inStock: true,
    name: "iPhone",
    maker: "Apple",
    operatingSystem: "iOS",
    price: 900,
    year: 1993,
    weight: 1.2
    },
    {
    id: 3,
    inStock: false,
    name: "Galaxy",
    maker: "Samsung",
    operatingSystem: "Android",
    price: 600,
    year: 1993,
    weight: 1.4
    }
]
const teddyR = {
    id:4,
    inStock: true,
    name: "Teddy Rumpskin",
    maker: "Build-a-Bear",
    operatingSystem: "Chevy Crate Inline V12",
    price: 600000,
    year: 2022,
    weight: 6000
}
const boots = {
    id:5,
    inStock: false,
    name: "Moon boots",
    maker: "Lockhead & Martian" + "\n" + "National Defense Department",
    operatingSystem: "Digested Dark Matter",
    price: 12039310,
    year: 2056,
    weight: 150
}

toys.push(teddyR,boots)

// for(const toy of toys) {
//     toy.price += toy.price * 0.05
//     console.log(`The ${toy.maker} ${toy.name} is powered by ${toy.operatingSystem} costs ${toy.price} dollars.`)
// }
for(const toy of toys) {
    if(toy.id === toyToFind) {
        console.log(`The ${toy.maker} ${toy.name} is powered by ${toy.operatingSystem} costs ${toy.price} dollars.`)
    }
}
