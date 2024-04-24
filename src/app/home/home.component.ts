import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CandidatService } from '../services/candidat.service';
import { Utilisateur } from 'src/core/Candidat';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  logins : Utilisateur = new Utilisateur()
  
  users :  Utilisateur[] = []
  username!: '';
  password!:  '';

  constructor(private router: Router, private lgserv: CandidatService) {}

  login(): void {
    this.lgserv.getUsers().subscribe((res:any)=>{
      this.users=res

    if (this.checkLogin(this.username, this.password)) {
      localStorage.setItem("is_connected", "true")
       this.router.navigate(['/add-candidat']).then(()=>{ window.location.reload() });
    } else {
      
      alert('Invalid login credentials');
    }})
  }

  
  getUtilisateurIndex(username: string, password: string): number {
    console.log(this.users)
    return this.users.findIndex(user => user.username === username && user.password === password);
  }
  checkLogin(username: string, password: string): boolean {
    return this.getUtilisateurIndex(username, password) !== -1;
  }

}
