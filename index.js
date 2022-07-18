// Problem 1: Thêm phần tử vào mảng mà không sử dụng hàm có sẵn trong js
// Yêu cầu input gồm 2 giá trị là giá trị và vị trí thêm vào
// My solution:
// 1: index của phần tử là 0 -> di chuyển tất cả các phần tử có sẵn trong mảng thêm 1 index
// 2: index của phần tử > length của mảng -> thêm phần tử vào cuối với index > length của mảng
// 3: index lẻ, là các case: > 0 < length của mảng -> từ vị trí cần thêm, cộng 1 index cho tất cả các phần tử sau đó

// note: chú ý length với index

let arr = [0, 1, 2, 3, 4, 5, 6];

function addElement(value, index) {
  if (index === 0) {
    for (let i = arr.length - 1; i >= 0; i--) {
      console.log(arr[i]);
      arr[i + 1] = arr[i];
    }
    arr[0] = value;
  }
  if (index === arr.length) {
    arr[arr.length - 1] = value;
  }
  if (index > arr.length) {
    arr[index] = value;
  }
  if (index > 0 && index < arr.length) {
    for (let i = arr.length - 1; i >= index; i--) {
      console.log(arr[i]);
      arr[i + 1] = arr[i];
    }
    arr[index] = value;
  }
  console.log(arr);
}

// addElement(15, 0);
// addElement(15, 1);
// addElement(15, 7);
// addElement(15, 11);

// Problem 2: Nhập mảng sao cho khi nhập xong giá trị trong mảng được sắp xếp giảm dần.
// note: không dùng sort()

let arr2 = [];

function sortElementArray() {
  arr2.push(84, 20, 11, 54);
  for (let i = 0; i < arr2.length; i++) {
    for (let x = 0; x < arr2.length - 1 - i; x++) {
      if (arr2[x] < arr2[x + 1]) {
        [arr2[x + 1], arr2[x]] = [arr2[x], arr2[x + 1]];
      }
    }
  }
  console.log(arr2);
}

sortElementArray();

// Problem 3:
let arr3 = [84, 20, 11, 54];

function sortElementArray2() {
  arr3.push(13);
  for (let i = 0; i < arr3.length; i++) {
    for (let x = 0; x < arr3.length - 1 - i; x++) {
      if (arr3[x] > arr3[x + 1]) {
        [arr3[x], arr3[x + 1]] = [arr3[x + 1], arr3[x]];
      }
    }
  }
  console.log(arr3);
}

sortElementArray2();

// Problem 4: Xóa phần tử trùng lặp trong mảng

let arr4 = ["a", "a", "b", "c", "a"];

const uniqueArr = arr4.filter((c, index) => {
  // console.log(index);
  // console.log(arr4.indexOf(c));
  // indexOf trả về index của lần đầu tiên phần tử đó xuất hiện
  return arr4.indexOf(c) === index;
});

console.log(uniqueArr);

// Problem 5: Sử dụng đệ quy, tính S(n) = 1 + 2 + 3 + … + n
// Công thức:
// Khoảng cách = Số hạng sau - Số hạng trước = 1
// Số hạng đầu dãy số là 1, cuối dãy số là n
// Số của các số hạng = (Cuối - Đầu) / Khoảng cách + 1 = (n - 1) / 1 + 1
// Tổng dãy số = [(Đầu + Cuối) x Số của các số hạng] / 2
// ((1 + n) x ( n - 1 / 1 + 1) / 2)

const recursive = (n) => {
  if (n === 1) {
    return 1;
  } else {
    return recursive(n - 1) + n;
  }
};

console.log(recursive(3));
