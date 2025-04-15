import { ISorter, Direction } from './ISorter';

export class ShakerSorter implements ISorter {
    type = "Shaker"
    
    sort(array: number[], direction: Direction) : number[] {
        return array;
    }
}