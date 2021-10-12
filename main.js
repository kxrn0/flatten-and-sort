function flattenAndSort(array) {
    let flat = [];

    array.forEach(arr => {
        for (let elem of arr)
            flat.push(elem);
    });

    flat.sort(((a, b) => a - b));
    
    return flat;
}
