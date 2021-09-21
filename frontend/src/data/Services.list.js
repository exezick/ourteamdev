import WebDevSVG from '../assets/svg/services/webdev.svg'
import WebDesignSVG from '../assets/svg/services/webdesign.svg'
import MobileAppDevSVG from '../assets/svg/services/mobileappdev.svg'
import ApiDevSVG from '../assets/svg/services/apidevelopment.svg'
import EcommerceSVG from '../assets/svg/services/ecommerce.svg'
import PaymentIntegrationSVG from '../assets/svg/services/paymentintegration.svg'
import SEOIntegrationSVG from '../assets/svg/services/seointegration.svg'

import WebDevIMG from '../../src/assets/img/services/services-web-dev.jpg'
import WebDesignIMG from '../../src/assets/img/services/services-web-design.jpeg'
import MobileAppIMG from '../../src/assets/img/services/services-mobile-app.jpg'
import apiIMG from '../../src/assets/img/services/services-api-dev.jpg'
import ecommerceIMG from '../../src/assets/img/services/services-ecommerce.jpg'
import paymentIMG from '../../src/assets/img/services/services-payment-integration.jpg'
import seoIMG from '../../src/assets/img/services/services-seo.jpg'

const ServicesList = [
  {
    id: 1,
    serviceName: 'Web Development',
    description:
      'Phasellus malesuada, velit non lacinia rutrum, velit mauris semper magna, nec volutpat ipsum elit non ex. Nam maximus quam id pellentesque dictum. Praesent urna erat, scelerisque non rhoncus ut, efficitur nec felis. In bibendum, mi finibus vulputate consequat, nisl sem consequat felis, ac hendrerit ligula ligula at nibh.',
    servicesIMG: WebDevSVG,
    servicesBgIMG: WebDevIMG,
  },
  {
    id: 2,
    serviceName: 'Web Design',
    description:
      'Donec urna ligula, sodales eu urna sit amet, volutpat accumsan metus. Fusce dictum arcu eget justo scelerisque, vitae tempor neque viverra. Cras accumsan sapien non lorem luctus finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque urna felis, auctor non volutpat sit amet, tincidunt ac augue.',
    servicesIMG: WebDesignSVG,
    servicesBgIMG: WebDesignIMG,
  },
  {
    id: 3,
    serviceName: 'Mobile App Development',
    description:
      'Morbi erat lectus, accumsan et metus ut, condimentum ultricies tellus. Nam id justo quis elit vulputate consequat non ac metus. Fusce quis imperdiet dolor. Nulla in lacus ultrices massa vulputate eleifend. Vestibulum eget dolor quis nisi elementum feugiat.',
    servicesIMG: MobileAppDevSVG,
    servicesBgIMG: MobileAppIMG,
  },
  {
    id: 4,
    serviceName: 'Api Development',
    description:
      'Cras a metus porta enim scelerisque dictum sit amet malesuada felis. Ut auctor pulvinar odio, faucibus interdum mi tincidunt sagittis. Duis turpis lorem, dictum id ornare ac, cursus rhoncus nisi. Etiam porttitor ipsum ipsum, quis fermentum augue tempus ut. Praesent luctus nec lectus ac fermentum.',
    servicesIMG: ApiDevSVG,
    servicesBgIMG: apiIMG,
  },
  {
    id: 5,
    serviceName: 'Ecommerce',
    description:
      'Aenean vel quam scelerisque, lacinia nisi at, aliquet sem. Etiam cursus interdum consequat. Aenean maximus gravida eros, nec egestas dui lacinia in. Vivamus efficitur dignissim placerat. Duis eu velit et magna tempor sodales. Curabitur massa libero, auctor et convallis quis, dignissim at massa.',
    servicesIMG: EcommerceSVG,
    servicesBgIMG: ecommerceIMG,
  },
  {
    id: 6,
    serviceName: 'Payment Integration',
    description:
      'Nam pulvinar lacus a augue bibendum sodales. Nunc eget lectus faucibus, aliquam dolor vitae, cursus eros. Integer dictum nisi mi, eget congue massa congue eget. Sed euismod euismod venenatis. In a eleifend felis.',
    servicesIMG: PaymentIntegrationSVG,
    servicesBgIMG: paymentIMG,
  },
  {
    id: 7,
    serviceName: 'SEO Integration',
    description:
      'Nam sit amet pharetra nunc. Pellentesque rhoncus pulvinar quam sit amet interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam vehicula eleifend tristique.',
    servicesIMG: SEOIntegrationSVG,
    servicesBgIMG: seoIMG,
  },
]

export default ServicesList
