import { Component } from '@angular/core';
import { CandidatService } from '../services/candidat.service';

import { Utilisateur } from 'src/core/Candidat';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  logins : Utilisateur = new Utilisateur()
  users :  Utilisateur[] = []

constructor( private authService :CandidatService , private router :Router ){}
username!: string
password!: string






login(){
  console.log(this.logins)
  
  this.authService.getUsersByUsername(this.logins.username).subscribe(
    (res :any) => {
      if(res.length==0){

        this.authService.addlogin(this.logins).subscribe({
          next: (res: any) => {
            
            this.router.navigate(['/listUtilisateur'])
            console.log(res)
          },
          error: (err: any) => {
            console.log(err)
          }
        })
      }else{
        alert('user deja existe !!')
      }
    }
  )}
  

  
}