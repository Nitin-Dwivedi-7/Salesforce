import { LightningElement,track,api } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import ObjectAPI from '@salesforce/schema/DemoAPILocation__c';
import cityField from '@salesforce/schema/DemoAPILocation__c.City__c';
import stateField from '@salesforce/schema/DemoAPILocation__c.State__c';
import latitudeField from '@salesforce/schema/DemoAPILocation__c.latitude__c';
import longitudeField from '@salesforce/schema/DemoAPILocation__c.longitude__c';
import Typefield from '@salesforce/schema/DemoAPILocation__c.Type__c';
import createRecordMethod from '@salesforce/apex/GetLocationRestClass.createRecord';
import CombinedFiled from '@salesforce/schema/DemoAPILocation__c.CobinedAddress__c';

export default class GetLocation extends LightningElement {
    CombinedFil = CombinedFiled
    @api recordId
    @track ShowCombined = false;
    Type = Typefield;
    LongitudeValue
    LatitudeValue
    StateValue
    CityValuereal
    CityValue
    City = cityField;
    State = stateField
    latitude = latitudeField
    longitude = longitudeField
    ObjectApiName =ObjectAPI
    @track EnterCordinateSelected;
    @track EnterAddressSelect
    @track ShowButtons
    value ='Select one value'
    get options() {
        return [
            { label: 'Enter Address', value: 'Enter Address' },
            { label: 'Enter latitude and longitude', value: 'Enter latitude and longitude' },
        ];
    }

    handlePickListChange(event){
       
        this.ShowButtons= true;
        this.value = event.detail.value;
        this.Type = this.value;
        if(this.value == 'Enter Address'){
            this.EnterAddressSelect = true;
            this.EnterCordinateSelected = false
        }
        else{
            this.EnterAddressSelect = false;
            this.EnterCordinateSelected = true
        }
    }

    handleSubmit(event){
        event.preventDefault();
        console.log('submit is called ');
        console.log('Output '+JSON.stringify(event.detail.fields.City__c));

        // var kvData1 = {
        //     'Type':this.value,
        //     'State':this.State,
        //     'lat':this.latitude,
        //     'City':this.City,
        //     'long':this.longitude,
        // }

        // const KvData = new Map();

        // // Set Map Values
        // KvData.set("Type", this.value);
        // KvData.set("State", this.State);
        // KvData.set("City", this.City);
        // KvData.set("lat", this.latitude);
        // KvData.set("long", this.longitude);
        
        if(this.value=='Enter Address'){
            this.CityValuereal = event.detail.fields.City__c
            this.StateValue = event.detail.fields.State__c
            this.LatitudeValue = event.detail.fields.latitude__c
            this.LongitudeValue = event.detail.fields.longitude__c
        }else{
            this.CityValuereal = event.detail.fields.City__c
            this.StateValue  = event.detail.fields.State__c
            this.LatitudeValue = event.detail.fields.latitude__c
            this.LongitudeValue = event.detail.fields.longitude__c
        }
        
    
        createRecordMethod({TypeVar:this.value,State:this.StateValue,City:this.CityValuereal,lat:this.LatitudeValue,long1:this.LongitudeValue})
        .then(result=>{
            console.log('Success!! '+result)
            this.recordId = result;
            this.EnterAddressSelect = true;
            this.EnterCordinateSelected = true;
            this.ShowCombined = true;
        })
        .catch(err=>{
            alert('Error !! '+JSON.stringify(err));
        })
       
        
    }
}