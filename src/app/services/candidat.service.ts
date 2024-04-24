
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { findIndex } from 'rxjs';
import { Candidat, Utilisateur } from 'src/core/Candidat';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

 

  baseUrl = environment.server + "/candidats"
  urs = environment.server + "/Utilisateur"
  constructor(private http: HttpClient) { }
  
  getCandidats () {
    return this.http.get(this.baseUrl)
  }

  getCandidatById (id : number) {
    let url = this.baseUrl + "/" + id
    return this.http.get(url)
  }
  getUsertById (id : number) {
    let url = this.urs + "/" + id
    return this.http.get(url)
  }

  addCandidat (candidat: Candidat) {
    return this.http.post(this.baseUrl, candidat)
  }

  updateCandidat (candidat: Candidat) {
    let url = this.baseUrl + "/" + candidat.id
    return this.http.put(url, candidat)
  }
  updateUtil(logins:Utilisateur ){
    let url = this.urs + "/" + logins.id
    return this.http.put(url, logins)
  }

  deleteCandidat (candidat: Candidat) {
    let url = this.baseUrl + "/" + candidat.id
    return this.http.delete(url)
  }
  isConnected() {
    let isConnected : boolean | string | null = localStorage.getItem("is_connected")
    isConnected = isConnected != null && isConnected == "true" ? true : false
    return isConnected
  }
  getUsers () {
    return this.http.get(this.urs)
  }
  deleteUser(userId: Utilisateur) {
    let url = this.urs + "/" + userId.id
    return this.http.delete(url)
  }
  addlogin( utilisateur: Utilisateur){
    return this.http.post(this.urs, utilisateur)
  }
  getUsersByUsername(username: string) {
    let url = `${this.urs}/?username=${username}`
    return this.http.get(url)
  }
  getUserByPassword(username: string) {
    let url = `${this.urs}/?username=${username}`

    return this.http.get(this.urs)
  }
  changePassword(logins: Utilisateur) {
    // Ajoutez ici la logique pour mettre à jour le mot de passe dans la base de données ou tout autre mécanisme
    let url = this.urs + "/" + logins.password
    return this.http.put(url, logins)
    console.log('Mot de passe changé avec succès');
  }
  // checkLogin(username: string, password: string): boolean {
  //   for (let user of this.users) {
  //     if findIndex(user.username === username && user.password === password) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }
  // getUtilisateurIndex(username: string, password: string): number {
  //   console.log(this.users)
  //   return this.users.findIndex(user => user.username === username && user.password === password);
  // }
  // checkLogin(username: string, password: string): boolean {
  //   return this.getUtilisateurIndex(username, password) !== -1;
  // }
  resetPassword(token: string, newPassword: string) {
    // Endpoint pour la réinitialisation du mot de passe sur le backend
    const resetUrl = `${this.urs}/reset-password`;

    // Données à envoyer au backend
    const requestBody = {
      token: token,
      newPassword: newPassword
    };

    // Utilisation de la méthode HTTP POST pour envoyer les données
    return this.http.post(resetUrl, requestBody);
  }
    
  
}

