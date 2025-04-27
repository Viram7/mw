import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeCorosolComponent } from './home-corosol/home-corosol.component';
import { CourceDetailsComponent } from './cource-details/cource-details.component';
import { BatchDetailsComponent } from './batch-details/batch-details.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { OrderSummeryComponent } from './order-summery/order-summery.component';
import { StuHomeComponent } from './stu-home/stu-home.component';
import { StuStudyComponent } from './stu-study/stu-study.component';
import { StuBatchComponent } from './stu-batch/stu-batch.component';
import { StuContactComponent } from './stu-contact/stu-contact.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyPurchaseComponent } from './my-purchase/my-purchase.component';
import { MyBatchComponent } from './my-batch/my-batch.component';
import { CourceStudyComponent } from './cource-study/cource-study.component';
import { BatchDetailsSubComponent } from './batch-details-sub/batch-details-sub.component';
import { RegisterPageComponent } from './register-page/register-page.component';



export const routes: Routes = [
  {path:'',redirectTo:'home_page',pathMatch:'full'},
  {path:'home_page',component:HomePageComponent},
  {path:'cource_details',component:CourceDetailsComponent},
  {path:'batch_details',component:BatchDetailsComponent},
  {path:'login_page',component:LoginPageComponent},
  {path:'register_page',component:RegisterPageComponent},
  {path:'order_summery',component:OrderSummeryComponent},


  {path:'stu_home',component:StuHomeComponent,
    children:[
      // {path:'',component:StuStudyComponent,outlet:'student'},
      // {path:'stu_study',component:StuStudyComponent,outlet:'student'},
      {path:'stu_study',component:StuStudyComponent},
      {path:'stu_batch',component:StuBatchComponent},
      {path:'stu_contact',component:StuContactComponent},
      {path:'my_profile',component:MyProfileComponent},
      {path:'my_purchase',component:MyPurchaseComponent},
      {path:'my_batch',component:MyBatchComponent},
      {path:'cource_study',component:CourceStudyComponent},

      {path:'batch_details_sub',component:BatchDetailsSubComponent},
      {path:'order_summery',component:OrderSummeryComponent},






    ]
  },



// {path:"home-page",component:HomePageComponent},
// {path:"navbar",component:NavbarComponent},
// {path:"homecorosol",component:HomeCorosolComponent},

];
