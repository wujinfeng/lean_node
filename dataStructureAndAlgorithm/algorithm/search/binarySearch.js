// 二分查找
// 创建个数组（列表）数据结构
function ArrayList() {
    var array = [];
    this.insert = function(item) {
        array.push(item)
    };
    this.toString = function() {
        return array.join(',')
    };
    //	二分查找
    this.binarySearch = function(item) {
        this.quickSort();
        var low = 0,
            high = array.length - 1,
            mid, element;

        while (low <= high) {
            mid = Math.floor((high + low) / 2);
            element = array[mid];

            if (element < item) {
                low = mid + 1;
            } else if (element > item) {
                high = mid - 1;
            } else {
                return mid;
            }
        }
        return -1;
    };

    // 快速排序
    this.quickSort = function() {
        quick(array, 0, array.length - 1);
    };

    var quick = function(array, left, right) {
        var index;
        if (array.length > 1) {
            index = partition(array, left, right);
            if (left < index - 1) {
                quick(array, left, index - 1);
            }
            if (index < right) {
                quick(array, index, right);
            }
        }
    };

    var partition = function(array, left, right) {
        var pivot = array[Math.floor((right + left) / 2)],
            i = left,
            j = right;
        while (i <= j) {
            while (array[i] < pivot) {
                i++;
            }

            while (array[j] > pivot) {
                j--;
            }

            if (i <= j) {
                swapQuickStort(array, i, j);
                i++;
                j--;
            }
        }
        return i;
    };

    var swapQuickStort = function(array, i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
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
array.quickSort();
console.log('排序后：', array.toString())
console.log('2索引：', array.binarySearch(2));
//算法复杂度 O(nlogn)