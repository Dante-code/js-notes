// 函数 可以封装一段特定功能的代码，然后通过函数名可以重复调用此段代码
// 定义了一个函数 -- 函数不会自己运行
function getSum() {
  // 函数体  -- 一段代码
  var sum = 0;
  for (var i = 200; i <= 300; i++) {
    sum += i;
  }
  console.log(sum);
}

// 调用函数
getSum();
