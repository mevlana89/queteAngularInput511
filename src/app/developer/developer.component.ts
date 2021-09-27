import { Component, OnInit } from '@angular/core';
import { Developer } from "../common/developer.model";
import { Skill } from '../common/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  constructor() {
    
   }
  skills : Skill[] = [{logo:'logo1', name: 'name1', site:'site1' },{logo:'logo2', name: 'name2', site:'site2' }] ;
  developer2 : Developer = { lastName: '1', firstName: 'firstname', sexe : 'sexe', age : 15, bio : "bio", skills : this.skills };
  developer3 : Developer | undefined;
  
  ngOnInit(): void {
    this.developer3 = { lastName: '1', firstName: 'firstname', sexe : 'sexe', age : 15, bio : "bio", skills : this.skills };
    //developer : new Developer = { lastName: '1'};
  }
}
