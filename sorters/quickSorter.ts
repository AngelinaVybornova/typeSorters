import { ISorter, Direction } from './ISorter';

export class QuickSorter implements ISorter {
    type = "Quick"
    
    sort(array: number[], direction: Direction) : number[] {
        return array;
    }
}