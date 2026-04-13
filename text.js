let url="https://dummyjson.com/quotes"
let data=fetch(url).then((d)=>{
    return d.json()
}).then((fd)=>{
    let quet=fd.quotes
    quet.map((ele)=>{
        let cards=document.getElementsByClassName("cards")[0]
        cards.innerHTML+=`
        <div class="card">
    <h1>id:- ${ele.id}</h1>
    <h2>quote:-${ele.quote}</h2>
    <h2>author:-${ele.author}</h2>
</div>
    </div>
        
        `
    })
    // console.log(fd);
})
