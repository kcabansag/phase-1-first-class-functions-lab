// Code your solution in this file!


 const returnFirstTwoDrivers = (scubersDrivers) => {
    return scubersDrivers.slice(0, 2);
 }


 const returnLastTwoDrivers = (scubersDrivers) => {
    return scubersDrivers.slice(-2);
 }
 

 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];



 const createFareMultiplier = (fareMultiplier) => {
    return (fare) => {
        return fare * fareMultiplier;
    }
 }

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (scubersDrivers, driverSelector) => {
    return driverSelector(scubersDrivers);
}