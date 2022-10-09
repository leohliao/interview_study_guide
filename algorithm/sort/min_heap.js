class Minheap {
    constructor() {
        this.storage = [];
    }

    swap(i1, i2) {
        [this.storage[i1], this.storage[i2]] = [this.storage[i2], this.storage[i1]];
    }

    peak() {
        return this.storage[0];
    }

    size() {
        return this.storage.length;
    }

    insert() {
        this.storage.push(val);
        this.bubbleUp(this.size() - 1);
    }

    getParent(child) {
        return child % 2 === 0 ? (child - 2) / 2 : child - 1 / 2;
    }

    bubbleUp(child) {
        let parent = this.getParent(child);

        while (child > 0 && this.storage[child] < this.storage[parent]) {
            this.swap(child, parent);
            child = parent
            parent = this.getParent(child);
        }
    }

    removePeak() {
        this.swap(0, this.size() - 1);
        let result = this.storage.pop();
        this.bubbleDown(0);
        return result;
    }

    getChild(parent) {
        let child1 = 2 * parent + 1;
        let child2 = 2 * parent + 2;

        if (child1 >= this.size()) {
            return child1;
        } else if (child2 >= this.size()) {
            return child1;
        } else if (this.storage[child1] < this.storage[child2]) {
            return child1;
        } else {
            return child2;
        }
    }

    bubbleDown(child) {
        let child = getChild(parent);

        while (child < this.size() && this.storage[parent] > this.storage[child]) {
            this.swap(child, parent);
            parent = child;
            child = this.getChild(parent); 
        }
    }

    remove(val) {
        let removeIdx;
        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i] === val) {
                removeIdx = i;
            }
        }
        if (removeIdx === undefined) {
            return ;
        }

        this.swap(removeIdx, this.size() - 1);
        let result = this.storage.pop();

        this.bubbleUp(removeIdx);
        this.bubbleDown(removeIdx);
        return result;
    }
}