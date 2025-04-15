export interface ISorter {
    type: string;
    
    sort(array: number[], direction: Direction) : number[];
}

export enum Direction {
    ascending = "ascending",
    descending = "descending"
}