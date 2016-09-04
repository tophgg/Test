    
function $(id){
    return typeof id==='string'?document.getElementById(id):id;
}


function mouseover(t) 
{

    var getdiv = t.getElementsByTagName("div")[0];
    if (getdiv)
        getdiv.style.display = "block";
        
}

function mouseleave(t) {

    var getdiv = t.getElementsByTagName("div")[0];
    if (getdiv)
         getdiv.style.display = "none";
        

}

function tab(){
    var index=0; //第一个
    var timer=null;
    
    //获取所有的div和要切换的内容   
    var option=document.getElementById("option");
    var photoBox=document.getElementById("photoBox");
    // console.log(option);
    var lis=option.getElementsByTagName('li');
    var divs=photoBox.getElementsByTagName('div');

    //遍历每一个div且给他们绑定事件
    for(var i=0;i<divs.length;i++){
        lis[i].id=i;
        lis[i].onmouseover=function(){
            clearInterval(timer); //鼠标滑过清掉循环切换
            changeOption(this.id);
        }
        lis[i].onmouseout=function(){
            timer=setInterval(autoPlay,2000);
        }
    }
    if(timer){
        clearInterval(timer);
        timer=null;
    }
    //  添加定时器
    timer=setInterval(autoPlay,2000);

    function autoPlay(){
        index++;
        if(index>=divs.length) index=0;
        changeOption(index);
    }
    
    function changeOption(curIndex){ //显示
        for(var j=0;j<divs.length;j++){
            lis[j].className='';
            lis[j].style.backgroundColor='#ccc';
            lis[j].style.color='#000';
            divs[j].style.display='none';
        }

        //选中的内容
        lis[curIndex].className='select';
        lis[curIndex].style.backgroundColor='#1188C0';
        lis[curIndex].style.color='#fff';
        divs[curIndex].style.display='block';
        index=curIndex;   //这样你离开选中的内容之后 才能顺延跳到下个内容
    }


}


function change()
{ 
    // var content0=document.getElementsByTagName('content0');
    // var content1=document.getElementsByTagName('content1');
    // content0.style.display = 'none';
    // content1.style.display = 'block';
}

function back()
{   
    // var content0=document.getElementsByTagName('content0');
    // var content1=document.getElementsByTagName('content1');
    // content0.style.display = 'block';
    // content1.style.display = 'none';
}

/*var xmlhttp;  
    // 创建XMLHTTPRequest对象  
    function createXMLHTTPRequest()  
    {  
         if(window.ActiveXObject)//②如果当前浏览器为IE  
         {  
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");  
         }  
         else if(window.XMLHTTPRequest)//③如果是其他浏览器  
         {  
            xmlhttp = new XMLHTTPRequest();  
         }  
    }  
      
    function getInfo()  
    {  
      createXMLHTTPRequest();  
      xmlhttp.open("get", "/json/my", true);  
      xmlhttp.onreadystatechange = returnInfo;  
      xmlhttp.send(null);  
    }  
      
    function returnInfo()  
    {  
      if(xmlhttp.readyState == 4)  
      {  
       var info = xmlhttp.responseText;  
       eval("var json= " + info);  
       var message="";  
       var dealerlocation="";  
       var salesphone="";  
      for(var i=0;i<json.dealers.length;i++){  
           message+="经销商名称：<font style='color:red;'>" + json.dealers[i].name + "</font>  <br/>";  
           salesphone+="经销商电话：<font style='color:red;'>" + json.dealers[i].salesphone + "</font>  <br/>";  
           dealerlocation+="经销商经纬度：<font style='color:red;'>" + json.dealers[i].location + "</font>  <br/>";  
      }  
         
  
       document.getElementById("showInfo").innerHTML = message;  
       document.getElementById("salesphone").innerHTML = salesphone  
       document.getElementById("location").innerHTML=dealerlocation;  
      }  
    }  
*/

function customersController($scope,$http) {
  $http.get("my.json").success(function(data){
        $scope.news = data;
    }).error(function(){
        alert("an unexpected error ocurred!");
    });
}