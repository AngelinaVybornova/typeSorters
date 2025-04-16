import { ISorter, Direction } from './ISorter';

export class QuickSorter implements ISorter {
    type = "Quick"

    public sort(array: number[], direction: Direction) : number[] {
        const comparator = this.getComparator(direction);
        this.quickSortImpl(array, 0, array.length - 1, comparator);

        return array;
    }

    private partition(array: number[], l: number, r: number, compare: (a: number, b: number) => boolean): number {
        const x = array[r];
        let less = l;
    
        for (let i = l; i < r; ++i) {
            if (compare(array[i], x)) {
                [array[i], array[less]] = [array[less], array[i]];
                ++less;
            }
        }
        [array[less], array[r]] = [array[r], array[less]];
        return less;
    }
    
    private quickSortImpl(array: number[], l: number, r: number, compare: (a: number, b: number) => boolean): void {
        if (l < r) {
            const q = this.partition(array, l, r, compare);
            this.quickSortImpl(array, l, q - 1, compare);
            this.quickSortImpl(array, q + 1, r, compare);
        }
    }

    private getComparator(direction: Direction): (a: number, b: number) => boolean {
        return direction === Direction.ascending
            ? (a, b) => a <= b
            : (a, b) => a >= b;
    }
}