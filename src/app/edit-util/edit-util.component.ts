import { Component } from '@angular/core';
import { Utilisateur } from 'src/core/Candidat';
import { CandidatService } from '../services/candidat.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-util',
  templateUrl: './edit-util.component.html',
  styleUrls: ['./edit-util.component.css']
})
export class EditUtilComponent {
  logins : Utilisateur = new Utilisateur()
  id! : number
  util : Utilisateur[] = []
  constructor (
    private candidatservice: CandidatService,
    private router: Router,
    private activatedrout: ActivatedRoute
  ) {}
  ngOnInit () {
    this.id = this.activatedrout.snapshot.params['id']
    this.candidatservice.getUsertById(this.id).subscribe({
      next: (res: any) => {
        this.logins = res
      },
      error: (err) => {
        console.log(err)
        alert('il n y aucun utilisateur')
      }
    })
    
  }
  saveUtil () {
    this.candidatservice.updateUtil(this.logins).subscribe({
      next: (res: any) => {
        console.log(res)
        this.logins = res
        this.router.navigate(['/listUtilisateur'])
      },
      error: (err) => {
        console.log(err)
        alert('charger un utilisateur utilisateur')
        
      }
    })
  }

}
