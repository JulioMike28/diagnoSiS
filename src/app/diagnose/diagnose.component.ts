import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap'
import { ModalService } from '../_modal';

@Component({
  selector: 'app-diagnose',
  templateUrl: './diagnose.component.html',
  styleUrls: ['./diagnose.component.css']
})

export class DiagnoseComponent implements OnInit {
  img = "";
  variavel= '';
  foto = [];
  closeResult: string;
  constructor( public  modalService: ModalService) { }

  ngOnInit(): void {
  }

  onFileSelected(event){
    this.img = "../../assets/images/"+event.target.files[0].name;
    console.log(this.img)
  }
  



}
