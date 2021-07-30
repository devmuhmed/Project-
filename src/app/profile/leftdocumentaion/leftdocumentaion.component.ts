import { Component, OnInit } from '@angular/core';
import { faCertificate, faFileContract, faFileSignature, faSignal } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-leftdocumentaion',
  templateUrl: './leftdocumentaion.component.html',
  styleUrls: ['./leftdocumentaion.component.css']
})
export class LeftdocumentaionComponent implements OnInit {

  constructor() { }
  faFileContract=faFileSignature;
  ngOnInit(): void {
  }

}
