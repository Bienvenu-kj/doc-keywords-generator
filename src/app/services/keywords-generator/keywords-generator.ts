import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { KeywordsApiResponse } from '../../types/app.types';
import { firstValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class KeywordsGenerator {
  http = inject(HttpClient);

  apiUrl = 'https://doc-keywords-generator-api.onrender.com/keywords';
  constructor() {}

  async generateKeywords(formData: FormData) {
    return firstValueFrom(this.http.post<KeywordsApiResponse>(this.apiUrl, formData));
  }
}
