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
    arr[index] = value;
    console.log(arr);
    return;
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
// addElement(15, 5);
// addElement(15, 7);
// addElement(15, 11);

// Problem 2: Nhập mảng sao cho khi nhập xong giá trị trong mảng được sắp xếp giảm dần.
// note: không dùng sort()
// array.length-1-i sẽ tương đương với array.length-1-0 ở lần thứ nhất của outer loop và array.length-1-1 ở lần lặp thứ hai.. cho đến hết.

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

// sortElementArray2();

// Problem 4: Xóa phần tử trùng lặp trong mảng

let arr4 = ["a", "a", "b", "c", "a"];

const uniqueArr = arr4.filter((c, index) => {
  // console.log(index);
  // console.log(arr4.indexOf(c));
  // indexOf trả về index của lần đầu tiên phần tử đó xuất hiện
  return arr4.indexOf(c) === index;
});

// console.log(uniqueArr);

// Problem 5: Sử dụng đệ quy, tính S(n) = 1 + 2 + 3 + … + n
// Công thức:
// Khoảng cách = Số hạng sau - Số hạng trước = 1
// Số hạng đầu dãy số là 1, cuối dãy số là n
// Số của các số hạng = (Cuối - Đầu) / Khoảng cách + 1 = (n - 1) / 1 + 1
// Tổng dãy số = [(Đầu + Cuối) x Số của các số hạng] / 2
// ((1 + n) x ( n - 1 / 1 + 1) / 2)

const S = (n) => {
  if (n === 1) {
    return 1;
  } else {
    return S(n - 1) + n;
  }
};

// console.log(S(3));

// Problem 6: Sử dụng đệ quy, tính T(n) = n! =  1 x 2 x 3 x … x n. Trong đó, T(0) = 1

const T = (n) => {
  if (n === 0) {
    return 1;
  } else {
    return T(n - 1) * n;
  }
};

// console.log(T(4));

// Problem 7: Kiếm tra số nguyên dương n có toàn chữ số lẻ hay không?
const checkInteger = (i) => {
  const splitI = Array.from(String(i), Number);

  const deepSplit = splitI.filter((e) => {
    return !Number.isNaN(e);
  });

  console.log(deepSplit);
  for (let n of deepSplit) {
    if (n % 2 == 0) {
      console.log("đây là chữ số chẵn!");
    } else {
      console.log("passed");
    }
  }
};

// console.log(checkInteger(3.111111));

// Problem 8: Magic Square là một ma trận có kích thước n x n. Trong đó, khi cộng các số trên cùng một hàng hoặc một cột bất kỳ,
// hoặc trên một trong hai đường chéo của ma trận, bạn đều nhận được một số giống nhau, số đó gọi là Magic const.
// Cho một ma trận 3 x 3 bất kỳ, nó chưa phải là Magic Square. Tính chi phí tối thiểu để chuyển ma trận này -> Magic Square.
const initialMatrix = [[5, 3, 4, 1, 5, 8, 6, 4, 2]];

const magicSquare = [
  [8, 1, 6, 3, 5, 7, 4, 9, 2],
  [4, 3, 8, 9, 5, 1, 2, 7, 6],
  [2, 9, 4, 7, 5, 3, 6, 1, 8],
  [6, 7, 2, 1, 5, 9, 8, 3, 4],
  [6, 1, 8, 7, 5, 3, 2, 9, 4],
  [8, 3, 4, 1, 5, 9, 6, 7, 2],
  [4, 9, 2, 3, 5, 7, 8, 1, 6],
  [2, 7, 6, 9, 5, 1, 4, 3, 8],
];

// const sompareMatrix = (a, b) => {
//   for (var i = 0; i < a.length; i++) {
//     for (var x = 0; x < b.length; x++) {
//       if (a[i][0] == b[x][0] && a[i][1] == b[x][1] && a[i][2] && b[x][2]) {
//         console.log("true");
//       }
//     }
//   }
// };

// console.log(sompareMatrix(initialMatrix, magicSquare));

// const isMagicSquare = (a) => {
//   var sumd1 = 0;
//   var sumd2 = 0;
//   for (var i = 0; i < a.length; i++) {
//     sumd1 += a[i][i]; // đường chéo từ bên trên trái -> phải dưới
//     sumd2 += a[i][a.length - 1 - i]; // đường chéo từ bên trên phải -> trái dưới
//   }

//   if (sumd1 != sumd2) {
//     return false;
//   }

//   for (var i = 0; i < a.length; i++) {
//     var colSum = 0;
//     var rowSum = 0;

//     for (var j = 0; j < a.length; j++) {
//       rowSum += a[i][j];
//       colSum += a[j][i];
//     }
//     if (rowSum != colSum || colSum != sumd1) {
//       return false;
//     }
//     return true;
//   }
// };

// console.log(isMagicSquare(initialMatrix));
