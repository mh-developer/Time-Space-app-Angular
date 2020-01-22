import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { UserAddComponent } from './user-add.component';

describe('UserAddComponent', () => {
    let component: UserAddComponent;
    let fixture: ComponentFixture<UserAddComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserAddComponent],
            imports: [
                RouterTestingModule,
                HttpClientTestingModule,
                FormsModule,
                ReactiveFormsModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserAddComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
