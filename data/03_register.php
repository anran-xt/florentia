<?php
/**
 * Created by PhpStorm.
 * User: lenovo1
 * Date: 2018/5/20
 * Time: 20:42
 */
@$uname=$_REQUEST['uname'];
@$upwd=$_REQUEST['upwd'];

if($uname==""||$uname==null||$upwd==""||$upwd==null){
    die("信息不足");
}
//连接数据库
require("0_init.php");

