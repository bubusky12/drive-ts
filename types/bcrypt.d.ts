// types/bcrypt.d.ts
declare module 'bcrypt' {
    import { Hash } from 'crypto';
  
    export function compare(data: string, encrypted: string): Promise<boolean>;
    export function hash(data: string, saltRounds: number): Promise<string>;
  }
  