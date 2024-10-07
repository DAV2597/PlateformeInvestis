

function myfonction(){
    const base2donnees=JSON.parse(localStorage.getItem('dv')) || [];
    affichescreen(base2donnees)
}
function affichescreen(base2donnees){
    const tb1=document.querySelector("#main2 tbody");
    tb1.innerHTML='';

    base2donnees.forEach((p, i)=>{
        const chainetableau= tb1.insertRow();
        chainetableau.insertCell().textContent=p.a;
        chainetableau.insertCell().textContent=p.p;
        
    })
     
}
function V(a,p){
    const base2donnees=JSON.parse(localStorage.getItem('dv')) || [];
    base2donnees.push({a,p})
    localStorage.setItem('dv' , JSON.stringify(base2donnees))
    myfonction()
}

//evenement1
const veri=document.getElementById("veri");
veri.addEventListener("click",()=>{
    document.querySelector(".main2").style.display="block"
    document.getElementById("general").style.display="none"
    
})
const resultat=document.getElementById("formulaire1")
resultat.addEventListener('submit',(e)=>{
    e.preventDefault()
     const a1=document.getElementById("c1").value;
     const p1=document.getElementById("c2").value;
     V(a1, p1)
     
})
myfonction()



