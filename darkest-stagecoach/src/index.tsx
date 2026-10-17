import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import { loadClassModIndex } from './data/ClassModIndex'

const root = document.getElementById('root') as HTMLElement

// index.html shows a loading screen inside #root until the data is loaded
loadClassModIndex()
    .then(() =>
        createRoot(root).render(
            <React.StrictMode>
                <App />
            </React.StrictMode>
        )
    )
    .catch(error => {
        console.error(error)
        const message = root.querySelector('.loading-message')
        if (message) {
            message.textContent =
                'Failed to load the class data. Please try reloading the page.'
        }
        root.querySelector('.loading')?.classList.add('loading-failed')
    })
