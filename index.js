/**
 *
 * dall-e-intl
 *
 * See https://github.com/asirihewage/dall-e-intl
 */
import { Translator } from './translator.js';
import { isSupported } from './languages.js';
import axios from "axios";

const ChatGPTIntl = async (text, DALL_E_API_KEY, opts, lang) => {
    opts = JSON.parse(JSON.stringify(opts));
    let errors = [
        'The language «[lang]» is not supported',
        'One or more options missing',
        'Something went wrong',
    ];

    const generateImage = async (translateIn, opts, DALL_E_API_KEY) => {
        try {
            const model = "image-alpha-001";
            const response = await axios.post("https://api.openai.com/v1/images/generations", {
                model,
                prompt: translateIn,
                num_images: opts.num_images,
                size: opts.size,
                response_format: opts.response_format,
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${DALL_E_API_KEY}`,
                },
            });

            return response.data.data[0].url;
        } catch (error) {
            console.error(error);
        }
    };

    const ChatGPT_Intl = (translateIn, opts, DALL_E_API_KEY) => {
        return new Promise(async (resolve, reject) => {
                return await Translator(text, { to: "en" }).then( async (translateIn) => {
                    await generateImage(translateIn, opts, DALL_E_API_KEY);
                }).then( async (response) => {
                    return await Translator(response.data.choices[0].text, {to: lang})
                }).then((translateOut) => {
                    return resolve({response: translateOut.text, query: text, lang: lang});
                }).catch( er => {
                    return reject({error: er})
                });
            }
        );
    };

    if (text && DALL_E_API_KEY && lang && opts && opts.model && opts.response_format && opts.num_images && opts.size) {
        if(!isSupported(lang)){
            return Promise.reject({error: errors[0].replace('[lang]', lang)});
        }else {
            return ChatGPT_Intl(text, opts, DALL_E_API_KEY);
        }
    }else {
        return Promise.reject({
            error: errors[1],
            data: {
                opts: !!opts ? {
                    model: !!opts.model,
                    response_format: !!opts.response_format,
                    num_images: !!opts.num_images,
                    size: !!opts.size
                } : false ,
                text: !!text ,
                DALL_E_API_KEY : !!DALL_E_API_KEY ,
                lang: !!lang
            }
        });
    }

}

export default ChatGPTIntl;