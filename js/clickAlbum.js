// 1.页面进入时,二级菜单是展开的,点击关闭,再点击展开;
//1和2的差别主要是在最开始样式display的状态,和js中if设置的顺序,
//!如果js顺序颠倒的话,会出现点击按钮两次才实现我们先要的结果的情况.
function clickAlbumClose(str){
    let album=document.getElementById(str);
    let albumStyle=album.style.display;
    if(albumStyle=="none")
        album.style.display="block";
    else 
        album.style.display="none";
}

// 2.页面进入时,二级菜单是关闭的,点击展开,再点击关闭;
function clickAlbumOpen(str){
    let album=document.getElementById(str);
    let albumStyle=album.style.display;
    if(albumStyle=="block")
        album.style.display="none";
    else 
        album.style.display="block";
}



