const neutralise = (s1,s2) =>{

    // return s1.split('').map((e,i) => {
    //     if(e === s2.split('')[i]){
    //         return e;
    //     }else{
    //         return 0;
    //     }
    // }).join('');
    return s1.split("").map((item,index)=>item===s2.split("")[index]? item : 0).join("")

}

console.log(neutralise("+-+", "-++"));


