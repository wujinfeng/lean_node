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

    // 冒泡排序
    this.insertionSort = function() {
        var length = array.length,
            j, temp;
        for (var i = 1; i < length; i++) {
            j = i;
            temp = array[i];
            while (j > 0 && array[j - 1] > temp) {
                array[j] = array[j - 1];
                j--;
            }
            array[j] = temp;
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
array.insertionSort();
console.log('排序后：', array.toString())
//算法复杂度 O(n的平方) 排序小型数组时，此算法比选择算法和冒泡排序性能要好