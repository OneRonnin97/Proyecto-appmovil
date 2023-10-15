import { Component, OnInit, ViewChildren,ViewChild, ElementRef } from '@angular/core';
import { IonCard, } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import type {QueryList} from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChildren(IonCard, {read:ElementRef})
  cardElements!: QueryList<ElementRef<HTMLIonCardElement>>;
  
  
  user={
    usuario:"",
    password:"",
  }


  constructor(private router: Router) { }
  ngOnInit() {
  }
  ingresar(){
    console.log(this.user)
    
    let navigationextras: NavigationExtras={
      state:{
        user: this.user 
      }
    }
    this.router.navigate(['/home'],navigationextras);
  }
  
 
}
