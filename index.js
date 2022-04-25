// Code your solution in this file!
const returnFirstTwoDrivers = (function(array){
    return array.slice(0,2)
})

const returnLastTwoDrivers = (function(array){
    return array.slice(array.length - 2)
})

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
]

function selectDifferentDrivers(arrayOfDrivers, functions){
    return functions(arrayOfDrivers);
}





function createFareMultiplier(num){
    return fare => fare*num
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

