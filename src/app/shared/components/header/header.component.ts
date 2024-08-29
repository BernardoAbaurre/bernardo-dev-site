import { Component, OnInit } from '@angular/core';
import { Page } from '../../interfaces/page';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  private readonly pagesSet : Page[] = [
    {Name: "Hub", Url: "./hub"},
    {Name: "Tic Tac Toe", Url: "./tic-tac-toe"}
  ]

  pages: Page[] = [];
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      searchInput: new FormControl(''),
    });
   }

  ngOnInit(): void {
    this.pages = this.pagesSet;
  }

  public search()
  {
    this.pages = this.pages.filter(p => p.Name.toLowerCase().includes(this.form.value.searchInput.toLowerCase()));
  }

  public clear()
  {
    if (this.form.value.searchInput == '') {
      this.pages = this.pagesSet
    }
  }

}
