import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [
    {
      instanceType: 'medium',
      name: 'Production',
      status: 'stable',
      started: new Date(15, 1, 2017),
      count: 5
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(15, 1, 2017),
      count: 15
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 1, 2017),
      count: 12
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(15, 1, 2017),
      count: 23
    }
  ];
  filteredStatus = '';
  statusFetched = false;
  appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('stable');
      this.statusFetched = true;
    }, 2000);
  });

  getStatusClasses(server: { instanceType: string, name: string, status: string, started: Date }) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }

  onAddServer() {
    this.servers.push({
      instanceType: 'small',
      name: 'New Environment Server',
      status: 'stable',
      started: new Date(15, 1, 2017),
      count: 32
    })
  }
}
