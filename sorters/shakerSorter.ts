import { ISorter, Direction } from './ISorter';

export class ShakerSorter implements ISorter {
    type = "Shaker"
    
    public sort(array: number[], direction: Direction) : number[] {
        const compareFirst = (index: number) => {
            return direction === Direction.ascending 
              ? array[index - 1] > array[index]
              : array[index - 1] < array[index];
        };
        const compareSecond = (index: number) => {
            return direction === Direction.ascending 
              ? array[index] > array[index + 1]
              : array[index] < array[index + 1];
        };

        let left = 0;
        let right = array.length - 1;

        while (left <= right) {
            for (let index = right; index > left; --index) {
                if (compareFirst(index)) [array[index - 1], array[index]] = [array[index], array[index - 1]];
            }
            ++left;
            for (let index = left; index < right; ++index) {
                if (compareSecond(index)) [array[index + 1], array[index]] = [array[index], array[index + 1]];
            }
            --right;
        }
        
        return array;
    }
}