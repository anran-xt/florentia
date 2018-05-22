<?php
/**
 * Created by PhpStorm.
 * User: lenovo1
 * Date: 2018/5/22
 * Time: 16:30
 */
@$uname = $_REQUEST["uname"];
if (!$uname) {
    die("用户未登陆");
}
require("0_init.php");

$sql = "select ushopcar from usertable where uname='$uname'";
$res = mysqli_query($conn, $sql);
$res = mysqli_fetch_row($res)[0];
$res = json_decode($res);

$resArr = [];

for ($i = 0; $i < count($res); $i++) {
    $obj=new stdClass();
    $obj->goodId=$res[$i]->goodId;
    $obj->goodSize=$res[$i]->goodSize;
    $obj->goodNum=$res[$i]->goodNum;


    $goodId = $res[$i]->goodId;
    $sql = "select gsrc,gbrand,gname,gnowprice,goldprice from goodstable where gid='$goodId'";
    $newRes = mysqli_query($conn, $sql);
    $newRes = mysqli_fetch_assoc($newRes);

    $obj->goodDetail=$newRes;
    $resArr[]=$obj;
}
//var_dump($resArr);
echo json_encode($resArr);


//echo $res[0]->goodId;
