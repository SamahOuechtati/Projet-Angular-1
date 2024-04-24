
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CandidatService } from '../services/candidat.service';
import { Candidat } from 'src/core/Candidat';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-candidat',
  templateUrl: './list-candidat.component.html',
  styleUrls: ['./list-candidat.component.css']
})
export class ListCandidatComponent {

  display = false
  result = {"affecter" : 0, "desaffecter" : 0}

  nom : string = ""
  candidatNonTrouve: string = "";
    candidat : Candidat | null = null
  candidats : Candidat[] = []

  constructor (
    private candidatservice: CandidatService,
    private router: Router,
    private http : HttpClient 
  ) {}

  ngOnInit () {
    this.candidatservice.getCandidats().subscribe({
      next: (res: any) => {
        this.candidats = res
        console.log(res)
      }
    })
  }
  calculateAge(datenaissance:Date ){
    if (datenaissance) {
      // Convertissez la chaîne de date en objet Date
      const birthDate = new Date(datenaissance);

      // Obtenez la date actuelle
      const currentDate = new Date();

      // Calculez la différence entre les années
      const  age = currentDate.getFullYear() - birthDate.getFullYear();

      // Vérifiez si l'anniversaire de cette année est déjà passé
      if (currentDate.getMonth() < birthDate.getMonth() ||
          (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
        // Si l'anniversaire n'est pas encore passé, décrémentez l'âge
        return age - 1;
      }

      // Si l'anniversaire est déjà passé, retournez l'âge
      return age;
    }

    // Retournez undefined si la date de naissance n'est pas fournie
    return undefined;
    
    
  }
  

  // ...

  
  details (candidat : Candidat) {
    this.router.navigate(['/details-candidat/'+candidat.id]);
  }
  
  edit (candidat : Candidat) {
    this.router.navigate(['/edit-candidat/'+candidat.id ]);
  }
  
  deleteCandidat (candidat : Candidat) {
    let index = this.candidats.findIndex((element: any) => {
      return element.id == candidat.id;
    })
    this.candidatservice.deleteCandidat(candidat).subscribe({
      next: (res: any) => {
        if(index != -1) {
          this.candidats.splice(index, 1)
        }
        console.log(res)
      }
    })
  }
  
  searchCandidat() {
    if (this.nom == '') {
      this.candidat = null
      return 
    }
    let index = this.candidats.findIndex((candidat: Candidat) => {
      return candidat.nom == this.nom;
    })
    if (index != -1) {
      this.candidat = this.candidats[index]
    } else {
       this.candidat = null
       this.candidatNonTrouve= "non trouver";

           }
  }

  changerEtat(candidat : Candidat) {
    candidat.etat = candidat.etat==1 ? 0 : 1;
    this.candidatservice.updateCandidat(candidat).subscribe(
      (res: any)=>{
        
      }, (err: any)=>{
        candidat.etat = candidat.etat==1 ? 0 : 1;
      }
    )
  }
  desaffecter(candidat : Candidat) {
    candidat.etat = candidat.etat==1 ? 0 : 1;
  }
  affecter(candidat : Candidat) {
    candidat.etat = candidat.etat==0 ? 1 : 0;
  }

  calculer() {
    this.result.affecter = this.candidats.filter((e: Candidat) => { return e.etat == 1 }).length
    this.result.desaffecter = this.candidats.filter((e: Candidat) => { return e.etat == 0 }).length
    this.display = true
  }


}
  // Supprimer (candidat : Candidat){
  //   this.candidatservice.deleteCandidat(candidat).subscribe({
  //     next: (res: any) => {
  //       this.candidat = res
       
  //     }

  //   })

  


