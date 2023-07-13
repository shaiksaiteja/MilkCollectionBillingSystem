import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './navbar/admin/admin.component';
import { HomeComponent } from './navbar/home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from  '@angular/common/http';
import { ApiService } from './api.service';
import { AboutusComponent } from './navbar/aboutus/aboutus.component';
import { ContactusComponent } from './navbar/contactus/contactus.component';
import { SellerComponent } from './navbar/seller/seller.component';
import { SellerdashboardComponent } from './sellerdashboard/sellerdashboard.component';
import { SellerregisterComponent } from './dashboard/sellerregister/sellerregister.component';
import { MilksubmissionComponent } from './dashboard/milksubmission/milksubmission.component';
import { Home2Component } from './dashboard/home2/home2.component';
import { SellerlistComponent } from './dashboard/sellerlist/sellerlist.component';
import { MilkcollectionComponent } from './dashboard/milkcollection/milkcollection.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { RatechartComponent } from './dashboard/ratechart/ratechart.component';
import { BillgenerationComponent } from './dashboard/billgeneration/billgeneration.component';
import { EnquiryComponent } from './dashboard/enquiry/enquiry.component';
import { PaymentComponent } from './dashboard/payment/payment.component';
import { UserprofileComponent } from './sellerdashboard/userprofile/userprofile.component';
import { PaymentsComponent } from './sellerdashboard/payments/payments.component';
import { MilkrecordsComponent } from './sellerdashboard/milkrecords/milkrecords.component';
import { Home3Component } from './sellerdashboard/home3/home3.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminComponent,
    HomeComponent,
    DashboardComponent,
    AboutusComponent,
    ContactusComponent,
    SellerComponent,
    SellerdashboardComponent,
    SellerregisterComponent,
    MilksubmissionComponent,
    Home2Component,
    SellerlistComponent,
    MilkcollectionComponent,
    ProfileComponent,
    RatechartComponent,
    BillgenerationComponent,
    EnquiryComponent,
    PaymentComponent,
    UserprofileComponent,
    PaymentsComponent,
    MilkrecordsComponent,
    Home3Component,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
     
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
