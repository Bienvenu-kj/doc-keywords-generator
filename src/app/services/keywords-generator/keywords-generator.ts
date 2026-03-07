import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class KeywordsGenerator {
 apiUrl = 'https://doc-keywords-generator-api.onrender.com/keywords';
  constructor() {
   
 }

  async generateKeywords(formData: FormData) {
    return await fetch(this.apiUrl, {
      method: "POST",
      body: formData
    })
}
}
