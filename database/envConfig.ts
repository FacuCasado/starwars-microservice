declare global {
    interface Window {
      MyNamespace: any;
    }
    namespace NodeJS {
      interface ProcessEnv {
        PORT: string;
        MONGO_URI: string;
      }
    }
  }
  
  export {};