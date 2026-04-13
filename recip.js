//  Lunch Snacks Desseerts Side Dish Appetizer BreakFast Beverages
// Snack,Dessert
// Dinner
// Side Dish
// Appetizer
// Breakfast
// Beverage



let url="https://dummyjson.com/recipes"
let data=fetch(url).then((d)=>{
    return d.json()
}).then((fd=>{
    let dat=fd.recipes
    // let cards= document.getElementsByClassName("cards")[0]
    dat.map((ele)=>{
        let cards= document.getElementsByClassName("cards")[0]
        let Dish=document.getElementById("Dish")
        Dish.addEventListener("click",()=>{
            if(ele.mealType[0]==="Dinner" ||ele.mealType[1]==="Dinner"){
                cards.innerHTML +=`
                <div class="card">
                <h3>${ele.id}</h3>
                <h2>${ele.name}<h2>
                <img src="${ele.image}" alt="">
                <h2>Ingrediente:-${ele.ingredients}</h2>
                <h4>Instructions:-${ele.instructions}</h4>
                <h3>MealType:-${ele.mealType}</h3>
                <h3>${ele.cookTimeMinutes } Minutes</h3>
                </div>
                `
            }
        })
        let Lunch=document.getElementById("Lunch")
        Lunch.addEventListener("click",()=>{
        if(ele.mealType[0]==="Lunch" ||ele.mealType[1]==="Lunch"){
                cards.innerHTML +=`
                <div class="card">
                <h3>${ele.id}</h3>
                <h2>${ele.name}<h2>
                <img src="${ele.image}" alt="">
                <h2>Ingrediente:-${ele.ingredients}</h2>
                <h4>Instructions:-${ele.instructions}</h4>
                <h3>MealType:-${ele.mealType}</h3>
                <h3>${ele.cookTimeMinutes } Minutes</h3>
                </div>
                `
            }
        })



    })
    

    }))
