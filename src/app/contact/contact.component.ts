import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor( private activateRouter : ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRouter.queryParams.subscribe((param)=>{
      console.log(param);
    })
  }

}
