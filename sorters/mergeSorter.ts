import { ISorter, Direction } from './ISorter';

export class MergeSorter implements ISorter {
    type = "Merge"
    
    public sort(array: number[], direction: Direction): number[] {
        const comparator = this.getComparator(direction);

        if (array.length > 0) {
            const buffer = new Array(array.length);
            this.mergeSort(array, buffer, 0, array.length - 1, comparator);
        }
        return array;
    }

    private mergeSort(array: number[], buffer: number[], l: number, r: number, compare: (a: number, b: number) => boolean): void {
        if (l < r) {
            const m = Math.floor((l + r) / 2);
            this.mergeSort(array, buffer, l, m, compare);
            this.mergeSort(array, buffer, m + 1, r, compare);

            let k = l;
            let i = l;
            let j = m + 1;

            while (i <= m || j <= r) {

                if (j > r || (i <= m && compare(array[i], array[j]))) {
                    buffer[k] = array[i];
                    ++i;
                } else {
                    buffer[k] = array[j];
                    ++j;
                }
                ++k;
            }

            for (let i = l; i <= r; ++i) {
                array[i] = buffer[i];
            }
        }
    }

    private getComparator(direction: Direction): (a: number, b: number) => boolean {
        return direction === Direction.ascending
            ? (a, b) => a < b
            : (a, b) => a > b;
    }
}