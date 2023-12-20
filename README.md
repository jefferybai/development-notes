<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<!-- **Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)* -->

- [javascript](#javascript)
  - [基础知识](#%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86)
      - [js 的六种原始类型](#js-%E7%9A%84%E5%85%AD%E7%A7%8D%E5%8E%9F%E5%A7%8B%E7%B1%BB%E5%9E%8B)
      - [typeof vs instanceof](#typeof-vs-instanceof)
      - [对象转换原始类型的规则](#%E5%AF%B9%E8%B1%A1%E8%BD%AC%E6%8D%A2%E5%8E%9F%E5%A7%8B%E7%B1%BB%E5%9E%8B%E7%9A%84%E8%A7%84%E5%88%99)
      - [四则运算符](#%E5%9B%9B%E5%88%99%E8%BF%90%E7%AE%97%E7%AC%A6)
      - [比较运算法](#%E6%AF%94%E8%BE%83%E8%BF%90%E7%AE%97%E6%B3%95)
      - [this](#this)
      - [闭包](#%E9%97%AD%E5%8C%85)
      - [深度拷贝](#%E6%B7%B1%E5%BA%A6%E6%8B%B7%E8%B4%9D)
      - [原型链](#%E5%8E%9F%E5%9E%8B%E9%93%BE)
      - [Event Loop](#event-loop)
      - [promise](#%E6%89%8B%E5%86%99-promise)
      - [bind](#%E6%89%8B%E5%86%99-bind)
      - [new 的实现](#%E6%89%8B%E5%86%99-new-%E7%9A%84%E5%AE%9E%E7%8E%B0)
      - [apply](#%E6%89%8B%E5%86%99-apply)
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

## 基础知识

#### js 的六种原始类型

string、 number、 boolean、 undefine、 null、 symbol

#### typeof vs instanceof

typeof 能判断基本的数据类型。 对于 object 类型，除了 function 类型其他类型都显示 object

instanceof 判断么个函数的引用类型是否出现在实例类型的原型链上面

#### 对象转换原始类型的规则

- 如果对象是原始类型就返回原始类型
- 如果不是原始类型会调用 valueOf， 如果 valueOf 不是原始类型，那么会调用 toString。 也可以重写 toPrimitive 该方法优先级最高

#### 四则运算符

- 加减乘除运算符
  - 如果不是 number 类型， 先转换为 number 再进行运算
  - 在加法运算符中，如果运算符一方的类型有字符串，那么会将运算符的另外一侧也转换为字符串再相加

#### 比较运算法

- 如果是字符串比较的 unicode 索引
- 如果是引用类型先转换为 number 类型再进行比较

#### this

- 在全局作用于下调用函数 this 是 window
- new 的 function 里面的 this 是自己的实例
- 箭头里面的 this 是上下文
- 谁调用该函数 this 指向谁

#### 闭包

函数能够记住并访问自己的词法作用域， 即使函数在自己的词法作用域以外执行

#### 深度拷贝

- JSON.parse(JSON.stringify(object))， 不能识别 undefined、不能识别嵌套引用、会忽略函数、会忽略 symbol
- Messagechannel， 会忽略函数
- 自己实现递归的[deepclone](./deepclone.js)

#### 原型链

- 调用一个对象的方法时候， 对象会从自己的实例和原型链上面查找有没有这个函数
- 每个对象实例都有一个*proto*属性指向自己的原型链
- 每个函数都有一个 prototype 属性指向当前函数的实例

#### Event Loop

js所多线程的， 但是浏览器是多线程的。 

并发是指多个线程切换完成任务， 并行是指多个处理器同时处理不同的线程。

浏览器的线程一般分为， 渲染线程、操作dom线程、计时器线程、js引擎线程、网络请求线程。

宏任务一般都有settimeout、 I/O、setInterval、requestAnimationFrame。

微任务一般都有promise、process.nextTick。

js一般将任务分别放入三个容器，同步执行栈、宏任务队列、微任务队列。 

浏览器执行js，进入全局上下文，js从上往下执行，当遇到同步函数时候，函数依次加入执行栈并执行。

当遇到settimeout、setInterval等计时器函数时候，浏览器会开启计时器线程。 

当计时器线程执行完毕、js会将计时器线程里面的回调函数依次放入宏任务队列。

当遇到promise等函数时候，浏览器会将回调函数放入微任务队列。

当执行栈里面的任务执行完毕、js会取出宏任务队列的队首和微任务队列的全部任务至执行栈。 周而复始，直到任务全部执行完成。 


#### promise 
[code](./promise.js)

#### bind
[code](./bind.js)

#### new 的实现
[code](./new.js)

#### apply
[code](./apply.js)

#### 缓存
##### 缓存位置
- Service Worker 根据mainfest里面的配置文件缓存文件
- Memory Cache 缓存到内存
- Disc Cache 缓存到硬盘
- Push Cache http2独有的缓存机制，缓存在session中， 断开连接失效
#### 缓存策略
- 强缓存
  - Expirese 设置缓存失效日期
  - Cache-Control 设置失效时长
- 协商缓存
  - Last-Modified 最后更新时间
  - ETag 文件指纹，当文件有更新时候ETag值会发生改变
#### 缓存机制
当发起http请求时候，会先检查Service Worker、Memroy Cache、Disc Cache里面寻找有没有相关文件。并检查Expirese和Cache-Control的失效期。如果失效，会发起http请求，http请求会访问当前文件的Last-Modified或者ETag，如果没有发生改变
那么返回304。浏览器拿到304会去缓存里面取出缓存的文件并使用。


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
1. model
   ### 数据结构
   type node = Editor | Element | Text;
   type Element = {
    type: 'p' | 'div' | ''
    children: node[]
   }
   type Text = {
    type: 'text'
    text: string,
   [key: string]: unknown
   }
   ### 操作原则
   通过model的Transform类生成Operation的形式去原子化的更改node结点
   #### Operation的事件类型
   - insert_node
   - remove_node
   - set_node
   - merge_node
   - split_node
   - ...
   #### Operation的方法体
   insert_node(
      editor,
      node,
      location
   )
   #### location的描述
   type Path = number[];
   type Point = {
    path: Path,
    offert: number
   }
   type Range = {
    start: Point,
    end: Point
   }
   
3. 序列化/反序列化
   {
    type: "p"
    children: [
      {type: "section"}
    ]
   }
   
5. 视图
   React
   const renderElement = (node) => {
     switch(node.type)
     case: 'p'
     return <p>{node.text}<p>
   }

7. normallize
   数据标准化校验，作用于past html， 和对opration的进行校验
   
9. 键盘管理

    
11. redo/undo
   type redo = Operation[]
   type undo = Operation[]
   #### 协同
   crdt
   const resultJson = json + [...redo];
   #### 满足的条件
   - 交换律
   - 结合律
   - 幂等
   
   ot
    
13. 插件
    const editor = withBlodText(editor: Editor);
    const withBlodText = (editor) => {
      editor.blod = () => {
        
      }
    }
    
15. 选取和光标处理

# docker
  docker的作用，环境隔离、快速部署、易于移植。
  ### docker的三个概念
  - 镜像 类似于win7.ios
  - 仓库 存储镜像的地方
  - 容器 镜像运行起来就是容器
  ### 常用的docker命令
  - docker run       运行容器
  - docker delete    删除容器
  - dockder restart  重启容器
  - docker stop      停止容器
  - docker create    生成容器
  - docker build     生成镜像
  - docker load      加载镜像
  - docker pull      从仓库拉取镜像
  - docker push      上传镜像到容器
  ### dockerfile
  类似于package.json
  ### dockercompose
  组合命令

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
