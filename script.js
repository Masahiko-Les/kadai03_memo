//ローカルストレージの要素数を取得してNo.を割り振る(key名にする)
let Book_count=localStorage.length+1;
let Book_No="Book"+Book_count;
$("#book_number").val(Book_No);

//入力フォームのデータをローカルストレージに保存
$("#Save_btn").on("click",function(){
    const text_data=[
        $("#book_number").val(),$("#book_tilte").val(),$("#book_author").val(),$("#book_content").val()
    ];
    let obj3={}
    obj3.Title=text_data[1];
    obj3.Author=text_data[2];
    obj3.Content=text_data[3];
    let json_text3=JSON.stringify(obj3);

    localStorage.setItem(Book_No,json_text3);

    location.reload();//再読み込みして、画面をリセット・Noを更新
});

//ローカルストレージのデータをすべて削除
$("#Clear").on("click",function(){
    localStorage.clear();
    location.reload();
});


//アウトプットエリアにローカルストレージのデータを出力する
$("#Output_btn").on("click",function(){


    $("#Book_OUTPUT").html("")//テキストエリアを空白にする

for (let i = 1; i <= localStorage.length; i++) {

    let Book_key="Book"+i;
    if(localStorage.getItem(Book_key)){
        const v=localStorage.getItem(Book_key);
        let LS_data=JSON.parse(v); 
        let stringAll=`<p style="background-color:#f9a980;">${Book_key}●タイトル：${LS_data.Title}　●著者：${LS_data.Author}　●内容：${LS_data.Content}</p>`;
        $("#Book_OUTPUT").append(stringAll)
    }

}


});