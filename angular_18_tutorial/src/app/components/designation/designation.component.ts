import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { APIResponseModel } from '../../model/class/interface/apiresponsemodel';
import { IDesignation } from '../../model/class/interface/designation';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {

  designationList: IDesignation[] = [];
  isLoader: boolean = true;
  masterService = inject(MasterService);

  ngOnInit(): void {
    this.getAllDesignation();
  }

  getAllDesignation() {
    this.masterService.getAllDesignation().subscribe((response: APIResponseModel) => {
      this.designationList = response.data;
      this.isLoader = false;
    }, error => {
      alert('Designations cannot be loaded.');
      this.isLoader = false;
    });
  }

}
