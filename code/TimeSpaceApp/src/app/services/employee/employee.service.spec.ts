import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { Employee } from './../../models/employee.model';
import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            HttpClientTestingModule
        ]
    }));

    it('should be created', () => {
        const service: EmployeeService = TestBed.get(EmployeeService);
        expect(service).toBeTruthy();
    });

    it('should get all data', () => {
        const service: EmployeeService = TestBed.get(EmployeeService);
        const result = service.getAll();
        expect(result).toBeTruthy();
    });

    it('should get specific employee', () => {
        const service: EmployeeService = TestBed.get(EmployeeService);
        const result = service.get(173);
        expect(result).toBeTruthy();
    });

    it('should add new employee', () => {
        const service: EmployeeService = TestBed.get(EmployeeService);
        const result = service.put({} as Employee);
        expect(result).toBeTruthy();
    });

    it('should modify employee', () => {
        const service: EmployeeService = TestBed.get(EmployeeService);
        const result = service.put({} as Employee, 173);
        expect(result).toBeTruthy();
    });
});
