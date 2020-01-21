import { UsersComponent } from './users';
import { PresenceComponent } from './presence';
import { SettingsComponent } from './settings';
import { NavigationComponent, EmployeeListComponent } from './shared';


export const components: any[] = [
    UsersComponent,
    PresenceComponent,
    SettingsComponent,
    NavigationComponent,
    EmployeeListComponent
];


export * from './users';
export * from './presence';
export * from './settings';
export * from './shared';
