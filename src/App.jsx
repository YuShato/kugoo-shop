import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import {
  About,
  Contacts,
  Home,
  Actions,
  Blog,
  Partnership,
  Products,
  Service,
  Shipping,
  TestDrive,
  Error,
  AuthWrapper
} from './pages'
import Footer from './components/footer'

const PageRoute = {
  main: {
    route: '/',
    text_ru: 'Главная'
  },
  about: {
    route: '/about',
    text_ru: 'О магазине'
  },
  actions: {
    route: '/actions',
    text_ru: 'Акции'
  },
  blog: {
    route: '/blog',
    text_ru: 'Блог'
  },
  partnership: {
    route: '/partnership',
    text_ru: 'Сотрудничество'
  },
  contacts: {
    route: '/contacts',
    text_ru: 'Контакты'
  },
  products: {
    route: '/products',
    text_ru: 'Каталог'
  },
  service: {
    route: '/service',
    text_ru: 'Сервис'
  },
  shipping: {
    route: '/shipping',
    text_ru: 'Доставка и оплата'
  },
  testDrive: {
    route: '/testDrive',
    text_ru: 'Тест-драйв'
  }
}

function App () {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route path={PageRoute.main.route} exact>
            <Home />
          </Route>
          <Route path={PageRoute.about.route} exact>
            <About />
          </Route>
          <Route path={PageRoute.actions.route} exact>
            <Actions />
          </Route>
          <Route path={PageRoute.blog.route} exact>
            <Blog />
          </Route>
          <Route path={PageRoute.contacts.route} exact>
            <Contacts />
          </Route>
          <Route path={PageRoute.partnership.route} exact>
            <Partnership />
          </Route>
          <Route path={PageRoute.products.route} exact>
            <Products />
          </Route>
          <Route path={PageRoute.service.route} exact>
            <Service />
          </Route>
          <Route path={PageRoute.shipping.route} exact>
            <Shipping />
          </Route>
          <Route path={PageRoute.testDrive.route} exact>
            <TestDrive />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthWrapper>
  )
}

export default App
