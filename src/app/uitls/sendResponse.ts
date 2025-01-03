import { Response } from 'express';

type TRecive<T> = {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
};
type TReturn<T> = {
  success: boolean;
  message: string;
  data: T;
};

const sendResponse = <T>(
  res: Response,
  data: TRecive<T>,
): Response<TReturn<T>> => {
  return res.status(data?.statusCode).json({
    success: data?.success,
    message: data?.message,
    statusCode: data?.statusCode,
    data: data?.data,
  });
};
export default sendResponse;
