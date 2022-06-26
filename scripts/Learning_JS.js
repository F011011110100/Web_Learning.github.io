// let myHeading=document.querySelector('h3');
// // 用querySelector()函数获取标题的引用，并存储在myHeading变量中
// myHeading.textContent='Hello world!';

// 把myHeading变量的属性textContent(标题内容)修改为"Hello World!"
// let与var是变量，一般用let
// 当你使用 var 时，
// 可以根据需要多次声明相同名称的变量，
// 但是 let 不能。
// 以下将有效：
// var myName='Chris';
// var myName='Bob';
// 但是以下会发生错误
// let myName='Chris';
// let myName='Bob';
// 必须这样：
// var myName='Chris';
// myName='Bob';

// 定义数组
// let myNameArray=['Chris','Bob','Jim'];
// myNameArray[0]; //should return 'Chris'

// 定义对象
// let dog={name:'Spot',breed:'Dalmation'};
// 检索对象中的信息，可以使用：dog.name

// 动态类型
// typeof返回所传递发变量的数据类型，如：
// let myNumber='500';
// typeof myNumber;//输出string类型
// myNumber=500;
// typeof myNumber;//输出number类型

//运算符
// 加+ 减- 乘* 除/ 赋值=
// 重点：等于===(3个等号)，不等于!==(多一个=号)
// 取非！

// if条件语句跟C语言一样，只是判断条件的时候多了一个等于号

// 函数用来封装可复用的功能。例如：
// let myVariable = document.querySelector('h1');
// alert('hello!');
// document.querySelector和alert是浏览器内置的函数，随时可用
// 名字后面加了()就可能是函数
// alert()函数在浏览器窗口弹出一个警告框，警告框会显示alert内的内容
// function multiply(num1,num2)
// {
//     let result=num1*num2;
//     return result;
// }

// 事件为网页添加交互能力。
// 它可以捕捉浏览器操作并运行一些代码做为响应。
// 最简单的事件是【点击事件】，
// 鼠标的点击操作会触发该事件。
// 可尝试将下面的代码输入到控制台，
// 然后点击页面的任意位置：

// document.querySelector('html').onclick=function()
// {
//     alert('别戳我，我怕疼。');
// }
//匿名函数(没有命名的函数)赋值给了html的onclick属性
// 此处
// documbent.querySelector('html').onclick=function(){};
// 等价于
// let myHTML=document.querySelector('html');
// myHTML.onclick=function(){};

// 用箭头函数代替上述写法，用()=>代替function()
// document.querySelector('body').addEventListener('click',()=>{
//     alert('别戳！！');
// });

// 图像切换器
let myImage=document.querySelector('img');
myImage.onclick=function(){
    let mySrc=myImage.getAttribute('src');
    if(mySrc==='images/images2.jpg'){
        myImage.setAttribute('src','images/images3.jpg');
    }
    else{
        myImage.setAttribute('src','images/images2.jpg');
    }
}
// 注意不要到上一层文件夹，这里只是把字符串替换，否则会显示不出来

// 添加个性欢迎信息
let myButton=document.querySelector('button');
// 获取新按钮的信息
let myHeading=document.querySelector('h3');
// 添加函数
function setUserName(){
    let myName=prompt('请输入你的名字。');
    // 检测用户是否输入了null(取消)或者空名字
    if(!myName)
    {
        setUserName();
    }else{
    localStorage.setItem('name',myName);
    myHeading.textContent='LOOKING'+myName;
    }
}
// prompt与alert类似，会弹出一个对话框，然后需要输入信息
// 并确定之后将输入的数据存储在myName中
// 之后调用localStorage API将数据存储在浏览器中供后续使用
// 这里用 localStorage 的 setItem() 函数来创建一个'name' 数据项，并把 myName 变量复制给它。
if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName=localStorage.getItem('name');
    myHeading.textContent='LOOKING'+storedName;
    // 如果name存在(即用户上次访问时设置过),就调用getItem获取保存的名字
}
myButton.onclick=function(){
    setUserName();
}
// 这样用户就能点击按钮，然后输入信息了
