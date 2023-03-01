class heep {
    constructor() {
        this.heep = []
    }
    parentNode(index) {
        return Math.floor((index - 1) / 2)
    }

    leftNode(index) {
        return (2 * index + 1)
    }

    rightNode(index) {
        return (2 * index + 2)
    }

    swap(a, b) {
        let temp = this.heep[a]
        this.heep[a] = this.heep[b]
        this.heep[b] = temp
    }

    insert(item) {
        this.heep.push(item);
        var index = this.heep.length - 1;
        var parent = this.parentNode(index);
        while(this.heep[parent] && this.heep[parent] < this.heep[index]) {
            this.swap(parent, index);
            index = this.parentNode(index);
            parent = this.parentNode(index);
        }
    }

    delete() {
        var item = this.heep.shift();
        this.heep.unshift(this.heep.pop());

        var index = 0;
        var leftChild = this.leftNode(index);
        var rightChild = this.rightNode(index);
        while(this.heep[leftChild] && this.heep[leftChild] > this.heep[index] || this.heep[rightChild] > this.heep[index]){
            var max = leftChild;
            if(this.heep[rightChild] && this.heep[rightChild] > this.heep[max]){
                max = rightChild
            }
            this.swap(max, index);
            index = max;
            leftChild = this.leftNode(max);
            rightChild = this.rightNode(max);
        }
        return item;
    }
}

function heepSort(arr){
    var sorted = [];
    var heep1 = new heep();
    
    for(let i=0; i<arr.length; i++){
        heep1.insert(arr[i]);
    }
    
    for(let i=0; i<arr.length; i++){
        sorted.push(heep1.delete());
    }
    return sorted;
}

let arr = [1, 6, 2, 3, 7, 3, 4, 6, 9];
arr = heepSort(arr);

const x = new heep()

x.insert(10)
x.insert(15)
x.insert(12)
x.insert(20)
x.insert(25)
x.insert(30)

console.log(x);

console.log(arr);