function describe_city(city, country) {
    if (country === void 0) { country = 'Pakistan'; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city('Lahore', undefined);
describe_city('Islamabad', undefined);
describe_city('Ammsterdan', 'Netherlands');
