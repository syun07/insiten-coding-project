let faker = require('faker');




let generateCompanies = () => {
    let companies = [];
    let images = []
    let status = []

    for (let id = 0; id < 30; id++) {
        let name = faker.company.companyName();
        images.push(faker.image.cats(), faker.image.food(), faker.image.business(), faker.image.city(), faker.image.technics());
        let industry = faker.name.jobArea();
        let catchPhrase = faker.company.catchPhrase();
        let bs = faker.company.bs();
        let keyContact1 = faker.name.findName();
        let keyContact2 = faker.name.findName();
        let email = faker.internet.email();
        status.push("researching", "pending approval", "approved", "declined")
        let financialPerformance = Number(faker.finance.amount());

        companies.push({
            "id": id,
            "name": name,
            "image": images[Math.floor(Math.random() * Math.floor(images.length))],
            "industry": industry,
            "catchPhrase": catchPhrase,
            "bs": bs,
            "keyContact1": keyContact1,
            "keyContact2": keyContact2,
            "email": email,
            "status": status[Math.floor(Math.random() * Math.floor(status.length))],
            "financialPerformance": financialPerformance
        });
    }

    return { "companies": companies }
}

module.exports = generateCompanies