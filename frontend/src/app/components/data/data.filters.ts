import { Pipe, PipeTransform } from '@angular/core';

import { Data } from 'src/app/models/data.model';

@Pipe({
    name: 'genderFilter'
})
export class GenderFilterPipe implements PipeTransform {

    transform(employees: Data[], gender: string) {
        return employees.filter((e: any) => { 
            if (gender === 'all') {
                return e
            } else if (e.sex === gender) {
                return e
            }
        })
    }
}