// Données de départ fournies. Aucun comportement n’est encore implémenté.
let produits = [
  { id: 1, nom: "Jus d’orange", prix: 12 },
  { id: 2, nom: "Biscuits", prix: 8 }
];
let prochainId = 3;

// À vous de jouer :
// 1. Afficher les produits du tableau au chargement.
// 2. Gérer l’ajout depuis le formulaire.
// 3. Gérer le retrait du produit cliqué.
// 4. Bonus : compteur, état vide et total.

const submit=document.querySelector("button")
submit.addEventListener("click",ajouter)

function ajouter(){
  let obj={}
      const nom=document.querySelector("#nom")
      obj.nom=nom.value
      const price=document.querySelector("#prix")
      obj.prix=price.value
      obj.id=produits.length
      produits.push(obj)
      price.value=""
      nom.value=""
}


function aficher(){
  for(let i = 0;i<produits.length;i++){
    const ul=document.querySelector("#liste-produits")
    const li=document.createElement('li')
    li.classList.add("produit")
    const div=document.createElement('div')
    const strong=document.createElement('strong')
    strong.classList.add("nom-produit")
    strong.textContent=produits[i].nom
    const span=document.createElement('span')
    span.classList.add("prix-produit")
    span.textContent=produits[i].prix+" MAD"
    div.appendChild(strong)
    div.appendChild(span)
    const button=document.createElement('button')
    button.classList.add("supprimer")
    button.textContent="retierer"
    li.appendChild(div)
    li.appendChild(button)
    ul.appendChild(li)
    
    button.addEventListener("click",(e)=>{
      let holder=i
      suprimer(holder)
      aficher()
    }
    )
  }
  if(produits.length!==0){
    const vide=document.querySelector('#etat-vide')
    vide.style.display="none"
  }
}
aficher()


function suprimer(holder){
      const comf=confirm("do u want ")
      if(comf){ produits.splice(holder,1)
}}