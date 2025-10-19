const array = [10, 9, 50, 1, 100, 54, 8, 720, 2, 6];

//Se resume en que va comparando agarrando al mayor de todos, y lo lleva lo más al final posible
//Luego, recorre pero ya no al último elemento, que es el que ya debería ser el mayor al final
function bubbleSort(array) {

    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < (array.length - i - 1); j++) {
            if(array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }

    return array;
}

console.log(bubbleSort(array));



