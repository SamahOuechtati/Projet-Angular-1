import { Component } from '@angular/core';
import { Utilisateur } from 'src/core/Candidat';
import { CandidatService } from '../services/candidat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verif-paswword',
  templateUrl: './verif-paswword.component.html',
  styleUrls: ['./verif-paswword.component.css']
})
export class VerifPaswwordComponent {
  username: string = '';
  password: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  email: string = '';
 
  resetToken: string = '';

  constructor(private candidatService: CandidatService) {}

 
  

  VerifPass() {
    // Ajoutez ici votre logique de vérification
    if (this.newPassword !== this.confirmPassword) {
      console.error('Les mots de passe ne correspondent pas');
      // Vous pouvez également afficher un message d'erreur à l'utilisateur si nécessaire
    } else {
      // La logique de vérification réussie, vous pouvez appeler la méthode de réinitialisation de mot de passe ici
      this.candidatService.resetPassword(this.resetToken, this.newPassword).subscribe(
        (response) => {
          console.log('Mot de passe réinitialisé avec succès', response);
        },
        (error) => {
          console.error('Erreur lors de la réinitialisation du mot de passe', error);
        }
      );
    }
  }

  // name=''
  // password=''
  // logins : Utilisateur = new Utilisateur()
  // users :  Utilisateur[] = []

  
  //  constructor(private utilserv:CandidatService,private router:Router){}

 

  // VerifPass() {

  //   console.log(this.logins)
  //   this.utilserv.getUsersByUsername(this.logins.username).subscribe(
  //     (res :any) => {
  //       if(res.length==0){
  
  //         this.utilserv.changePassword(this.logins).subscribe({
  //           next: (res: any) => {
              
  //             console.log('nexiste pas')
  //             console.log(res)
  //           },
  //           error: (err: any) => {
  //             console.log(err)
  //           }
  //         })
  //       }else{
  //         alert('user deja existe !!')
  //       }
  //     }
  //   )}
  }

