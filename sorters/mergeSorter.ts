import { ISorter, Direction } from './ISorter';

export class MergeSorter implements ISorter {
    type = "Merge"
    
    sort(array: number[], direction: Direction) : number[] {
        return array;
    }
}