<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<!-- **Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)* -->

- [javascript](#javascript)
  - [隐式转换](#%E9%9A%90%E5%BC%8F%E8%BD%AC%E6%8D%A2)
      - [转换规则](#%E8%BD%AC%E6%8D%A2%E8%A7%84%E5%88%99)
      - [React setState什么时候同步?时候时候异步?](#react-setstate%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E5%90%8C%E6%AD%A5%E6%97%B6%E5%80%99%E6%97%B6%E5%80%99%E5%BC%82%E6%AD%A5)
- [css](#css)
  - [css居中对齐的4中方法](#css%E5%B1%85%E4%B8%AD%E5%AF%B9%E9%BD%90%E7%9A%844%E4%B8%AD%E6%96%B9%E6%B3%95)
- [typescript](#typescript)
- [slatejs](#slatejs)
- [flutter](#flutter)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# javascript

## [隐式转换](https://blog.csdn.net/lyh1299259684/article/details/80565419)
在js中，当运算符在运算时，如果两边数据不统一，CPU就无法计算，这时我们编译器会自动将运算符两边的数据做一个数据类型转换，转成一样的数据类型再计算

#### 转换规则
1. 字符串连接符与算术运算符隐式转换规则
    - 算数运算符会将其他数据类型Number()然后相加
    - 字符串连接运算符会将其他数据类型String()然后相加
```
    console.log(1+'true') //'1true'  
    console.log(1 + true) //2 
```

2. 关系运算符：会把其他数据类型转换成number之后再比较关系
```
    console.log('2' > 10) //false
    console.log('2' > '10') //true
```

#### [React setState什么时候同步?时候时候异步?](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/17)
1.在setTimeout, setInterval, addEventListener中为同步
2.在React影发的事件(onClick, componentDidMount...)中为异步

# css

## css垂直居中对齐的4中方法
1.当 line-height 和 height 两个属性设置为相同的高度
2.父元素设置为 display:table-cell 和 vertical-align:middle
3.父元素固定高度,子元素 display: absolute; height: 50px; top: 50%; margin-top: -25px;
4.父元素, display: flex; align-items: center;

# typescript

# slatejs

# flutter