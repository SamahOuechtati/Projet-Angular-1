
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListCandidatComponent } from './list-candidat/list-candidat.component';
import { AddCandidatComponent } from './add-candidat/add-candidat.component';
import { DetailsCandidatComponent } from './details-candidat/details-candidat.component';
import { EditCandidatComponent } from './edit-candidat/edit-candidat.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { ListUtilsateurComponent } from './list-utilsateur/list-utilsateur.component';
import { VerifPaswwordComponent } from './verif-paswword/verif-paswword.component';
import { EditUtilComponent } from './edit-util/edit-util.component';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
  	{ path: 'home', component: HomeComponent },
	{ path: 'list-candidat', component: ListCandidatComponent },
	{ path: 'add-candidat', component: AddCandidatComponent },
	// { path: 'edit', component: EditCandidatComponent },

	
	{ path: 'listUtilisateur', component: ListUtilsateurComponent },
	{ path: 'editutil/:id', component: EditUtilComponent },
	{ path: 'Login', component: LoginComponent },
	{ path: 'VerifPass', component: VerifPaswwordComponent },
	 { path: 'details-candidat/:id', component: DetailsCandidatComponent },
	{ path: 'edit/:id', component: EditCandidatComponent },
	{ path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
