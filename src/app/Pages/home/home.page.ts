import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  

  data:any;
  
  constructor(private activateRoute: ActivatedRoute, private router: Router,public toastController: ToastController) {
    
    this.activateRoute.queryParams.subscribe(params =>{
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.data = this.router.getCurrentNavigation()?.extras.state?.["user"];
        console.log(this.data)
      }else{
        this.router.navigate(["/login"]);
      }
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  async showToast() {
    const toast = await this.toastController.create({
       message: 'El estacionamiento ha sido reservado',
       duration: 2000
    });
    toast.present();
    }
  
}
