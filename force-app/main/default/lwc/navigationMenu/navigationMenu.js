import { LightningElement, track } from 'lwc';
import Img from '@salesforce/resourceUrl/geminiglobal';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigationMenu extends NavigationMixin(LightningElement) {
    logo = Img + '/geminiglobal/logo.png';
    @track categories = [
        {
            name: 'Textiles',
            subcategories: ['Curtains', 'Towels', 'Bedsheets', 'Blankets', 'Clothing']
        },
        {
            name: 'Handicrafts',
            subcategories: ['Wooden Products', 'Copper Products', 'Ceramic Products', 'Furniture Products']
        },
        {
            name: 'Paper Products',
            subcategories: ['Cups and Plates', 'Diary', 'Tissues']
        }
    ];

    handleSubCategoryClick(event) {
        const selectedCategory = event.target.closest('.nav-item').querySelector('.category-button').textContent;
        const selectedSubCategory = event.target.dataset.subcategory;

        // Navigate to the products page with query parameters
        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: 'ProductPage__c' // Replace with the API name of your products page
            },
            state: {
                category: selectedCategory,
                subcategory: selectedSubCategory
            }
        });
    }

    handleContactClick(event) {
        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: 'contact__c'
            }
        });
    }
}
