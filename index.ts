import { Randomizer } from './randomizer';
import { ISorter, Direction } from './sorters/ISorter';
import { InsertionSorter } from './sorters/insertionSorter';
import { MergeSorter } from './sorters/mergeSorter';
import { QuickSorter } from './sorters/quickSorter';
import { ShakerSorter } from './sorters/shakerSorter';
import config from './config.json';
import { HttpClient } from './httpClient';

var array: number[] = [];
var sorter: ISorter;
var direction: Direction;

for (let index = 0; index < Randomizer.getRandomInt(20, 100); index++) {
    array.push(Randomizer.getRandomInt(-100, 100));
}

direction = (Randomizer.getRandomInt(1, 2) == 1) ? Direction.ascending : Direction.descending;

switch (Randomizer.getRandomInt(1, 4)) {
    case 1:
        sorter = new InsertionSorter();
        break;
    case 2:
        sorter = new MergeSorter();
        break;
    case 3:
        sorter = new QuickSorter();
        break;
    case 4:
        sorter = new ShakerSorter();
        break;
    default:
        throw new Error("Unexpected sorter");
}

console.log("Unsorted:", array.join(" "));

array = sorter.sort(array, direction);

console.log("Sorted:", array.join(" "));
console.log(sorter.type, "sort,", "direction:", direction.toString());

HttpClient.post(config.address, array);