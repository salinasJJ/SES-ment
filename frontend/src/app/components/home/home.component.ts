import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { DataService } from 'src/app/services/data.service';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    employeeForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private dataService: DataService,
        private appRouter: AppRoutingModule,
        ) {
        this.employeeForm = this.formBuilder.group({ })
    }

    ngOnInit(): void {
        this.initializeGroup();
    }

    initializeGroup(): void {
        this.employeeForm = this.formBuilder.group({
            firstName: '',
            lastName: '',
            sex: '',
            birthDate: '',
        })
    }

    onSubmit(): void {
        this.dataService.create(this.employeeForm.value)
            .subscribe(
                response => {
                    console.log("Success!", response)
                },
                error => {
                    console.error('Error!', error)
                }
            );
        
        this.appRouter.data_redirect()
    }

}
