import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bernardo-dev-site';

  constructor(private toastr: ToastrService)
  {

  }
  ngOnInit(): void {
    // this.toastr.success("dddd")
  }


}
