function hasDuplicateValue(aarray) {
    var existingNumbers = []
    for(var i = 0; i < array.length; i++) {
        if(existingNumbers[array[i]] ===undefined) {
            existingNumbers[array[i]] = 1;
        } else {
            return true;
        }

    }
    return false;
}

array = [3, 5, 8]