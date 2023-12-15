// Code your solution in this file!
const arrayOfDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = () => arrayOfDrivers.slice(0,2);

    const theFirstTwoDrivers = returnFirstTwoDrivers(arrayOfDrivers);
 
const returnLastTwoDrivers = () => arrayOfDrivers.slice(-2);
    const theLastTwoDrivers = returnLastTwoDrivers(arrayOfDrivers);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

    
function createFareMultiplier(multiplier) {
    return function fareMultiplier(fareForARide){
        return fareForARide*multiplier ;
    }
}
const fareDoubler =createFareMultiplier(2);
const fareTripler =createFareMultiplier(3);
function selectDifferentDrivers(arrayOfDrivers, driverNames) {
    return driverNames(arrayOfDrivers);
}