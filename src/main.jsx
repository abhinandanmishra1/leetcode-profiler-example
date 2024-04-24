import './index.css'

import App from './App.jsx'
import { LeetcodeProfilerProvider } from 'leetcode-profiler'
import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <LeetcodeProfilerProvider>
      <App />
    </LeetcodeProfilerProvider>
  </React.StrictMode>,
)
