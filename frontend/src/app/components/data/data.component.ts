import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
import { Data } from 'src/app/models/data.model';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
    selector: 'app-data',
    templateUrl: './data.component.html',
    styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
    employees: Data[];
    gender: string;
    editable: boolean = false;
    
    constructor(
        private dataService: DataService,
        private appRouter: AppRoutingModule,
    ) {
        this.employees = [];
        this.gender = 'all';
     }

    ngOnInit(): void { 
        this.get_employees();
    }

    get_employees() {
        return this.dataService.read()
            .subscribe(
                response => {
                    this.employees = response
                },
                error => {
                    console.error('Error!', error)
                }
            );
    }

    update_employee(employee: Data, attribute: string, event: any) {
        const editedField = event.target.textContent;
        
        if (attribute === 'firstName') {
            employee.firstName = editedField;
        } else if (attribute === 'lastName') {
            employee.lastName = editedField;
        } else if (attribute === 'sex') {
            employee.sex = editedField;
        } else if (attribute === 'birthDate') {
            employee.birthDate = editedField
        }

        this.dataService.update(employee)
            .subscribe(
                response => {
                    console.log('Employee updated.')
                },
                error => {
                    console.error('Error!', error)
                }
            );
    }

    delete_employee(employee: Data) {
        this.dataService.delete(employee)
            .subscribe(
                response => {
                    console.log('Employee deleted.')
                },
                error => {
                    console.error('Error!', error)
                }
            );
    }

    enable_edit(employee: Data) {
        employee.editable = !employee.editable;
    }

    reload_page() {
        window.location.reload();
    }

    go_back() {
        this.appRouter.home_redirect()
    }

    get_age(date: string) {
        const today = new Date();
        const birthdate = new Date(date);
        const month = today.getMonth() - birthdate.getMonth();
        let age = today.getFullYear() - birthdate.getFullYear();
        
        if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
            age--;
        }
        return age;
    }

    get_oldest_age() {
        let oldest_age = 0;

        this.employees.filter((e: any) => { 
            const age = this.get_age(e.birthDate)
            
            if (this.gender === 'all' && age > oldest_age) {
                oldest_age = age;
            } else if (this.gender === e.sex && age > oldest_age) {
                oldest_age = age;
            }
        })
        return oldest_age
    }

    get_youngest_age() {
        let youngest_age = 1000000;

        this.employees.filter((e: any) => { 
            const age = this.get_age(e.birthDate)

            if (this.gender === 'all' && age < youngest_age) {
                youngest_age = age;
            } else if (e.sex === this.gender && age < youngest_age) {
                youngest_age = age;
            }
        })
        return youngest_age
    }

    get_average_age() {
        let age_sum = 0;
        let total = 0;

        this.employees.filter((e: any) => {
            const age = this.get_age(e.birthDate)
            
            if (this.gender === 'all') {
                age_sum += age;
                total++;
            } else if (e.sex === this.gender) {
                age_sum += age;
                total++;
            }
        })
        return Math.round(age_sum / total)
    }
}



