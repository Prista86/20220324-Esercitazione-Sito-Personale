class Partecipanti {        //creazione classe 
    constructor(id, nome, cognome, datadinascita, email, immagine) {
        this.id=id;
        this.nome = nome;
        this.cognome = cognome;
        this.datadinascita = datadinascita;
        this.email = email;
        this.immagine = immagine;
    }
}
var indice = 0;
const p1 = new Partecipanti(1,'Luca','Rossi','01.01.1981','aaa@gmail.com',"image/corgi1.jpg");
const p2 = new Partecipanti(2,'Mario','Verdi','02.02.1982','bbb@gmail.com',"image/corgi2.jpg");
const p3 = new Partecipanti(3,'Giacomo','Bianchi','03.03.1983','ccc@gmail.com',"image/corgi3.jpg");
const p4 = new Partecipanti(4,'Francesco','Gialli','04.04.1984','ddd@gmail.com',"image/corgi4.jpg");
const p5 = new Partecipanti(5,'Paolo','Neri','05.05.1985','eee@gmail.com',"image/corgi5.jpg");
const ListaPartecipanti = [p1, p2, p3, p4,p5];

StampaListaPartecipanti();

const btnP = document.getElementById('btnP');  //gestione bottone Precedente con incremento indice
btnP.onclick = function () {
    indice--;
        if(indice == -1){
            indice=3;
        }
    console.log(indice);
    StampaListaPartecipanti();
}
const btnS = document.getElementById('btnS');   //gestione bottone Precedente con incremento indicedddfd
btnS.onclick = function () {
    indice++;
        if(indice == 4){
            indice=0;
        }
    console.log(indice);
    StampaListaPartecipanti();
}
function StampaListaPartecipanti() {  //completa la tabella con le info della classee
    const btn1 = document.getElementById('btn1');
    btn1.innerText= ListaPartecipanti[indice].nome;
    const div = document.getElementById('lista');
    div.innerHTML =`
    <p>Nome : ${ListaPartecipanti[indice].nome} </p>
    <p>ID: ${ListaPartecipanti[indice].id}</p>
    <p>Cognome: ${ListaPartecipanti[indice].cognome}</p>
    <p>Data di Nascita: ${ListaPartecipanti[indice].datadinascita}</p>
    <p>Email: ${ListaPartecipanti[indice].email}</p>    
    <p>Foto: </p><span><img id="img1" src="${ListaPartecipanti[indice].immagine}" class="rounded mx-auto center" alt="Torno Subito..."></span>
    `    
}
$(document).ready(function(){
    $('#btn1').click(function(){
      $('#lista').slideToggle("slow");
      
    });
});