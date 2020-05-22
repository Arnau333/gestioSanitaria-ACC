'use strict'

class Hospital {
  constructor(nomHospital, maximPacients, maximMetges) {
    this.nomHospital = nomHospital;
    this.maximPacients = maximPacients;
    this.pacientsIngressats = [];
 
  }
  
    ingressarPacient(pacient) {
      if (pacient != null && (this.pacientsIngressats.length < this.maximPacients))
        this.pacientsIngressats.push(pacient);
    }

    donarDaltaPacient(llitPacient) {
      alert("S'ha donat d'alta el pacient " + this.pacientsIngressats[llitPacient].nom + " de la malaltia " + this.pacientsIngressats[llitPacient].malaltia);
      this.pacientsIngressats[llitPacient] = {};

      document.getElementById(llitPacient).style.display = "none";

    }

    morirPacient(llitPacient) {
      alert("Encara que s'ha fet tot el que s'ha pogut, el pacient " + this.pacientsIngressats[llitPacient].nomHospital + " ha mort de la malaltia " + this.pacientsIngressats[llitPacient].malaltia);
      this.pacientsIngressats[llitPacient] = {};

      document.getElementById(llitPacient).style.display = "none";
    }

    MostrarIngressats(){
      var Continguttaula="";

      for (let index = 0; index < Pacientsingressats.length; index++) {
        Continguttaula+=

        '    <tr id="'+(index)+'">'+
        '      <th scope="row">'+Pacientsingressats[index].nom+'</th>'+
        '      <td>'+Pacientsingressats[index].cognom+'</td>'+
        '      <td>'+Pacientsingressats[index].nif+'</td>'+
        '      <td>'+Pacientsingressats[index].malaltia+'</td>'+
        '      <td><button type="button" class="btn btn-success" onclick="hospital.donarDaltaPacient('+(index)+'); ">donarDaltaPacient</button></td>'+
        '      <td><button type="button" class="btn btn-danger" onclick="hospital.morirPacient('+(index)+'); ">morirPacient</button></td>'+


        '    </tr>';
      }

   
      document.getElementById("divPacient").innerHTML += 
    '<table class="table">'+
    '<thead class="thead-dark">'+
    '  <tr>'+
    '    <th scope="col">Nom</th>'+
    '    <th scope="col">Cognom</th>'+
    '    <th scope="col">NIF</th>'+
    '    <th scope="col">Malaltia</th>'+
    '    <th scope="col">-</th>'+
    '    <th scope="col">-</th>'+

    '  </tr>'+
    '</thead>'+
    '<tbody>'+Continguttaula+'</tbody>'+
    '</table>';

    }

}
