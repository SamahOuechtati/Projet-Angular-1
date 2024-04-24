import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from 'src/core/Candidat';
import { CandidatService } from '../services/candidat.service';

@Component({
  selector: 'app-list-utilsateur',
  templateUrl: './list-utilsateur.component.html',
  styleUrls: ['./list-utilsateur.component.css']
})
export class ListUtilsateurComponent {
  usernam : string = ""
  utilNonTrouve: string = "";
  logins : Utilisateur = new Utilisateur()
  utilisateur : Utilisateur | null = null
  id! : number
  util : Utilisateur[] = []
  constructor (
    private candidatservice: CandidatService,
    private router: Router,
    private activatedrout: ActivatedRoute
  ) {}

  ngOnInit () {
    this.candidatservice.getUsers().subscribe({
      next: (res: any) => {
        this.util = res
        console.log(res)
      }
    })
  }
  // ngOnInit () {
  //   this.id = this.activatedrout.snapshot.params['id']
    
  //   this.candidatservice.getUsertById(this.id).subscribe({
  //     next: (res: any) => {
  //       this.logins = res
  //     },
  //     error: (err) => {
  //       console.log(err)
  //     }
  //   })
    
  // }
  
  deleteUtilisateur(userId: Utilisateur) {
    let index = this.util.findIndex((element: any) => {
      return element.id == userId.id;
    })
    this.candidatservice.deleteUser(userId).subscribe({
      next: (res: any) => {
        if(index != -1) {
          this.util.splice(index, 1)
        }
        console.log(res)
      }
    })
  }
  editItem(idi: Utilisateur) {
    // Utilisez le service Router pour naviguer vers l'URL appropriée
    this.router.navigate(['/editutil', idi.id]);
  }
  searchUtil() {
    if (this.usernam == '') {
      this.utilisateur = null
      return 
    }
    let index = this.util.findIndex((utils: Utilisateur) => {
      return utils.username == this.usernam;
    })
    if (index != -1) {
      this.utilisateur = this.util[index]
    } else {
      this.util=[]
       this.utilisateur = null
       this.utilNonTrouve= "non trouver";

           }
           this.usernam=""
  }
  

}
