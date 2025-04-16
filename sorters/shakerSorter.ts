import { ISorter, Direction } from './ISorter';

export class ShakerSorter implements ISorter {
    type = "Shaker"
    
    public sort(array: number[], direction: Direction) : number[] {
        const comparator = this.getComparator(direction);

        let left = 0;
        let right = array.length - 1;

        while (left <= right) {
            for (let index = right; index > left; --index) {
                if (comparator(array[index - 1], array[index])) [array[index - 1], array[index]] = [array[index], array[index - 1]];
            }
            ++left;
            for (let index = left; index < right; ++index) {
                if (comparator(array[index], array[index + 1])) [array[index + 1], array[index]] = [array[index], array[index + 1]];
            }
            --right;
        }
        
        return array;
    }

    private getComparator(direction: Direction): (a: number, b: number) => boolean {
        return direction === Direction.ascending 
              ? (a, b) => a > b 
              : (a, b) => a < b;
    }
}