import { Component, inject, Input, OnInit } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Kitap } from '../Kitap.model';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-kitap-form',
  standalone: true,
  imports: [DialogModule, ButtonModule, InputTextModule, ReactiveFormsModule],
  templateUrl: './kitap-form.component.html',
  styleUrl: './kitap-form.component.scss'
})
export class KitapFormComponent implements OnInit {

  @Input() kitap: Kitap | any;

  formBuilder: FormBuilder;
  form: FormGroup;

  constructor() {
    this.formBuilder = inject(FormBuilder);
    this.form = this.formBuilder.group(
      {
        name:new FormControl('',Validators.required),
        code:new FormControl('',Validators.required)
      }
    );

  }

  ngOnInit(): void {
    console.log(this.kitap?.code)

  }
  saveBook(){
    
  }

}
