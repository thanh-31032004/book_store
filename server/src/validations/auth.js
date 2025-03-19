import Joi from 'joi';

export const registerValidation = Joi.object({
    username: Joi.string().min(6).required().messages({
        'any.required': 'Username is required',
        'string.min': 'Username must be at least 6 characters',
    }),
    email: Joi.string().required().email().messages({
        'any.required': 'Email is required',
        'string.email': 'Email must be a valid email',
    }),
    password: Joi.string().min(6).required().messages({
        'any.required': 'Password is required',
        'string.min': 'Password must be at least 6 characters',
    }),
    role: Joi.string()
}).options({ abortEarly: false });

export const loginValidation = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required()
}).options({ abortEarly: false });