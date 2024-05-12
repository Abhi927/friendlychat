import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({apiKey: "AIzaSyB-Nz9a-EqbbCOM9qaZOp5eehHEzgz6Iuc",
  authDomain: "friendlychat-a895c.firebaseapp.com",
  projectId: "friendlychat-a895c",
  storageBucket: "friendlychat-a895c.appspot.com",
  messagingSenderId: "793532508405",
  appId: "1:793532508405:web:b1eecfb9fb90b2de6e7dbc",
  measurementId: "G-QSY5XC30PX"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideFunctions(() => getFunctions())), importProvidersFrom(provideMessaging(() => getMessaging())), importProvidersFrom(provideStorage(() => getStorage()))]
};
