<?php
/**
 * Created by PhpStorm.
 * User: lenovo1
 * Date: 2018/5/16
 * Time: 20:18
 */
@$gfirstclass = $_REQUEST["gfirstclass"];
@$gsecondclass = $_REQUEST["gsecondclass"];


require("0_init.php");

//$resArr  =>  最终的数据集合
$resArr = new StdClass(); //创建空对象

//1.查询商品数据
if ($gfirstclass == "" && $gfirstclass == null) {
    die("请输入查询商品类型");
}
if ($gsecondclass != "" && $gsecondclass != null) {
    $sql = "select * from goodstable where gfirstclass='$gfirstclass' and gsecondclass='$gsecondclass';";
} else {
    $sql = "select * from goodstable where gfirstclass='$gfirstclass';";
}


$res = mysqli_query($conn, $sql);
$res = mysqli_fetch_all($res, MYSQLI_ASSOC);

$resArr->goodsList = $res;    //插入查询的商品数据


//2.查询商品附加信息
$libsArr = ["gfirstclass","gsecondclass", "gcolor", "gsizelist", "gsex"];

function findLibs($arr, $conn)
{
    global $gfirstclass;
    global $gsecondclass;
    $libsResArr = new stdClass();
    foreach ($arr as $key => $value) {
        $nowKey = $arr[$key];
        $sql = "select distinct $value from goodstable where gfirstclass= '$gfirstclass'";
        $res = mysqli_query($conn, $sql);
        $res = mysqli_fetch_all($res);





//        if($value=="gsizelist") echo json_encode($res);








//        echo json_encode($res);
        if (sizeof($res) != 0) {
            $litArr = [];
            foreach ($res as $inKey => $inValue) {
                $litArr[] = $inValue[0];
            }
            $libsResArr->$nowKey = $litArr;
        }
        if ($gsecondclass) {
            $libsResArr->nowClass = $gsecondclass;
        }
    }
    return $libsResArr;
}

$resArr->libsmsg = findLibs($libsArr, $conn); //添加附加信息

echo json_encode($resArr);




