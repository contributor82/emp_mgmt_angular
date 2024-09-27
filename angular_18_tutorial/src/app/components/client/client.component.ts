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

  onSaveClient() {
    debugger;
    this.clientService.addUpdateClient(this.clientObj).subscribe((result: APIResponseModel) => {
      if (result.result) {
        alert('Client created successfully');
        this.loadClients();
        this.clientObj = new Client();
      }
      else {
        alert(result.message);
      }
    }

    );

  }

  loadClients() {
    this.clientService.getAllClients().subscribe((result: APIResponseModel) => {
      this.clientList = result.data;
    }, error => {
      alert('Clients cannot be loaded');
    });
  }

  ngOnInit(): void {
    this.loadClients();
  }
}
