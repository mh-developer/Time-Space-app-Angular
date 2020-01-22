import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersSearchComponent } from './users-search.component';
import { FormsModule } from '@angular/forms';

describe('UsersSearchComponent', () => {
    let component: UsersSearchComponent;
    let fixture: ComponentFixture<UsersSearchComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UsersSearchComponent],
            imports: [
                FormsModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UsersSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
