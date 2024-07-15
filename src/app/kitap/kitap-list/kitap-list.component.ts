import { Kitap } from './../Kitap.model';
import { Component, inject, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { KitapService } from '../kitap.service';
import { ButtonModule } from 'primeng/button';
import { KitapFormComponent } from '../kitap-form/kitap-form.component';
import { DialogModule } from 'primeng/dialog';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-kitap-list',
  standalone: true,
  imports: [TableModule, CommonModule, ButtonModule,KitapFormComponent,DialogModule],
  templateUrl: './kitap-list.component.html',
  styleUrl: './kitap-list.component.scss'
})
export class KitapListComponent implements OnInit {

  seciliKitap?: Kitap;

  visible: boolean = false;


  kitapList: Kitap[] = [];
  _kitapService: KitapService;

  constructor() {
    this._kitapService = inject(KitapService);
  }

  ngOnInit() {
    this.kitapList = this._kitapService.getKitapList();


  }




  editBook(item: Kitap) {
    this.seciliKitap = item;
    this.visible = true;

  }



}
