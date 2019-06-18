let faker = require('faker');

let generateCompanies = () => {
    let companies = [];
    let images = []

    for (let id = 0; id < 30; id++) {
        let name = faker.company.companyName();
        images.push(faker.image.cats(), faker.image.food(), faker.image.business(), faker.image.city(), faker.image.technics());
        let industry = faker.name.jobArea();
        let catchPhrase = faker.company.catchPhrase();
        let bs = faker.company.bs();
        let keyContact = faker.name.findName();
        let email = faker.internet.email();
        let netWorth = faker.finance.amount();

        companies.push({
            "id": id,
            "name": name,
            "images": images[Math.floor(Math.random() * Math.floor(images.length))],
            "industry": industry,
            "catchPhrase": catchPhrase,
            "bs": bs,
            "keyContact": keyContact,
            "email": email,
            "netWorth": netWorth,
        });
    }

    return { "companies": companies }
}

module.exports = generateCompanies