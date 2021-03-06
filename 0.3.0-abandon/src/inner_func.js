/* 合成 */
function inner_craft(its,lin=3,col=3){
    // 载入
    let ar=arrayof(lin,function(){return []})
    for(let i=0;i<lin;i++){
        for(let j=0;j<col;j++){
            ar[i][j]=its[i*col+j].id()
        }
    }
    // 移到左上角
    let fl=false,mov_lin=0,mov_col=0
    while(mov_lin<lin){
        for(let j=0;j<col;j++){
            if(ar[mov_lin][j]!=""){
                fl=true
                break
            }
        }
        if(fl)break
        mov_lin++
    }
    fl=false
    while(mov_col<col){
        for(let i=mov_lin;i<lin;i++){
            if(ar[i][mov_col]!=""){
                fl=true
                break
            }
        }
        if(fl)break
        mov_col++
    }
    if(mov_lin!=0||mov_col!=0){
        for(let i=mov_lin;i<lin;i++){
            for(let j=mov_col;j<lin;j++){
                let ts=ar[i][j]
                ar[i][j]=""
                ar[i-mov_lin][j-mov_col]=ts
            }
        }
    }
    // 依次检查
    for(let c of crafts_nor){
        let pat=c[0],co=0,fl=false,prev
        let patl=pat.length
        if(patl>lin)continue
        for(let i=0;i<patl;i++){
            let l=pat[i]
            if(l>>col){
                fl=true
                break
            }
            for(le=0;le<col;le++){
                if(l>>le&1){
                    if(c[1][co]!="!")prev=c[1][co]
                    if(ar[i][le]!=prev){
                        fl=true
                        break
                    }
                    co++
                }
                else if(ar[i][le]!=""){
                    fl=true
                    break
                }
            }
        }
        if(fl)continue
        return new Pair(c[2],c[3]===undefined ? 1 : c[3])
    }
    return null
}
var crafts_nor=[// 必须组成指定图形，不允许旋转，但允许平移
    [[1],["原木0"],"木板,0"],
    [[1],["木板0"],"木棍",9],
    [[3,3],["木板0","!","!","!"],"合成台"],
    [[3,3],["木板0","!","石头3","!"],"刻制台"],
    [[3,3,3],["木板0","!","木棍","!","木板0","!"],"箱子"],
]

/* 刻制 */
var carves_nor={
    "木板0":["模具台"],
    "石头3":["熔炉"],
    "陶瓷块":["高炉壁","高炉控制器"],
}

/* 模具 */
function inner_mould(){}
var mould_nor=[
]

/* 熔炉 */
function inner_furnace(){}
var furnace_nor={}
