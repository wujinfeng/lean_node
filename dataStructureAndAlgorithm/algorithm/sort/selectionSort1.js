// 创建个数组（列表）数据结构
function ArrayList() {
    var array = [];
    this.insert = function(item) {
        array.push(item)
    };
    this.toString = function() {
        return array.join(',')
    };

    // 交换			
    var swap = function(index1, index2) {
        var temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    }

    // 选择排序,最小值放在第一位
    this.selectionSort = function() {
        var length = array.length,
        indexMin;
        for (var i = 0; i < length-1; i++) {
            indexMin = i;
            for (var j = i; j < length ; j++) {
                if (array[indexMin] > array[j]) {
                    indexMin = j
                }
            }
            if ( i !== indexMin) {
                swap(i, indexMin)
            } 
        };
    }

   
}

function createNonSortedArray(size) {
    var array = new ArrayList();
    for (var i = size; i > 0; i--) {
        array.insert(i);
    }
    return array;
}

var array = createNonSortedArray(5);
console.log('原数组：', array.toString())
array.selectionSort();
console.log('排序后：', array.toString())
//算法复杂度 O(n的平方)