import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Proyecto } from '../_models/proyecto';
import { GLOBAL as config } from '../_config/config';
//import { config } from 'rxjs';

@Injectable()
export class ProyectoService {
    constructor(private http: HttpClient) { 
                }

    contextUrl: string = config.url+'proyecto';

    getAll(): Observable<Proyecto[]> {
        return this.http.get<Proyecto[]>(`${this.contextUrl}`)
        .pipe(map(data => data));
    }

    getById(id: string): Observable<Proyecto> {
        return this.http
        .get<Proyecto>(`${this.contextUrl}/` + id)
        .pipe(map(data => data));
    }

    create(proyecto: Proyecto): Observable<Proyecto> {
        return this.http.post<Proyecto>(`${this.contextUrl}/`, proyecto)
        .pipe(map(data => data));;
    }

    update(proyecto: Proyecto) {
        return this.http.post(`${this.contextUrl}/` + proyecto.Codigo, proyecto)
        .pipe(map(data => data));
    }

    delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.contextUrl}/` + id)
        .pipe(map(data => data));
    }
}