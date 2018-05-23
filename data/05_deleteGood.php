<?php
/**
 * Created by PhpStorm.
 * User: lenovo1
 * Date: 2018/5/23
 * Time: 10:52
 */
@$uname=$_REQUEST["uname"];
@$shoppingMsg=$_REQUEST["shoppingMsg"];
require("0_init.php");
echo $uname;

$sql="update usertable set ushopcar='$shoppingMsg' where uname='$uname'";
$res=mysqli_query($conn,$sql);
if($res){

    $sql="select ushopcar from usertable where uname='$uname'";
    $res=mysqli_query($conn,$sql);
    $res=mysqli_fetch_assoc($res);
    echo json_encode($res);

//    echo"更新成功";
}else{
    echo "更新失败";
}