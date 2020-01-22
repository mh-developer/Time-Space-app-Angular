import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../../../services';
import { Employee } from './../../../models';

@Component({
    selector: 'app-user-add',
    templateUrl: './user-add.component.html',
    styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
    employeeForm: FormGroup;
    success: boolean = true;

    constructor(
        private router: Router,
        private employeeService: EmployeeService,
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        this.employeeForm = this.formBuilder.group({
            FirstName: ['', Validators.required],
            LastName: ['', Validators.required],
            OrganizationalUnitId: [null, Validators.required],
        });
    }

    submit(formData): void {
        console.log(formData);
        this.employeeService
            .put(formData as Employee)
            .subscribe(
                data => this.router.navigateByUrl('users'),
                err => this.success = false
            );
        this.employeeForm.reset();
    }
}
