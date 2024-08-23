import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {
  private apiUrl = 'https://api.unsplash.com/search/photos';
  private accessKey = '5PysMKy14BMSlXTb1YqdXxaO_8STo-17DlS1nSPnxX4'; // Reemplaza con tu clave de API

  constructor(private http: HttpClient) { }

  getImagesByCategory(category: string, count: number) {
    const params = new HttpParams()
      .set('query', category)
      .set('per_page', count.toString())
      .set('client_id', this.accessKey);

    return this.http.get<any>(this.apiUrl, { params });
  }
}

