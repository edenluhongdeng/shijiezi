import React,{useEffect} from "react"
const $ = window.$
export default function PageDown() {
    useEffect(()=>{

    })
   
    return (
        <div>
            <div className="word">
                <h1>我们的梦想来自内心深处的孤独</h1>
                <p style={{align:'center',fontSize:'20pt',fontWeight:'bold'}} >JS导出Word文档</p>
                <div style={{color:"red"}}>我们来自同一个世界</div>
            </div>
            <input type="button" value="导出word" onClick={()=>{
                    $("input[type='button']").click(function (event) {
                        $(".word").wordExport('word');
                    });
            }} />
        </div>
    )
}