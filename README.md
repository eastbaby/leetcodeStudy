# leetcodeStudy

力扣

## js 易错语法总结

concat 和 push 区分场景。
concat 不改变原数组，需要重新赋值。

Array的fill语法慎用！如果填充的类型为对象，那么被赋值的是同一个内存地址的对象，而不是深拷贝对象。
快速初始化Array：
```js
Array(100).fill('a');  // 注意fill不能填充对象和数组
[...Array(100)].map(_ => 'a');
```