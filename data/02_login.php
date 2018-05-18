<?php
/**
 * Created by PhpStorm.
 * User: lenovo1
 * Date: 2018/5/18
 * Time: 14:44
 */
@$uname=$_REQUEST['uname'];
@$upwd=$_REQUEST['upwd'];

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

}else{
    die("用户名或密码错误");
}
