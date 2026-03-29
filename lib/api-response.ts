import { NextResponse } from "next/server";

export type ApiErrorBody = {
  error: string;
  code?: string;
  details?: unknown;
};

export function jsonError(
  message: string,
  status: number,
  options?: { code?: string; details?: unknown },
): NextResponse<ApiErrorBody> {
  return NextResponse.json(
    {
      error: message,
      ...(options?.code ? { code: options.code } : {}),
      ...(options?.details !== undefined ? { details: options.details } : {}),
    },
    { status },
  );
}

export function jsonOk<T>(data: T, init?: { status?: number }): NextResponse<T> {
  return NextResponse.json(data, { status: init?.status ?? 200 });
}
