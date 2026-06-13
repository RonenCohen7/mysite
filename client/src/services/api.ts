import axios from "axios";
import type { Project, ApiResponse, AuthMeResponse, UploadResponse } from "@mysite/shared";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "",
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

let csrfToken = "";

api.interceptors.request.use((config) => {
  if (csrfToken && config.method !== "get") {
    config.headers["x-csrf-token"] = csrfToken;
  }
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401 && window.location.pathname.startsWith("/admin") && !window.location.pathname.includes("login")) {
      window.location.href = "/admin/login";
    }
    return Promise.reject(err);
  }
);

export async function fetchCsrfToken(): Promise<string> {
  const { data } = await api.get<ApiResponse<{ csrfToken: string }>>("/api/csrf-token");
  csrfToken = data.data?.csrfToken || "";
  return csrfToken;
}

export async function login(password: string) {
  await fetchCsrfToken();
  const { data } = await api.post<ApiResponse>("/api/auth/login", { password });
  return data;
}

export async function logout() {
  const { data } = await api.post<ApiResponse>("/api/auth/logout");
  return data;
}

export async function checkAuth(): Promise<AuthMeResponse> {
  const { data } = await api.get<ApiResponse<AuthMeResponse>>("/api/auth/me");
  return data.data || { authenticated: false };
}

export async function getProjects(): Promise<Project[]> {
  const { data } = await api.get<ApiResponse<Project[]>>("/api/projects");
  return data.data || [];
}

export async function getAdminProjects(): Promise<Project[]> {
  await fetchCsrfToken();
  const { data } = await api.get<ApiResponse<Project[]>>("/api/admin/projects");
  return data.data || [];
}

export async function getAdminProject(id: string): Promise<Project | null> {
  const { data } = await api.get<ApiResponse<Project>>(`/api/admin/projects/${id}`);
  return data.data || null;
}

export async function createProject(project: Record<string, unknown>): Promise<Project> {
  await fetchCsrfToken();
  const { data } = await api.post<ApiResponse<Project>>("/api/admin/projects", project);
  return data.data!;
}

export async function updateProject(id: string, project: Record<string, unknown>): Promise<Project> {
  await fetchCsrfToken();
  const { data } = await api.put<ApiResponse<Project>>(`/api/admin/projects/${id}`, project);
  return data.data!;
}

export async function deleteProject(id: string): Promise<void> {
  await fetchCsrfToken();
  await api.delete(`/api/admin/projects/${id}`);
}

export async function uploadFile(file: File, kind: "image" | "video"): Promise<UploadResponse> {
  await fetchCsrfToken();
  const form = new FormData();
  form.append("file", file);
  form.append("kind", kind);
  const { data } = await api.post<ApiResponse<UploadResponse>>("/api/admin/upload", form, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data.data!;
}

export async function sendContact(form: Record<string, string>): Promise<void> {
  await api.post<ApiResponse>("/api/contact", form);
}

export function getMediaUrl(fileId: string): string {
  return `/api/media/${fileId}`;
}

export default api;
