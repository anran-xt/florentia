<?php
/**
 * Created by PhpStorm.
 * User: lenovo1
 * Date: 2018/5/18
 * Time: 14:44
 */
@$uname=$_REQUEST['uname'];
@$upwd=$_REQUEST['upwd'];
@$type=$_REQUEST['type'];

if($uname==""||$uname==null||$upwd==""||$upwd==null){
    die("信息不足");
}
//连接数据库
require("0_init.php");

$sql="select * from usertable where uname='$uname' and upwd='$upwd'";
$res=mysqli_query($conn,$sql);
$res=mysqli_fetch_row($res);
if($res!=0){
//    登录成功
    if($type=="login"){
        echo(1);
        return;
    }else if($type=="register"){
        die("该用户名已存在");
    }
}else{
    if($type=="login"){
        echo(0);
        return;
    }else if($type=="register"){
        $sql="insert into usertable VALUES(default,'$uname','$upwd',default)";
        $res=mysqli_query($conn,$sql);
        if($res){
            echo("注册成功");
        }
    }
}
