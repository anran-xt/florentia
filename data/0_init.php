<?php
/**
 * Created by PhpStorm.
 * User: lenovo1
 * Date: 2018/5/16
 * Time: 20:21
 */
$conn=mysqli_connect("127.0.0.1",'root','','florentia',3306);

#设置后续sql语句所用字符串
$sql="set names utf8";
mysqli_query($conn,$sql);