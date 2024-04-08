import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: any[] = []; // Array to store employee data

  constructor() { }

  // Method to add a new employee to the list
  addEmployee(employee: any): void {
    this.employees.push(employee);
  }

  // Method to fetch the list of employees
  getEmployees(): any[] {
    return this.employees;
  }
}
