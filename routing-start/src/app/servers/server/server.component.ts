import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  paramSubscription: Subscription;

  constructor(private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: Data) => {
        this.server = data['server'];//to be match the name with app-routing resolver
      });
    //const id = +this.route.snapshot.params['id'];
    //this.server = this.serversService.getServer(id);
    //this.paramSubscription = this.route.params
    //    .subscribe(
    //      (param: Params) => {
    //        this.server = this.serversService.getServer(+param['id']);
    //      });
  }
  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' });
  }

}
