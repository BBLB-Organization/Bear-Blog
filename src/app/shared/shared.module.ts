import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByPassSecurityPipe } from './pipes/sanitize.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { ToasterComponent } from './toaster/toaster.component';

@NgModule({
    declarations: [
    NavbarComponent,
    FooterComponent,
    ToasterComponent
  ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [NavbarComponent,FooterComponent, ToasterComponent]
})

export class SharedModule { }