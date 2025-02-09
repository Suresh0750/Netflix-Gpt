import OpenAI from 'openai';
import { OPENAI_KEY } from './constants'; 



const openai = new OpenAI({
  apiKey: OPENAI_KEY, 
  dangerouslyAllowBrowser : true,
  maxRetries: 0, // * off the retrie or making the api one time only 
});



export default openai;