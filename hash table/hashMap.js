

// class hashTable {
//     constructor(size) {
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key) {
//         let total = 0
//         for (let i = 0; i < key.length; i++) {
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }
//     set(key, value) {
//         const index = this.hash(key)
//         const bucket = this.table[index]

//         if (!bucket) {
//             this.table[index] = [[key, value]]
//         } else {
//             const sameKeyItem = bucket.find(item => item[0] == key)
//             if (sameKeyItem) {
//                 sameKeyItem[1] = value
//             } else {
//                 bucket.push([key, value])
//             }
//         }
//     }

//     get(key) {
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if (bucket) {
//             const sameKeyItem = bucket.find(item => item[0] = key)
//             if (sameKeyItem) {
//                 return sameKeyItem[1]
//             }
//         }
//         return undefined
//     }

//     remove(key) {
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if (bucket) {
//             const sameKeyItem = bucket.find(item => item[0] == key)
//             if (sameKeyItem) {
//                 return splice(bucket.indexOf(sameKeyItem), 1)
//             }
//         }
//     }

//     print() {
//         for (let i = 0; i < this.table.length; i++) {

//             if (this.table[i]) {
//                 console.log(i, this.table[i]);
//             }

//         }
//     }
// }


//  const table = new hashTable(50)

// table.set('a', 10)
// table.set('b',20)
// table.print()
// // console.log();



class hashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    } 

    set(key,val){
        let index = this.hash(key)
        let bucket = this.table[index]
        if (!bucket) {
            this.table[index] =[[key,val]]
        }else{
            let sameKey = bucket.find(item => item[0]==key)
            if (sameKey) {
                sameKey[1] = val
            }else{
                bucket.push([key,val])
            }
        }
    }

    get(key){
        let index = this.hash(key)
        let bucket = this.table[index]
        if (bucket) {
            const sameKey = bucket.find(item =>item[0]==key)
            return sameKey[1]
        }
        return undefined
    }


    print(){
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i,this.table[i]);
            }
        }
    }
}

const list = new hashTable(50)
list.set('a',10)
list.set('b',20)
list.set('c',30)
list.set('h',15)
list.set('l',25)
list.set('q',35)

list.print()

















// 1800 2587 170
// 1860 2580 79




































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































