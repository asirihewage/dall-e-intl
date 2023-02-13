# chatGPT-intl
![Version](https://img.shields.io/github/package-json/v/asirihewage/chatgpt-intl)
![Package Size](https://img.shields.io/github/languages/code-size/asirihewage/chatGPT-intl)
### Enhanced ChatGPT Wrapper for Internationalization - NodeJS
This NodeJS module acts as a wrapper for ChatGPT API and will help you to use ChatGPT in your own language.
![Logo](res/logo.jpg)

## Installation

Install chatgpt-intl via npm : https://www.npmjs.com/package/chatgpt-intl

```bash
  npm i chatgpt-intl
```

## Usage/Examples
First, you have to obtain your API key from OPENAI, then you can use it here.
```javascript
import ChatGPTIntl from 'chatgpt-intl';
import dotenv from "dotenv";
dotenv.config();

const text = "ChatGPT ගැන කියන්න"
const openAiKey = process.env.openAiKey
const lang = 'si';
const opts = {
    model: "image-alpha-001",
    prompt: text,
    num_images: 1,
    size: "1024x1024",
    response_format: "url",
};


ChatGPTIntl(text, DALL_E_API_KEY, opts, lang).then((res) => {
    console.log(res);
}).catch((er)=> {
    console.log(er);
});
```

## API
text - Type: string (The text to be translated)

openAiKey - Type: string (API Key obtained from OpenAI Developer Account)

opts - Type: object (OpenAI Language Model and hyperparameters)

lang - Type: string ( Must be `auto` or one of the codes (not case sensitive) contained in [SUPPORTED_LANGUAGES.md](https://github.com/asirihewage/chatGPT-intl/blob/main/SUPPORTED_LANGUAGES.md).)

## Features

- Use ChatGPT API in your own language
- Ability to customize the chatGPT model
- Supports more than 50 languages

## Limitations

- Does not support for syntax and codes
- Does not support larger text inputs

## Language Support
Supported language codes contained in [SUPPORTED_LANGUAGES.md](https://github.com/asirihewage/chatGPT-intl/blob/main/SUPPORTED_LANGUAGES.md)

## Demo
```shell
npm run demo
```
Sample App I created.
![Demo](res/demo.jpg)

## Authors

- [@asirihewage](https://github.com/asirihewage)

## Contributions

- Issues and feature updates are welcome.


## License

[MIT](https://choosealicense.com/licenses/mit/)
