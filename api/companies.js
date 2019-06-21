let faker = require('faker');

let generateCompanies = () => {
    let companies = [];
    let status = []

    for (let id = 0; id < 30; id++) {
        let name = faker.company.companyName();
        let industry = faker.name.jobArea();
        let catchPhrase = faker.company.catchPhrase();
        let bs = faker.company.bs();
        let keyContact1 = faker.name.findName();
        let email1 = faker.internet.email();
        let keyContact2 = faker.name.findName();
        let email2 = faker.internet.email();
        status.push("Researching", "Pending approval", "Approved", "Declined")
        let financialPerformance = Number(faker.finance.amount());
        let address = faker.address.streetAddress() + ' ' + faker.address.city() + ', ' + faker.address.stateAbbr() + ' ' + faker.address.zipCode();

        companies.push({
            "id": id,
            "name": name,
            "industry": industry,
            "catchPhrase": catchPhrase,
            "bs": bs,
            "keyContact1": keyContact1,
            "email1": email1,
            "keyContact2": keyContact2,
            "email2": email2,
            "status": status[Math.floor(Math.random() * Math.floor(status.length))],
            "financialPerformance": financialPerformance,
            "address": address
        });
    }
    return { "companies": companies }
}

module.exports = generateCompanies