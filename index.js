// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
    const newDriver = Object.assign( {}, driver, { [key] : value})
    return newDriver
};

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    Object.assign(driver, { [key]: value})
    return driver
};

key = 'name'

function deleteFromDriverByKey(driver, key) {
    const newDriver = Object.assign({}, driver);
    delete newDriver[key];
    return newDriver;
};

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver
};