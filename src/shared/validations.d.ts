declare function isLengthGreaterThan(value: string | any[], length: number): boolean;
declare function isLengthInRange(value: string | any[], min: number, max: number): boolean;
declare function isValidEmail(value: string): boolean;
declare function isMatch(value1: string | number, value2: string | number): boolean;
declare function isValidPassword(value: string, re: RegExp): boolean;
declare function isValidNumber(value: string, re: RegExp): boolean;
declare const validations: {
    isLengthGreaterThan: typeof isLengthGreaterThan;
    isLengthInRange: typeof isLengthInRange;
    isValidEmail: typeof isValidEmail;
    isMatch: typeof isMatch;
    isValidPassword: typeof isValidPassword;
    isValidNumber: typeof isValidNumber;
};
export default validations;
