// alert.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  show(message: string, backgroundColor: string, duration: number) {
    const alert = document.createElement('div');
    alert.textContent = message;
    alert.style.backgroundColor = backgroundColor;
    alert.className = 'alert';

    document.body.appendChild(alert);

    setTimeout(() => {
      alert.remove();
    }, duration);
  }
}
