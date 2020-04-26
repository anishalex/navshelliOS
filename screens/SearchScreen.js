import React , {useState, useEffect} from 'react';
import {TouchableOpacity, TouchableNativeFeedback,ScrollView,View,Text, FlatList, TextInput, StyleSheet} from 'react-native';
import Header, { withTheme } from 'react-native-elements';
import HScrollBlock from '../components/HScrollBlock';
import HScrollBlockWithSettings from '../components/HScrollBlockWithSettings';
import NewsFeedScroller from '../components/NewsFeedScroller';
import NewsFeedCarousel from '../components/NewsFeedCarousel';
import Icon from 'react-native-vector-icons/FontAwesome';
import UserStatsPanel from '../components/UserStatsPanel';
import UserCard from '../components/UserCard';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import Modal from 'react-native-modal';
import NavigationStateContext from '../context/NavigationStateContext';
import { Input, Button } from 'react-native-elements'
import HiluxFormInput from '../components/HiluxFormInput';
import { Formik } from 'formik';
import { Pagination } from 'react-native-snap-carousel';
import { onChange } from 'react-native-reanimated';
import RNPickerSelect from 'react-native-picker-select';
import DynamicInput from './DynamicInput';
import SearchInput, { createFilter } from 'react-native-search-filter';


var jsonData = {
  "type": "linearlayout",

  "fields": [
    {
      "fieldID": "secondPartyNameArabic",
      "fieldType": "text",
      "required": "true",
      "fieldName": {
        "ar": "الاسم العربي للطرف الثاني",
        "en": "Arabic Name for Second Party (ar)"
      },
      "placeholder": {
        "ar": "",
        "en": ""
      },
      "errorMsg": {
        "ar": "",
        "en": ""
      },
      "auxInfo": {
        "acceptedFileTypes": "",
        "minLength": "",
        "maxLength": "",
        "type": "Date",
        "source": "api",
        "sourceDetails": "it/getAllEmployees"
      }
    },
    {
      "fieldID": "secondPartyNameEnglish",
      "fieldType": "text",
      "required": "true",
      "fieldName": {
        "ar": "الاسم الانجليزي للطرف الثاني",
        "en": "Name in English for Second Party"
      },
      "placeholder": {
        "ar": "",
        "en": ""
      },
      "errorMsg": {
        "ar": "",
        "en": ""
      },
      "auxInfo": {
        "acceptedFileTypes": "",
        "minLength": "",
        "maxLength": "",
        "type": "Date",
        "source": "api",
        "sourceDetails": "it/getAllEmployees"
      }
    },

]
}




function formikElementGenerator( inputJSON, handleChange){
    var itemstorender = [];        
    
    for(var i = 0; i<inputJSON.fields.length; i++) {      
        if(inputJSON.fields[i].fieldType == "text"){
            itemstorender = itemstorender.concat([
                <HiluxFormInput
                    name= {inputJSON.fields[i].fieldName.en}
                    onChangeText={handleChange(inputJSON.fields[i].fieldID)}                    
                    id = {inputJSON.fields[i].fieldID}
                    key = {inputJSON.fields[i].fieldID}
                />  
            ])
        }
    }


    
    return itemstorender;
}
  
  

function renderHiluxForm (inputJSON) {

// prepare a formik wrapper around them and we can inject omar's json components into that 
    return (
    <Formik  initialValues={{}} onSubmit={values => console.log("console", values)} onChange={values => console.log(values)} >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
            {formikElementGenerator(jsonData, handleChange)}
            <Button onPress={handleSubmit} title="Submit" />
        </View>
        
        )}
    </Formik>
    );
}    

/*

*/



 const DeleteScreen = props => {

  const KEYS_TO_FILTERS = ['product_name', 'supplier'];

  let filter_data ={ 'datablock' : [{
      "_id": {
        "$oid": "5968dd23fc13ae04d9000001"
      },
      "product_name": "sildenafil citrate",
      "supplier": "Wisozk Inc",
      "quantity": 261,
      "unit_cost": "$10.47"
    }, {
      "_id": {
        "$oid": "5968dd23fc13ae04d9000002"
      },
      "product_name": "Mountain Juniperus ashei",
      "supplier": "Keebler-Hilpert",
      "quantity": 292,
      "unit_cost": "$8.74"
    }, {
      "_id": {
        "$oid": "5968dd23fc13ae04d9000003"
      },
      "product_name": "Dextromathorphan HBr",
      "supplier": "Schmitt-Weissnat",
      "quantity": 211,
      "unit_cost": "$20.53"
    }]
  
  }
  


  const [searchTerm, setSearchTerm] = useState('');
  let [filteredDataset, setFilteredDataset] = useState(filter_data.datablock.filter(createFilter(searchTerm, KEYS_TO_FILTERS))    );
  

  useEffect(() => {    
      console.log('Search term is: ', searchTerm);
      console.log(filter_data);
      setFilteredDataset(filter_data.datablock.filter(createFilter(searchTerm, KEYS_TO_FILTERS)));     
    }, [searchTerm]);

  return(
    <View style={styles.container}>
    <SearchInput 
      onChangeText={(term) => { setSearchTerm(term) }} 
      style={styles.searchInput}
      placeholder="Type a message to search"
      />
      <ScrollView>
        {filteredDataset.map(dataElement => {
          return (
            <TouchableOpacity onPress={()=>alert(dataElement.product_name)} key={dataElement.product_name} style={styles.emailItem}>
              <View>
                <Text>{dataElement.product_name}</Text>
                <Text style={styles.emailSubject}>{dataElement.supplier}</Text>
              </View>
            </TouchableOpacity>
          )
        })}
      </ScrollView>

  </View>

  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start'
  },
  emailItem:{
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.3)',
    padding: 10
  },
  emailSubject: {
    color: 'rgba(0,0,0,0.5)'
  },
  searchInput:{
    padding: 10,
    borderColor: '#CCC',
    borderWidth: 1
  }
});
export default DeleteScreen;