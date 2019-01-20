import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './create/view/view.component';
import { HeaderComponent } from './create/header/header.component';
import { FooterComponent } from './create/footer/footer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RuleService } from './create/rule.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ViewComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'create',component:CreateComponent}
    ])
  ],
  providers: [RuleService],
  bootstrap: [AppComponent],
  entryComponents: [ViewComponent]
})
export class AppModule { }
