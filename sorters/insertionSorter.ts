import { ISorter, Direction } from './ISorter';

export class InsertionSorter implements ISorter {
    type = "Insertion"
    
    public sort(array: number[], direction: Direction) : number[] {
        for (let index = 0; index < array.length; index++) {
            const x = array[index];
            let j = index;

            while (j > 0 && this.getComparator(direction)(array[j - 1], x)) {
                array[j] = array[j - 1]
                --j;
            }
            array[j] = x;
        }

        return array;
    }

    private getComparator(direction: Direction): (a: number, b: number) => boolean {
        return direction === Direction.ascending 
              ? (a, b) => a > b 
              : (a, b) => a < b;
    }
}