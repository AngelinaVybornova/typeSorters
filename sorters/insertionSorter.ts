import { ISorter, Direction } from './ISorter';

export class InsertionSorter implements ISorter {
    type = "Insertion"
    
    sort(array: number[], direction: Direction) : number[] {
        return array;
    }
}