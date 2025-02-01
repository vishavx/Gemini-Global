import { LightningElement } from 'lwc';
import Img from '@salesforce/resourceUrl/geminiglobal';
import { NavigationMixin } from 'lightning/navigation';

export default class QuickLinks extends NavigationMixin(LightningElement) {

    curtain = Img + '/geminiglobal/curtain.jpg';
    towel = Img + '/geminiglobal/towel.jpg';
    bedsheet = Img + '/geminiglobal/bedsheet.jpg';
    blanket = Img + '/geminiglobal/blanket.jpg';
    clothing = Img + '/geminiglobal/tshirt.jpg';

    woodenp = Img + '/geminiglobal/woodenp.jpg';
    copperp = Img + '/geminiglobal/copperp.jpg';
    ceramicp = Img + '/geminiglobal/ceramicp.jpg';
    furniturep = Img + '/geminiglobal/furniturep.jpg';

    cup = Img + '/geminiglobal/cup.jpg';
    diary = Img + '/geminiglobal/diary.jpg';
    tissue = Img + '/geminiglobal/tissue.jpg';

    handleImageClick(event) {
        const category = event.target.dataset.category;
        const subcategory = event.target.dataset.subcategory;

        // Navigate to the product page with category and subcategory
        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: 'ProductPage__c' // Replace with the API name of your products page
            },
            state: {
                category: category,
                subcategory: subcategory
            }
        });
    }



}