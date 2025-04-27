import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-profile-edit',
  imports: [CommonModule,FormsModule],
  templateUrl: './profile-edit.component.html',
  styleUrl: './profile-edit.component.scss'
})
export class ProfileEditComponent {
  user = {
    firstName: '',
    lastName: '',
    gender: '',
    mobile: '',
    email: '',
    state: '',
    city: ''
  };

  states = ['Madhya Pradesh', 'Uttar Pradesh', 'Maharashtra', 'Gujarat'];
  cities = ['Bhopal', 'Indore', 'Mumbai', 'Ahmedabad'];

  updateDetails() {
    console.log('Updated User Details:', this.user);
    // You can also close the modal here
  }

  updateMobile() {
    alert('Mobile number update functionality triggered!');
  }
  Dialog = inject(MatDialog);
  closeModal() {



    this.Dialog.closeAll();

    // Close modal logic (depends on how you open modal: Bootstrap Modal, Angular Modal, etc.)
    console.log('Modal Closed');
  }

}

