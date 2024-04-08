import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css'],
  providers: [UserService]
})
export class ManagementComponent implements OnInit {
  employees: any[] = [];
  newEmployee: any = { firstName: '', lastName: '', email: '' };

  constructor(
    private employeeService: EmployeeService,
    private userService: UserService // Include UserService in the constructor
  ) {}

  ngOnInit(): void {
    // Fetch list of emps from EmployeeService
    this.employees = this.employeeService.getEmployees();
  }

  addEmployee() {
    // Call addEmployee from the EmployeeService to add 
    this.employeeService.addEmployee(this.newEmployee);
    
    // After adding emp, update the list of emps
    this.employees = this.employeeService.getEmployees();
    
    // Reset Form
    this.newEmployee = { firstName: '', lastName: '', email: '' };
  }
}
