import { ProfileEditComponent } from './../profile-edit/profile-edit.component';
import { Dialog } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-my-profile',
  imports: [CommonModule, FormsModule],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss'
})
export class MyProfileComponent {


  imagePreview: string | ArrayBuffer | null = null;
  choose_hide=true;

onImageSelected(event: Event): void {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      this.choose_hide = !this.choose_hide;
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(file);
  }
}

  Dialog = inject(MatDialog);

openDilog() {
this.Dialog.open(ProfileEditComponent);
}
}
