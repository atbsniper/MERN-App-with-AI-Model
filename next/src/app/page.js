// page.js =


'use client'

import { useState, useEffect, useRef, useCallback } from 'react';

export default function Home() {
  const [result, setResult] = useState(null);
  const [ready, setReady] = useState(false);
  const worker = useRef(null);

  const onMessageReceived = useCallback((event) => {
    const { status, output, message } = event.data;

    switch (status) {
      case 'loading':
        setReady(false);
        break;
      case 'ready':
        setReady(true);
        break;
      case 'complete':
        setResult(output);
        setReady(true);
        break;
      case 'error':
        console.error('Error from worker:', message);
        setResult('Error generating code');
        setReady(true);
        break;
      default:
        break;
    }
  }, []);

  useEffect(() => {
    worker.current = new Worker(new URL('./worker.js', import.meta.url), { type: 'module' });

    worker.current.addEventListener('message', onMessageReceived);

    worker.current.postMessage({ status: 'initiate' });

    return () => {
      worker.current.removeEventListener('message', onMessageReceived);
      worker.current.terminate();
    };
  }, [onMessageReceived]);

  const generateCode = useCallback((text) => {
    if (worker.current) {
      setReady(false);
      worker.current.postMessage({ text, status: 'generate_code' });
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12">
      <h1 className="text-5xl font-bold mb-2 text-center">Transformers.js</h1>
      <h2 className="text-2xl mb-4 text-center">Next.js Code Generation</h2>

      <input
        className="w-full max-w-xs p-2 border border-gray-300 rounded text-black mb-4"
        type="text"
        placeholder="Enter prompt here"
        onChange={(e) => generateCode(e.target.value)}
      />

      {ready !== null && (
        <pre className="bg-gray-100 p-2 rounded text-black overflow-auto">
          { !ready ? 'Loading...' : <code>{result}</code> }
        </pre>
      )}
    </main>
  );
}
