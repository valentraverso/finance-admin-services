// Define a custom error class
class CustomError extends Error {
    public statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
    }
}

/**
 * 
 * @param {string} message Message of the error
 * @param {number} statusCode Code of error
 */
export default function customError(message: string, statusCode: number) {
    throw new CustomError(message, statusCode);
}