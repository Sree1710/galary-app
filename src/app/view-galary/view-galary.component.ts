import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-galary',
  templateUrl: './view-galary.component.html',
  styleUrls: ['./view-galary.component.css']
})
export class ViewGalaryComponent implements OnInit {

  constructor(private api:ApiService) {
    api.viewGalary().subscribe(
      (response)=>{
        this.data=response
      }
    )
   }

  ngOnInit(): void {
  }
  data:any=[ ]

}
