/// <reference types="@sveltejs/kit" />

declare namespace App {
  interface Locals {
    user: User;
  }
}

interface AuthenticationResult {
  statusCode: number;
  status: string;
  user: User;
  sessionId: string;
}

interface Credentials {
  username: string;
  password: string;
}

interface UserProperties {
  id: number;
  expires?: string; // ISO-8601 datetime
  role: "admin";
  password?: string;
  username?: string;
}

type User = UserProperties | undefined | null;


type Server = {
  host: string;
  port: number;
};

interface UserSession {
  id: string;
  user: User;
}

interface Window {
  google?: any;
  grecaptcha: any;
  bootstrap: Bootstrap;
}