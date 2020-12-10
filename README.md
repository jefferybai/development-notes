<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<!-- **Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)* -->

- [javascript](#javascript)
- [typescript](#typescript)
- [slatejs](#slatejs)
- [flutter](#flutter)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# javascript

## [隐式转换] (https://blog.csdn.net/lyh1299259684/article/details/80565419)
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



# typescript

# slatejs

# flutter