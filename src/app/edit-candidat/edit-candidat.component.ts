
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatService } from '../services/candidat.service';
import { Candidat } from 'src/core/Candidat';

@Component({
  selector: 'app-edit-candidat',
  templateUrl: './edit-candidat.component.html',
  styleUrls: ['./edit-candidat.component.css']
})
export class EditCandidatComponent {
  id! : number
  candidat : Candidat = new Candidat()
  candidats : Candidat[] = []
  constructor (
    private candidatservice: CandidatService,
    private router: Router,
    private activatedrout: ActivatedRoute
  ) {}
  
  ngOnInit () {
    this.id = this.activatedrout.snapshot.params['id']
    this.candidatservice.getCandidatById(this.id).subscribe({
      next: (res: any) => {
        this.candidat = res
      },
      error: (err) => {
        console.log(err)
      }
    })
    
  }
  // ngOnInit () {
  //   this.candidatservice.getCandidats().subscribe({
  //     next: (res: any) => {
  //       this.candidats = res
  //       console.log(res)
  //     }
  //   })
  // }
  
  
  saveCandidat () {
    this.candidatservice.updateCandidat(this.candidat).subscribe({
      next: (res: any) => {
        console.log(res)
        this.candidat = res
        this.router.navigate(['/list-candidat'])
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
