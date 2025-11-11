import tokens from "./tokens.json";

export type ColorScale = Record<string, string>;

export interface DesignTokens {
  color: {
    primary: ColorScale;
    secondary: ColorScale;
    neutral: ColorScale;
    semantic: {
      success: string;
      warning: string;
      error: string;
      info: string;
    };
  };
  font: {
    family: { sans: string; mono: string };
    size: Record<string, string>;
    weight: Record<string, number>;
  };
  spacing: Record<string, string>;
  radius: Record<string, string>;
  shadow: Record<string, string>;
}

export const designTokens = tokens as DesignTokens;
export default designTokens;
