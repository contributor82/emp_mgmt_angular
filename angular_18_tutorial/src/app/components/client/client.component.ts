import { Component, inject, OnInit, signal } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel } from '../../model/class/interface/apiresponsemodel';
import { AsyncPipe, DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule, UpperCasePipe, DatePipe, JsonPipe, AsyncPipe],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {

  // Creating Signal
  framework = signal('Angular');

  // Created for Async pipe. First it should be subscribed to observable.
  userList$: Observable<any> = new Observable<any>();

  currentDate: Date = new Date(); // created for displaying Date pipe usage.
  clientObj: Client = new Client();
  clientList: Client[] = [];
  clientService = inject(ClientService);

  onEditClient(editClientObj: Client) {
    this.clientObj = editClientObj;
  }

  onClickChangeFramework() {
    this.framework.set("Angular 18");
  }

  onSaveClient() {
    debugger;
    this.clientService.addUpdateClient(this.clientObj).subscribe((response: APIResponseModel) => {
      if (response.result) {
        alert('Client created/updated successfully');
        this.getAllClients();
        this.clientObj = new Client();
      }
      else {
        alert(response.message);
      }
    });

  }

  onDeleteClient(clientId: number) {
    const isDelete: boolean = confirm('Are you sure to delete this client?');
    if (isDelete) {
      this.clientService.deleteClientByClientId(clientId).subscribe((response: APIResponseModel) => {
        if (response.result) {
          alert('Client deleted successfully');
          this.getAllClients();
        }
        else {
          alert(response.message);
        }
      });
    }
  }

  onReset() {
    this.clientObj = new Client();
  }

  getAllClients() {
    this.clientService.getAllClients().subscribe((response: APIResponseModel) => {
      this.clientList = response.data;
    }, error => {
      alert('Clients cannot be loaded');
    });
  }

  ngOnInit(): void {
    const framework_name = this.framework();
    this.getAllClients();
    // API call does not need to subscribe to observable.
    // It can be subscribed directly to HTML.
    this.userList$ = this.clientService.getAllUser();
  }
}
