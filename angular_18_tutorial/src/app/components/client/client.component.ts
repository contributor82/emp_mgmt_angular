import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel } from '../../model/class/interface/apiresponsemodel';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  clientObj: Client = new Client();
  clientList: Client[] = [];
  clientService = inject(ClientService);

  onEditClient(editClientObj: Client) {
    this.clientObj = editClientObj;
  }

  onSaveClient() {
    debugger;
    this.clientService.addUpdateClient(this.clientObj).subscribe((response: APIResponseModel) => {
      if (response.result) {
        alert('Client created/updated successfully');
        this.loadClients();
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
          this.loadClients();
        }
        else {
          alert(response.message);
        }
      });
    }
  }


  loadClients() {
    this.clientService.getAllClients().subscribe((response: APIResponseModel) => {
      this.clientList = response.data;
    }, error => {
      alert('Clients cannot be loaded');
    });
  }

  ngOnInit(): void {
    this.loadClients();
  }
}
