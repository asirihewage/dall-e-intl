/**
 *
 * dall-e-intl
 *
 * See https://github.com/asirihewage/dall-e-intl
 */

import DallEIntl from './index.js';
import dotenv from "dotenv";
dotenv.config();

const text = "ChatGPT ගැන කියන්න"
const DALL_E_API_KEY = process.env.DALL_E_API_KEY
const lang = 'si';

const opts = {
    model: "image-alpha-001",
    prompt: text,
    num_images: 1,
    size: "1024x1024",
    response_format: "url",
};


DallEIntl(text, DALL_E_API_KEY, opts, lang).then((res) => {
    console.log("Demo result", res);
}).catch((er)=> {
    console.log("Demo error", er);
});