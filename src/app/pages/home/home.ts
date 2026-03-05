import { Component } from '@angular/core';
import { LucideAngularModule, Upload } from "lucide-angular"

@Component({
  selector: 'app-home',
  imports: [LucideAngularModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export default class Home {
 readonly uploadIcon = Upload
}
