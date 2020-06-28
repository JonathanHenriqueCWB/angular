import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestandoLintComponent } from './testando-lint/testando-lint.component';
import { TestandoTestComponent } from './testando-test/testando-test.component';
import { TestandoE2eComponent } from './testando-e2e/testando-e2e.component';

@NgModule({
  declarations: [
    AppComponent,
    TestandoLintComponent,
    TestandoTestComponent,
    TestandoE2eComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
