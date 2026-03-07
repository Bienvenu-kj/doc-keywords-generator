import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LucideAngularModule, Upload, CheckLine, Sparkles } from 'lucide-angular';
import { UploadFileForm, KeywordsApiResponse } from '../../types/app.types';
import { KeywordsGenerator } from '../../services/keywords-generator/keywords-generator';

@Component({
  selector: 'app-home',
  imports: [LucideAngularModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export default class Home {
  readonly uploadIcon = Upload;
  readonly checkIcon = CheckLine;
  readonly sparklesIcon = Sparkles;
  keywordsGenService = inject(KeywordsGenerator);

  formData = new FormData();
  uploadFileForm = new UploadFileForm(null!);
  fileIsSelected = signal(false);

  keywords = signal<KeywordsApiResponse | null>(null);

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files;

    if (files && files.length > 0) {
      this.uploadFileForm._file = files[0];
      this.fileIsSelected.set(true);
    }
  }

  async onSubmit() {
    if (this.uploadFileForm._file) {
      alert(this.uploadFileForm._file.name);
      this.formData.append('file', this.uploadFileForm._file);

      const response = (await this.keywordsGenService
        .generateKeywords(this.formData)
      )

      const data = await response.json() as KeywordsApiResponse;
      this.keywords.set(data);
    }
  }

  descriptions = [
    'Générez automatiquement les mots-clés de vos documents PDF ou texte en quelques secondes.',
    'Identifiez rapidement les concepts clés d’un document ou d’un livre grâce à la génération automatique de mots-clés.',
    'Gagnez du temps en générant automatiquement les mots-clés de vos documents PDF ou texte.',
    'Repérez rapidement les notions importantes d’un texte ou d’un PDF et concentrez-vous sur l’essentiel.',
  ];
}
