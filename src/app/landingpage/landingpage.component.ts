import { Component, OnInit } from '@angular/core';
import { GitRequestService } from '../git-http/git-request.service';
import { User } from '../user';
import { Repository } from '../repository';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  user?: any;
  repository?: any;
  User = environment.apiKey;
  UserName?: string;

  constructor(public gitService:GitRequestService) { 
    this.gitService.getUser().then(users =>{
      this.user = users;
      }); 

      this.gitService.getRepo().then(repos =>{
        this.repository = repos;
      })
  }

    
  ngOnInit(): void {
    this.gitService.getUser()
   
    this.user = this.gitService.user
}    
}

