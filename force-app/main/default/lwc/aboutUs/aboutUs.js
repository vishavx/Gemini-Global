import { LightningElement } from 'lwc';
import BImg from '@salesforce/resourceUrl/geminiglobal';
export default class AboutUs extends LightningElement {
    aboutImage = BImg + '/geminiglobal/about.jpg';
    price = BImg + '/geminiglobal/price.png';
    quality = BImg + '/geminiglobal/quality.png';
    shipping = BImg + '/geminiglobal/shipping.png';
    protection = BImg + '/geminiglobal/protection.png';
}