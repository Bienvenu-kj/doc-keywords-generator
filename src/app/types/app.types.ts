export class UploadFileForm {
  constructor(public _file: File) {}
}

export interface KeywordsApiResponse {
  document_name: string;
  keywords: keywordApiResponse[];
}

export interface keywordApiResponse {
  term: string;
  score: number;
}
