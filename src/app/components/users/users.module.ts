import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { UsersComponent } from './users.component';
import { HeaderComponent } from '../header/header.component';
import { UsersRoutingModule } from './user-routing.module';

@NgModule({
    imports: [
        CommonModule,        
        NgbDropdownModule.forRoot(),
        ReactiveFormsModule,
        Ng2SmartTableModule,        
        TranslateModule,
        UsersRoutingModule,
        AlertModule.forRoot()
    ],
    declarations: [UsersComponent, HeaderComponent]
})
export class UsersModule {
}