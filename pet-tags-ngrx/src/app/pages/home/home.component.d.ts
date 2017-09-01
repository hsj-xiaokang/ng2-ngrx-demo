export interface GreetingSettings {
  greeting: string;
  duration?: number;
  color?: string;
}

export declare function greet(callback?: () => GreetingSettings): GreetingSettings;
export declare function render(callback?: () => void): string;
