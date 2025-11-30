// src/services/api.ts

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

interface RequestOptions extends RequestInit {
  token?: string;
}

class ApiService {
  private static async request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    const { token, headers, ...rest } = options;

    const defaultHeaders: HeadersInit = {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    };

    const response = await fetch(`${BASE_URL}${endpoint}`, {
      headers: defaultHeaders,
      ...rest,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'An error occurred' }));
      throw new Error(error.message || `Request failed with status ${response.status}`);
    }

    return response.json();
  }

  static get<T>(endpoint: string, token?: string) {
    return this.request<T>(endpoint, { method: 'GET', token });
  }

  static post<T>(endpoint: string, body: any, token?: string) {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(body),
      token,
    });
  }

  static put<T>(endpoint: string, body: any, token?: string) {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(body),
      token,
    });
  }

  static delete<T>(endpoint: string, token?: string) {
    return this.request<T>(endpoint, { method: 'DELETE', token });
  }
}

export default ApiService;
