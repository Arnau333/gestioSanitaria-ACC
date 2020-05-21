'use strict'

function validaQueNoEsBuit(cadenaAValidar) {
      if (cadenaAValidar.value=="" || cadenaAValidar.value=='undefined') {
        mostraMissatge(`El camp <b>${cadenaAValidar.name}</b> no pot quedar-se en blanc!`);

      } 
    }
    

const eleID_divEspaiModal = document.getElementById("divEspaiModal");

const eleID_barra_missatges = document.getElementById("divBarraMissatges");
const eleID_text_missatge = document.getElementById("h3BarraMissatges");

const eleID_divPresentacio = document.getElementById("divPresentacio");
const eleID_divHospital = document.getElementById("divHospital");
const eleID_divPacient = document.getElementById("divPacient");

const eleID_divControls = document.getElementById("divControls");

const eleID_btnGestHospitals = document.getElementById("btnGestHospitals");
const eleID_btnGestPacients = document.getElementById("btnGestPacients");
const eleID_btnGestMalalties = document.getElementById("btnGestMalalties");
const eleID_btnGestMetges = document.getElementById("btnGestMetges");

const eleID_btnGestAplicacio = document.getElementById("btnGestAplicacio");

const eleID_h2ResutltatFormControls = document.getElementById("h2ResutltatFormControls");

/*
taula_missatges[0][intTitol]="No habilitat"
taula_missatges[0][intMissatge]="Ho sento, encara no està habilitat!"
taula_missatges[1][intTitol]="Camp buit"
taula_missatges[1][intMissatge]="Cal que entris un nombre al camp màxim pacients!"
taula_missatges[2][intTitol]="Camp buit"
taula_missatges[2][intMissatge]="Cal que entris un nom al camp Hospital!"
taula_missatges[3][intTitol]="Camp buit"
taula_missatges[3][intMissatge]="Ho sento, encara no està habilitat!"
 */

const taula_missatges=[[]];

const intTitol = 1
const intMissatge = 2;

taula_missatges[0]=[];
taula_missatges[0][intTitol]="No habilitat";
taula_missatges[0][intMissatge]="Ho sento, encara no està habilitat!";

taula_missatges[1]=[];
taula_missatges[1][intTitol]="El camp màxim pacients és obligatori!";
taula_missatges[1][intMissatge]="Cal que entris un nombre al camp màxim pacients!";

taula_missatges[2]=[];
taula_missatges[2][intTitol]="El camp Nom Hospital és obligatori!";
taula_missatges[2][intMissatge]="Cal que entris un nom al camp Hospital!";

//    let metge = new Metge('Ivan', 'Soriano', '12345678A', 'Oncologia');
//     alert(JSON.stringify(metge));

function comprovaCampBuit(objecteRebut) {
      if (objecteRebut.value == "") {
            mostraMissatge(2);
      }
      console.log(objecteRebut.value);
}

function comprovaCampNumero(objecteRebut) {
      switch ( isNaN(objecteRebut.value) ? 1 : objecteRebut.value=="" ? 2 : 0 ) {
            case 1:
                  mostraMissatge(1);
                  break;

            case 2:
                  mostraMissatge(2);
                  break;

      }
      // if (isNaN(objecteRebut.value) || (objecteRebut.value=="")) 
      //   {
      //     alert("Must input numbers");
      //     return false;
      //   }
}


function mostraMissatge(codiMissatge) {
      /* Amb format JQuery   */
      // $('#divEspaiModal').find('#titolModal').text(taula_missatges[codiMissatge][intTitol]);
      // $('#divEspaiModal').find('#missatgeModal').text(taula_missatges[codiMissatge][intMissatge]);
      // $('#divEspaiModal').modal('show');
}

function mostraBotons() {
      eleID_btnGestHospitals.disabled = false;
      eleID_btnGestPacients.disabled = false;
      eleID_btnGestMalalties.disabled = false;
      eleID_btnGestMetges.disabled = false;
      eleID_btnGestAplicacio.disabled = false;

      $(eleID_btnGestHospitals).removeClass('btn-dark');
      $(eleID_btnGestHospitals).addClass('btn-primary');

      $(eleID_btnGestPacients).removeClass('btn-dark');
      $(eleID_btnGestPacients).addClass('btn-primary');

      $(eleID_btnGestMalalties).removeClass('btn-dark');
      $(eleID_btnGestMalalties).addClass('btn-primary');

      $(eleID_btnGestMetges).removeClass('btn-dark');
      $(eleID_btnGestMetges).addClass('btn-primary');

      $(eleID_btnGestAplicacio).removeClass('btn-dark');
      $(eleID_btnGestAplicacio).addClass('btn-primary');
}

function amagaBotons() {
      eleID_btnGestHospitals.disabled = true;
      eleID_btnGestPacients.disabled = true;
      eleID_btnGestMalalties.disabled = true;
      eleID_btnGestMetges.disabled = true;
      eleID_btnGestAplicacio.disabled = true;

      $(eleID_btnGestHospitals).removeClass('btn-primary');
      $(eleID_btnGestHospitals).addClass('btn-dark');

      $(eleID_btnGestPacients).removeClass('btn-primary');
      $(eleID_btnGestPacients).addClass('btn-dark');

      $(eleID_btnGestMalalties).removeClass('btn-primary');
      $(eleID_btnGestMalalties).addClass('btn-dark');

      $(eleID_btnGestMetges).removeClass('btn-primary');
      $(eleID_btnGestMetges).addClass('btn-dark');

      $(eleID_btnGestAplicacio).removeClass('btn-primary');
      $(eleID_btnGestAplicacio).addClass('btn-dark');
}


/* https://developer.mozilla.org/en-US/docs/Web/API/Element/classList 
document.getElementById("MyElement").classList.add('MyClass');
document.getElementById("MyElement").classList.remove('MyClass');
if ( document.getElementById("MyElement").classList.contains('MyClass') )
document.getElementById("MyElement").classList.toggle('MyClass');
https://stackoverflow.com/questions/195951/how-can-i-change-an-elements-class-with-javascript
*/

function conteClass(element, nomClass) {
      return (' ' + element.classList + ' ').indexOf(' ' + nomClass + ' ') > -1;
  }



function eliminaClass(elementRebut, nomClass) {
      var arrLlistaClasses;
      
      arrLlistaClasses = elementRebut.className.split(" ");
      if (arrLlistaClasses.indexOf(nomClass) == -1) {  // ens indica que no existeix
            elementRebut.className += " " + nomClass;
      }
}

    function afegirClass(elementRebut, nomClass) {
      var arrLlistaClasses;
      
      arrLlistaClasses = elementRebut.className.split(" ");
      if (arrLlistaClasses.indexOf(nomClass) == -1) {  // ens indica que no existeix
            elementRebut.className += " " + nomClass;
      }
    }


    
    function mostraGestioApp(objecte){
      eleID_divPresentacio.classList.toggle("d-none");
      eleID_divControls.classList.toggle("d-none");
      amagaBotons();
   }


    function mostraGestioMetges(objecte){
          mostraMissatge(0);
    }

    function mostraGestioMalaties(objecte){
       mostraMissatge(0);
    }
    


function mostraGestioHospital(objecte){
      document.getElementById('tancaDivHospital').onclick = function tanca() {
            eleID_divPresentacio.classList.toggle("d-none");
            eleID_divHospital.classList.toggle("d-none");
            mostraBotons();
      }
      eleID_divPresentacio.classList.toggle("d-none");
      eleID_divHospital.classList.toggle("d-none");
      amagaBotons();
   }

function ocultaGestioHospital(objecteRebut){
            eleID_divPresentacio.classList.toggle("d-none");
            eleID_divHospital.classList.toggle("d-none");
            mostraBotons();
   }

function mostraGestioPacients(num){
      if (!conteClass(eleID_divPacient,"d-none")) {
            afegirClass(eleID_divPacient,"d-none");
      }
      eleID_divPresentacio.classList.toggle("d-none");
      eleID_divPacient.classList.toggle("d-none");
      amagaBotons();
      var pacientsHTML="";

      for (let index = 0; index < num; index++) {
            pacientsHTML = '<div class="row">'+
            '<div class="col mb-3">'+
                '<label for="nomPacient'+(index)+'" class="font-weight-bold">Nom pacient:</label>'+
                '<input type="text" title="Entra el nom del pacient!" name="Nom Pacient" onblur="validaQueNoEsBuit(this)" placeholder="Nom pacient" id="nomPacient'+(index)+'" class="form-control" required="" minlength="1" maxlength="100">'+
            '</div>'+
            '<div class="col mb-3">'+
                    '<label for="nomMalaltiaPacient'+(index)+'" class="font-weight-bold">'+
                        'Cognom pacient:'+
                    '</label>'+
                    '<input type="text" title="Entra el Cognom del pacient!" name="Cognom pacient:" onblur="validaQueNoEsBuit(this)" placeholder="Cognom pacient" id="Cognompacient'+(index)+'" class="form-control" required="">'+
            '</div>'+
            '<div class="col mb-3">'+
                    '<label for="nomMalaltiaPacient'+(index)+'" class="font-weight-bold">'+
                        'NIF de pacient:'+
                    '</label>'+
                    '<input type="text" title="Entra el NIF del pacient!" name="NIF pacient:" onblur="validaQueNoEsBuit(this)" placeholder="NIF pacient" id="NIF'+(index)+'" class="form-control" required="">'+
            
            '</div>'+
            '<div class="col mb-3">'+
                    '<label for="nomMalaltiaPacient'+(index)+'" class="font-weight-bold">'+
                        'Malaltia de pacient:'+
                    '</label>'+
                    '<input type="text" title="Entra el nom del pacient!" name="Malaltia pacient:" onblur="validaQueNoEsBuit(this)" placeholder="Malaltia pacient" id="nomPacient'+(index)+'" class="form-control" required="">'+
            
            '</div>'+
            '</div>';
        
            if(index==0){
                  var htmlP = pacientsHTML.toString();
            }else{
                  htmlP += pacientsHTML.toString();
            }

      }
      document.getElementById('dadesPacient').innerHTML =  htmlP;
      // document.getElementById('test').innerHTML =  htmlP;

}

function ocultaGestioPacients(objecteRebut){
      eleID_divPresentacio.classList.toggle("d-none");
      eleID_divPacient.classList.toggle("d-none");
      mostraBotons();
   }

   function ocultaControls(objecteRebut){
      eleID_divPresentacio.classList.toggle("d-none");
      eleID_divControls.classList.toggle("d-none");
      mostraBotons();
   }
   
function crearHospital() {// s'ha ha de crar l'hospital....
      // alert('aaa');
      var nom = document.getElementById("inputNomHospital").value.toString();
      var maximPacients = parseInt(document.getElementById("maximPacientsHospital").value);
      console.log(nom);
      console.log(maximPacients);

   
      if (nom !== "" && maximPacients > 0) {
            
            var hospital = new Hospital(nom, maximPacients);

            ocultaGestioHospital();
            mostraGestioPacients(maximPacients);

       
      }
} 

function ingressarPacients() {

      var formularu = ["nomPacient", "Cognompacient", "NIF"];
      for (let camp = 0; camp < formularu.length; camp++) {
            //Nom
            var index = 0;
            var dadesPacientArray = [];
            while(document.getElementById(formularu[camp]+(index))){
                  dadesPacientArray[formularu[camp]+(index)]=document.getElementById(formularu[camp]+(index)).value;
                  //comprovacions
                  console.log(formularu[camp]+": "+dadesPacientArray[formularu[camp]+(index++)]);
            }

      }
      

}