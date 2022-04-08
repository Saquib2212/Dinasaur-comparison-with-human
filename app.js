
    // Create Dino Constructor

//creating a class dino
class Dino{
    constructor(object){
        this.species=object.species
        this.weight=object.weight
        this.height=object.height
        this.diet=object.diet
        this.where=object.where
        this.when=object.when
        this.fact=object.fact
        this.image="images/"+object.species.toLowerCase()+".png";
        }
}
// taking Dinasaur data from the Json file provided with starter file
let DinoData = [ {
    "species": "Triceratops",
    "weight": 13000,
    "height": 114,
    "diet": "herbavor",
    "where": "North America",
    "when": "Late Cretaceous",
    "fact": "First discovered in 1889 by Othniel Charles Marsh"
},
{
    "species": "Tyrannosaurus Rex",
    "weight": 11905,
    "height": 144,
    "diet": "carnivor",
    "where": "North America",
    "when": "Late Cretaceous",
    "fact": "The largest known skull measures in at 5 feet long."
},
{
    "species": "Anklyosaurus",
    "weight": 10500,
    "height": 55,
    "diet": "herbavor",
    "where": "North America",
    "when": "Late Cretaceous",
    "fact": "Anklyosaurus survived for approximately 135 million years."
},
{
    "species": "Brachiosaurus",
    "weight": 70000,
    "height": 372,
    "diet": "herbavor",
    "where": "North America",
    "when": "Late Jurasic",
    "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
},
{
    "species": "Stegosaurus",
    "weight": 11600,
    "height": 79,
    "diet": "herbavor",
    "where": "North America, Europe, Asia",
    "when": "Late Jurasic to Early Cretaceous",
    "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
},
{
    "species": "Elasmosaurus",
    "weight": 16000,
    "height": 59,
    "diet": "carnivor",
    "where": "North America",
    "when": "Late Cretaceous",
    "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
},
{
    "species": "Pteranodon",
    "weight": 44,
    "height": 20,
    "diet": "carnivor",
    "where": "North America",
    "when": "Late Cretaceous",
    "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
},
{
    "species": "Pigeon",
    "weight": 0.5,
    "height": 9,
    "diet": "herbavor",
    "where": "World Wide",
    "when": "Holocene",
    "fact": "All birds are living dinosaurs."
}];  
    // Create Dino Objects

  //  creating dino object using class Dino
let dino0=new Dino(DinoData[0])
let dino1=new Dino(DinoData[1])
let dino2=new Dino(DinoData[2])
let dino3=new Dino(DinoData[3])

let dino4=new Dino(DinoData[4])
let dino5=new Dino(DinoData[5])
let dino6=new Dino(DinoData[6])
let dino7=new Dino(DinoData[7])


    // Create Human Object
let human={}

    // Use IIFE to get human data from form
//getting human Data from form using IIFE and creating human object
document.getElementById('btn').addEventListener('click',function(evt){
    evt.preventDefault();
    human=(function(){
        let name=document.getElementById('name').value;
        let height=document.getElementById('feet').value*12+document.getElementById("inches").value;
        let diet=document.getElementById("diet").value;
        let weight=document.getElementById("weight").value;
        
        return {
            Name:name,
            Height:height,
            Weight:weight,
            Diet:diet
        }
    })();

});



//getting a random number from 1 to 8
let randomNumber=Math.floor((Math.random() * 8) + 1);// generate a random number in range 1 to 8
let DinoFact=[]

//hint was given in development strategy to use switch statement
//based on the random number selecting a Dinosaour Fact array
switch(randomNumber){
    case 1:
        DinoFact=[dino0.fact,dino1.fact,dino2.fact,dino3.fact,dino4.fact,dino5.fact,dino6.fact,dino7.fact]
        break
    case 2:
        DinoFact=[dino1.fact,dino2.fact,dino3.fact,dino4.fact,dino5.fact,dino6.fact,dino7.fact,dino0.fact]
        break   
    case 3:
        DinoFact=[dino2.fact,dino3.fact,dino4.fact,dino5.fact,dino6.fact,dino7.fact,dino0.fact,dino1.fact] 
        break
    case 4:
        DinoFact=[dino3.fact,dino4.fact,dino5.fact,dino6.fact,dino7.fact,dino0.fact,dino1.fact,dino2.fact]
        break   
    case 5:
        DinoFact=[dino4.fact,dino5.fact,dino6.fact,dino7.fact,dino0.fact,dino1.fact,dino2.fact,dino3.fact]
        break   
    case 6:
        DinoFact=[dino5.fact,dino6.fact,dino7.fact,dino0.fact,dino1.fact,dino2.fact,dino3.fact,dino4.fact]
        break 
    case 7:
        DinoFact=[dino6.fact,dino7.fact,dino0.fact,dino1.fact,dino2.fact,dino3.fact,dino4.fact,dino5.fact] 
        break  
    case 8:
        DinoFact=[dino7.fact,dino0.fact,dino1.fact,dino2.fact,dino3.fact,dino4.fact,dino5.fact,dino6.fact]
        break      
} 
//creating a grid creating a tile and appending it to the section gridParent id
const gridParent=document.getElementById('grid')
function makeaGrid(){
    for(i=0;i<=6;i++){
        if(i===4){ // when i==4 then we are adding human tile extra so it will be in middle
            let tile1=document.createElement('div')
            tile1.className="grid-item";
            tile1.innerHTML=`<h3>Human</h3><img src="images/human.png" alt="human"><p>${human.Name}</p>`
            gridParent.appendChild(tile1)
            
        }
        //creating a tile of dino and append it to the DOM
        let tile=document.createElement('div')
        tile.className="grid-item";
        let dinoObject='dino'+i
        tile.innerHTML=`<h3>${eval(dinoObject).species}</h3><img src="${eval(dinoObject).image}" alt="${eval(dinoObject).species}"><p>${DinoFact[i]}</p>`
        gridParent.appendChild(tile)
    
    }
    // appending a tile of pigeon with fact "All birds are living dinosaurs at last"
    tile2=document.createElement('div')
    tile2.className="grid-item";
    tile2.innerHTML=`<h3>Pigeon</h3><img src="images/pigeon.png" alt="Pigeon"><p>All birds are living dinosaurs.</p>`
    gridParent.appendChild(tile2)
    
}
//creating a table to display comparison method. we will be creating a table for each comparison method 
let mainTable=document.getElementById('tables') 


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches.
    
//this method will compare heights and append a table to DOM that display comparison 
function heightCompare(){
    let heading=document.createElement('h2')
    heading.innerHTML=`<p>Height comparison of Human and dinasour species</p>`
    mainTable.appendChild(heading) //appending title of comparison to the DOM

    table=document.createElement('table')//creating table for each method
    let t1=document.createElement('tr')
    t1.innerHTML=`<th>Dino Species</th><th>Dino Height(in inch)</th><th>Human Name</th><th>Human height(in inch)</th><th>difference in height(in inch)</th>`;
    table.appendChild(t1);
    mainTable.appendChild(table)
    //creating each row of comparison table
    for(i=0;i<=7;i++){
        let dinoObject='dino'+i
        let t2=document.createElement('tr')
        let heightdifference=eval(dinoObject).height-human.Height//calculating difference in height
        t2.innerHTML=`<td>${eval(dinoObject).species}</td><td>${eval(dinoObject).height}</td><td>${human.Name}</td><td>${human.Height}</td><td>${heightdifference}</td>`;
        table.appendChild(t2);
        mainTable.appendChild(table)

    }

}

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

//this method will compare weight and append a table to DOM that display comparison
function weightCompare(){
    let heading=document.createElement('h2')
    heading.innerHTML=`<p>Weight comparison of Human and dinasour species</p>`
    mainTable.appendChild(heading)
    
    table=document.createElement('table')
    let t1=document.createElement('tr')
    t1.innerHTML=`<th>Dino Species</th><th>Dino Weight(in lbs)</th><th>Human Name</th><th>Human weight(in lbs)</th><th>difference in weight(in lbs)</th>`;
    table.appendChild(t1);
    mainTable.appendChild(table)
    for(i=0;i<=7;i++){
        //creating each row of comparison table
        let dinoObject='dino'+i
        let t2=document.createElement('tr')
        let weightdifference=eval(dinoObject).weight-human.Weight//calculating difference in weight
        t2.innerHTML=`<td>${eval(dinoObject).species}</td><td>${eval(dinoObject).weight}</td><td>${human.Name}</td><td>${human.Weight}</td><td>${weightdifference}</td>`;
        table.appendChild(t2);
        mainTable.appendChild(table)
    }
}
    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.

//this method will compare diet and append a table to DOM that display comparison
function dietCompare(){
    let heading=document.createElement('h2')
    heading.innerHTML=`<p>Diet comparison of Human and dinasour species</p>`
    mainTable.appendChild(heading)
    
    table=document.createElement('table')
    let t1=document.createElement('tr')
    t1.innerHTML=`<th>Dino Species</th><th>Dino Diet</th><th>Human Name</th><th>Human Diet</th><th>comparison of Diet</th>`;
    table.appendChild(t1);
    mainTable.appendChild(table)
    for(i=0;i<=7;i++){
        //creating each row of comparison table
        let dinoObject='dino'+i
        let t2=document.createElement('tr')
        let comparison=(eval(dinoObject).diet===human.Diet)?'same diet':'different diet'; //comparing diet 
        t2.innerHTML=`<td>${eval(dinoObject).species}</td><td>${eval(dinoObject).diet}</td><td>${human.Name}</td><td>${human.Diet}</td><td>${comparison}</td>`;
        table.appendChild(t2);
        mainTable.appendChild(table)
        }
    }

  
    // checking that user has filled each field correctly
function checkInput(){
    if(human.Name===''){
        return false
    }
    else if(human.Height==="0"||human.Height===''){
        return false
    }
    else if(human.Weight==="0"||human.Weight===''){
        return false
    }
    else{
        return true
    }
}

    // Remove form from screen
let button=document.getElementById('btn')
let form=document.getElementById('dino-compare')
button.addEventListener("click",function(evt){
    evt.preventDefault();
    if(checkInput()){
        form.style.display="none"// when user filled details correctly then form will hide
        makeaGrid() // this method will add tile to the DOM
        heightCompare() // this method will display a height comparison table
        weightCompare() //this method will display a weight comparison table
        dietCompare() //this method will display the diet comparison table
    }
    else{
        alert('please fill out all fields correctly')// when user enter wrong details alert message should pop-up
    }


})

