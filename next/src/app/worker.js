// worker.js

import { AutoTokenizer, AutoModelForCausalLM } from '@xenova/transformers';

// Initialize tokenizer and model
const tokenizer = new AutoTokenizer();
const model = new AutoModelForCausalLM();

self.addEventListener('message', async (e) => {
  const { text, status } = e.data;

  if (status === 'initiate') {
    // Handle initialization message if needed
    self.postMessage({ status: 'loading' });
    // Example: Load models or prepare any setup needed
    await model.load(); // Ensure model is loaded before marking as ready
    self.postMessage({ status: 'ready' });
    return;
  }

  try {
    // Example: Handle different messages
    if (status === 'generate_code') {
      // Tokenize the input text
      const inputs = tokenizer.encode(text);
      
      // Generate code based on the input
      const sample = await model.generate(inputs, { max_length: 128 });
      const generatedText = tokenizer.decode(sample);

      // Send the generated code back to the main thread
      self.postMessage({ status: 'complete', output: generatedText });
    }
  } catch (error) {
    console.error('Error generating code:', error);
    self.postMessage({ status: 'error', message: 'Failed to generate code' });
  }
});
