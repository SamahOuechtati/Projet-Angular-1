import { Component } from '@angular/core';
import { CandidatService } from './services/candidat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp_exam';
  
  isConnected = false;

  constructor (private authserv: CandidatService) {}

  ngOnInit(){
    this.isConnected = this.authserv.isConnected()
    console.log(this.isConnected)
  }


}
