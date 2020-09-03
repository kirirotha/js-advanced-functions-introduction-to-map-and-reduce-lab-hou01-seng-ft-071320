// Your code here


function mapToNegativize(sourceArray){
    let toNegative = sourceArray.map(x => -x)  
    return toNegative  
}
function mapToNoChange(sourceArray){
    let noChange = sourceArray.map(x => x)
    return noChange
}

function mapToDouble(sourceArray){
    let toDouble = sourceArray.map(x => 2 * x)
    return toDouble
}

function mapToSquare(sourceArray){
    let toSquare = sourceArray.map(x => x * x)
    return toSquare
}

function reduceToTotal(sourceArray, startingPoint=0){
    let reduceToT = sourceArray.reduce((accumulator, currentNumber) => {
        return accumulator + currentNumber
    }, startingPoint)
    return reduceToT
}

function reduceToAllTrue(sourceArray){
     let reduceAllTrue = sourceArray.reduce((sourceArray, currentValue) =>{
        if (currentValue){
            return true
        }else{
            return false
        }
     }) 
     return reduceAllTrue
}

function reduceToAnyTrue(sourceArray){
    let reduceAnyTrue = sourceArray.reduce((sourceArray, currentValue) => {
        if (currentValue){
            return true
        }else{
            return false
        }
    })
    return reduceAnyTrue
}