import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import Layout from './components/Layout/Layout'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
   <HashRouter>
      <Provider store={store}>
         <Layout>
            <App />
         </Layout>
      </Provider>
   </HashRouter>
)
