import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css',
})
export class EmployeesComponent {
  employees = [
    { id: 1, name: 'Juan', salary: 450.45, active: false },
    { id: 1, name: 'Luis', salary: 300.0, active: false },
    { id: 2, name: 'Marco', salary: 550.2, active: false },
    { id: 3, name: 'Pedro', salary: 150.85, active: true },
    { id: 4, name: 'Eduardo', salary: 80.69, active: false },
    { id: 5, name: 'Miriam', salary: 123.23, active: false },
    { id: 6, name: 'Luz', salary: 450.45, active: true },
    { id: 7, name: 'Maria', salary: 201.55, active: false },
    { id: 8, name: 'Ana', salary: 144.88, active: true },
    { id: 9, name: 'Axel', salary: 420.89, active: false },
    { id: 10, name: 'Roberto', salary: 250.45, active: false },
  ];
}
