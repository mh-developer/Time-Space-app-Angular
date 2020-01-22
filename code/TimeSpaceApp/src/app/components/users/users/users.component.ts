import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Employee } from '../../../models';
import { EmployeeService } from '../../../services';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
    // tslint:disable-next-line: variable-name
    private _onDestroy = new Subject();

    allEmployees: Employee[];
    employees: Employee[];

    constructor(
        private employeeService: EmployeeService
    ) { }

    ngOnInit() {
        this.employeeService
            .getAll()
            .pipe(takeUntil(this._onDestroy))
            .subscribe((item: Employee[]) => {
                this.employees = item;
                this.allEmployees = item;
            });
    }

    ngOnDestroy() {
        this._onDestroy.next();
        this._onDestroy.complete();
    }

    search(employees: Employee[]) {
        this.employees = employees;
    }
}
