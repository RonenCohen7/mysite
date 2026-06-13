/** Field keys must match the n8n form HTML `name` attributes (field-0 … field-4). */
export const n8nContactFields = {
  fullName: "field-0",
  email: "field-1",
  company: "field-2",
  message: "field-3",
  mobile: "field-4",
} as const;

export interface N8nContactPayload {
  name: string;
  email: string;
  company?: string;
  message: string;
  mobile: string;
}

export function buildN8nContactFormData(data: N8nContactPayload): FormData {
  const form = new FormData();
  form.append(n8nContactFields.fullName, data.name);
  form.append(n8nContactFields.email, data.email);
  form.append(n8nContactFields.company, data.company || "");
  form.append(n8nContactFields.message, data.message);
  form.append(n8nContactFields.mobile, data.mobile);
  return form;
}
