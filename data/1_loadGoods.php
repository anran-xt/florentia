<?php
/**
 * Created by PhpStorm.
 * User: lenovo1
 * Date: 2018/5/16
 * Time: 20:18
 */
@$gfirstclass=$_REQUEST["gfirstclass"];
@$gsecondclass=$_REQUEST["gsecondclass"];

require("0_init.php");

if($gfirstclass==""&&$gfirstclass==null){
    die("请输入查询商品类型");
}
if($gsecondclass!=""&&$gsecondclass!=null){
    $sql="select * from goodstable where gfirstclass='$gfirstclass' and gsecondclass='$gsecondclass';";
}else{
    $sql="select * from goodstable where gfirstclass='$gfirstclass';";
}
$res=mysqli_query($conn,$sql);
$res=mysqli_fetch_all($res,MYSQLI_ASSOC);
echo json_encode($res);

//查询除了商品展示数据外，还有附加的数据信息