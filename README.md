<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<!-- **Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)* -->

- [javascript](#javascript)
  - [隐式转换](#%E9%9A%90%E5%BC%8F%E8%BD%AC%E6%8D%A2)
      - [转换规则](#%E8%BD%AC%E6%8D%A2%E8%A7%84%E5%88%99)
      - [React setState 什么时候同步?时候时候异步?](#react-setstate-%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E5%90%8C%E6%AD%A5%E6%97%B6%E5%80%99%E6%97%B6%E5%80%99%E5%BC%82%E6%AD%A5)
- [css](#css)
  - [css 垂直居中对齐的 4 中方法](#css-%E5%9E%82%E7%9B%B4%E5%B1%85%E4%B8%AD%E5%AF%B9%E9%BD%90%E7%9A%84-4-%E4%B8%AD%E6%96%B9%E6%B3%95)
- [typescript](#typescript)
- [slatejs](#slatejs)
- [flutter](#flutter)
- [Chrome-DevTools](#chrome-devtools)
  - [通用技巧](#%E9%80%9A%E7%94%A8%E6%8A%80%E5%B7%A7)
  - [快捷键](#%E5%BF%AB%E6%8D%B7%E9%94%AE)
  - [console](#console)
  - [Network](#network)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# javascript

## [隐式转换](https://blog.csdn.net/lyh1299259684/article/details/80565419)

在 js 中，当运算符在运算时，如果两边数据不统一，CPU 就无法计算，这时我们编译器会自动将运算符两边的数据做一个数据类型转换，转成一样的数据类型再计算

#### 转换规则

1. 字符串连接符与算术运算符隐式转换规则
   - 算数运算符会将其他数据类型 Number()然后相加
   - 字符串连接运算符会将其他数据类型 String()然后相加

```
    console.log(1+'true') //'1true'
    console.log(1 + true) //2
```

2. 关系运算符：会把其他数据类型转换成 number 之后再比较关系, 当运算符两边多少 string 的情况下，会转为 Unicode 编码的数字。

```
    console.log('2' > 10) //false
    console.log('2' > '10') //true
```

3. 复杂数据类型在隐式转换时会先转成 String，然后再转成 Number 运算

```
  console.log([1,2] == '1,2') //true
```

#### [React setState 什么时候同步?时候时候异步?](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/17)

1.在 setTimeout, setInterval, addEventListener 中为同步 2.在 React 影发的事件(onClick, componentDidMount...)中为异步

# css

## css 垂直居中对齐的 4 中方法

1. 当 line-height 和 height 两个属性设置为相同的高度
2. 父元素设置为 display:table-cell 和 vertical-align:middle
3. 父元素固定高度,子元素 display: absolute; height: 50px; top: 50%; margin-top: -25px;
4. 父元素, display: flex; align-items: center;

# typescript

# slatejs

# flutter

# Chrome-DevTools

## 通用技巧

1. copy(location)`复制控制台信息
2. 右击控制台输出的信息，可以保存为全局变量
3. $调出类似 jquery 的选择器功能

## 快捷键

1. common 面板

- 控制台`command + shift + p`调出类似 vscode 的命令框
- 输入`screen`可以选择对当前网页`full size`全部截屏
- 输入`theme`可以切换黑白模式
- 删掉`>`，输入`!`，可以选择执行相应的代码块

## console

1. console.log('%c 厉害了', 'font-size: 23px; color: red;')
2. console.table() 适用于数组和对象
3. console.log({var1, var2}) 用大括号抱起来区分变量
4. console.dir() 能够查看 dom 的关联信息
5. console.time() — 开启一个计时器
   console.timeEnd() — 结束计时并且将结果在 console 中打印出来

## Network

1. 过滤器: 可以输入字符串或正则表达式，过滤请求，Ctrl + Space 显示所有可能的关键字
2. 右键选择 Replay XHR,可以重新发起 http 请求
