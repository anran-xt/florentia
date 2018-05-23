<?php
/**
 * Created by PhpStorm.
 * User: lenovo1
 * Date: 2018/5/22
 * Time: 16:01
 */
//echo "OK";
@$msg=$_REQUEST["goodMsg"];
@$uname=$_REQUEST["uname"];
//echo $uname;
if(!$msg||!$uname){
    die("信息不足");
}
require("0_init.php");

$sql="update usertable set ushopcar='$msg' where uname='$uname'";

$res=mysqli_query($conn,$sql);
if($res){
    echo "更新成功";
}else{
    echo "更新失败";
}
