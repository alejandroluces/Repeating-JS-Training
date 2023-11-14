function uniTotal (string) {
    // total up dem unicodes!
    if(string.length===1){
        return string.charCodeAt()
    }else if (string.length<1){
        return 0
    }else{
        return string.split("").map((item)=>item.charCodeAt()).reduce((a,b)=>a+b,0)
    }
    
}

    console.log(uniTotal(""));
    console.log(uniTotal("a"));
    console.log(uniTotal("aaa"));

    
    