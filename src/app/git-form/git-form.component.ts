import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { GitRequestService } from '../git-http/git-request.service';
import { User } from '../user';
import { Repository } from '../repository';

@Component({
  selector: 'app-git-form',
  templateUrl: './git-form.component.html',
  styleUrls: ['./git-form.component.css']
})
export class GitFormComponent implements OnInit {
  
  Username?:string;
  
  @Output() emitSearch = new EventEmitter<any>();
  constructor(GitServise:GitRequestService) { }

  searchUser() {
    this.emitSearch.emit(this.Username);
    this.Username;

    
  }

  ngOnInit(): void {
  }

}
