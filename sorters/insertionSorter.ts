import { ISorter, Direction } from './ISorter';

export class InsertionSorter implements ISorter {
    type = "Insertion"
    
    public sort(array: number[], direction: Direction) : number[] {
        const compare = (j: number, x: number) => {
            return direction === Direction.ascending 
              ? array[j - 1] > x 
              : array[j - 1] < x;
        };

        for (let index = 0; index < array.length; index++) {
            const x = array[index];
            let j = index;

            while (j > 0 && compare(j, x)) {
                array[j] = array[j - 1]
                --j;
            }
            array[j] = x;
        }

        return array;
    }
}