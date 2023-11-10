// Write your solution here!  

function myEach(collection, callback) {
   if(Array.isArray(collection)) {
    for(let i = 0; i < collection.length; i++) {
        callback(collection[i])
    }
   } else {
    for (const key in collection) {
        callback(collection[key])
    }
   }
   return collection 
}

function myMap(collection, callback) {
    const updatedArray = [];
    if(Array.isArray(collection)) {
        for(let i = 0; i < collection.length; i++) {
            updatedArray.push(callback(collection[i]))
        }
    } else {
        for (const key in collection) {
            updatedArray.push(callback(collection[key]))
        }
    }
    return updatedArray
}

function myReduce(collection, callback, acc) {
    if(Array.isArray(collection)) {
        if (acc === undefined) {
            acc = collection[0];
        
        for(let i = 1; i < collection.length; i++) {
            acc = callback(acc, collection[i], collection)
        }
    } else {
        for(let i = 0; i < collection.length; i++) {
            acc = callback(acc, collection[i], collection)
    }
}
} else {
    console.log(collection);
    const objectIntoArray = Object.values(collection)
    console.log(objectIntoArray)
    if (acc === undefined) {
        acc = objectIntoArray[0];
    
    for(let i = 1; i < objectIntoArray.length; i++) {
        acc = callback(acc, objectIntoArray[i], objectIntoArray)
    }
} else {
    for(let i = 0; i < objectIntoArray.length; i++) {
        acc = callback(acc, objectIntoArray[i], objectIntoArray)
            }       
        }         
    }
return acc;
}

function myFind(collection, predicate) {
    if(Array.isArray(collection)) {
        for(let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                return collection[i]
            }
        }
    } else {
        for(const key in collection) {
            if (predicate(collection[key])) {
                return collection[key]
            }
        }
        }
    return undefined;
    }

function myFilter(collection, predicate) {
    const filteredValues = [];
    if(Array.isArray(collection)) {
        for(let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                filteredValues.push(collection[i])
            }
        }
    } else {
        for(const key in collection) {
            if (predicate(collection[key])) {
                filteredValues.push(collection[key])
            }
        }
    }
    return filteredValues;
}

function mySize(collection) {
    if(Array.isArray(collection)) {
        return collection.length
    } else {
        return Object.keys(collection).length
    }
}

function myFirst(array, n) {
    if (n && Number.isInteger(n) && n > 0) {
        return array.slice(0, n)
    } else {
        return array[0]
    }
}

function myLast(array, n) {
    if (n && Number.isInteger(n) && n > 0) {
        const last = array.slice(-n)
        return last
    } else {
        return array[array.length - 1];
    }
}

function myKeys(object) {
    return Object.keys(object)
}

function myValues(object) {
    return Object.values(object)
}
