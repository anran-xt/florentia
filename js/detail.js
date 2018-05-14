/**
 * Created by lenovo1 on 2018/5/14.
 */
var items=document.getElementsByClassName("item");
for(var i=1;i<=items.length;i++){
    if(i%5==0){
        items[i].style.marginLeft="-8px";
    }
    if(i%4==0){
        items[i].style.marginRight="-8px";
    }
}