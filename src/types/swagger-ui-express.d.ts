declare module 'swagger-ui-express' {
    import { RequestHandler } from "express";
  
    export function setup(swaggerDoc: any, options?: any, customCss?: string, customJs?: string, customFavIcon?: string, swaggerUrl?: string): RequestHandler;
    export const serve: RequestHandler[];
  }
  