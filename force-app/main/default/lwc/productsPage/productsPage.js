import { LightningElement, wire, track } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import getFilteredProducts from '@salesforce/apex/ProductController.getFilteredProducts'; // Replace with your Apex class

export default class ProductsPage extends LightningElement {
    @track category;
    @track subcategory;
    @track products;
    @track filteredProducts = [];

    isModalOpen = false;
    selectedProduct = null;

    
    get isSingleProduct() {
        return this.formattedProducts?.length === 1 || this.formattedProducts?.length === 2;
    }

    get productCardClass() {
        const baseClasses = 'slds-col slds-size_12-of-12 slds-medium-size_4-of-12 slds-large-size_4-of-12 slds-p-bottom_large';
        return this.isSingleProduct ? `${baseClasses} single-product` : baseClasses;
    }
    
    @wire(CurrentPageReference)
    getPageReference(pageRef) {
        if (pageRef) {
            this.category = pageRef.state.category || null;
            this.subcategory = pageRef.state.subcategory || null;

            // Fetch filtered products
            if (this.category && this.subcategory) {
                this.fetchProducts();
            }
        }
    }

    fetchProducts() {
        getFilteredProducts({ category: this.category, subcategory: this.subcategory })
            .then((result) => {
                this.products = result;
                this.filteredProducts = [...result]; // Store products in filteredProducts array
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
                this.filteredProducts = []; // Clear array on error
            });
    }
    handleProductClick(event) {
        const productId = event.currentTarget.dataset.id;
        this.selectedProduct = this.filteredProducts.find(product => product.Id === productId);
        this.isModalOpen = true;
    }

    closeModal() {
        this.isModalOpen = false;
    }
    get formattedProducts() {
        if (this.products) {
            return this.products.map(product => ({
                ...product,
                shortDescription: this.truncateDescription(product.Description__c)
            }));
        }
        return [];
    }
    truncateDescription(description) {
        if (!description) return '';
        const words = description.split(' ');
        if (words.length > 15) {
            return words.slice(0, 15).join(' ') + '...';
        }
        return description;
    }
    
    get hasNoProducts() {
        return !this.formattedProducts || this.formattedProducts.length === 0;
    }
}
