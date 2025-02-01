import { LightningElement } from 'lwc';
import BImg from '@salesforce/resourceUrl/geminiglobal';

export default class HomePage extends LightningElement {

    imageUrl = BImg + '/geminiglobal/bgImage.jpg';
    

    connectedCallback() {
        
        this.template.host.style.setProperty('--background-image', `url(${this.imageUrl})`);
        this.setupIntersectionObserver();
        this.setupScrollAnimation();
    }

    setupIntersectionObserver() {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('shown')) {
                    entry.target.classList.add('show');
                    entry.target.classList.add('shown');
                }
            });
        }, options);

        // Wait for DOM to be ready
        setTimeout(() => {
            const elements = this.template.querySelectorAll('.animate');
            elements.forEach(element => {
                element.classList.add('hide');
                observer.observe(element);
            });
        }, 0);
    }
    setupScrollAnimation() {
        // Create an Intersection Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // Add 'show' class when element becomes visible
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, {
            threshold: 0.1 // Trigger when at least 10% of the element is visible
        });
    
        // Observe text_section elements
        const textSections = this.template.querySelectorAll('.text_section');
        textSections.forEach(section => {
            observer.observe(section);
        });
    }
    // data=[
    //     {
    //         id:1,
    //         image : BImg + '/geminiglobal/textile.jpg',
    //         text:'Textiles'
    //     },
    //     {
    //         id:2,
    //         image : BImg + '/geminiglobal/handicraft.jpg',
    //         text:'Handicrafts'
    //     },
    //     {
    //         id:3,
    //         image : BImg + '/geminiglobal/pp.jpg',
    //         text:'Paper Products'
    //     },
    // ]

    textile = BImg + '/geminiglobal/textile.png';
    handicraft = BImg + '/geminiglobal/handicraft.png';
    pp = BImg + '/geminiglobal/pp.png';


}