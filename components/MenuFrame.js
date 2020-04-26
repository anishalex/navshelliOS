import React , {useState, useEffect} from 'react';
import {TouchableOpacity,ScrollView,View,Text, FlatList, TextInput, StyleSheet, Button} from 'react-native';
import {ButtonGroup} from 'react-native-elements';
import MenuTabStrip from '../components/MenuTabStrip';
import MenuTabEdge from './MenuTabEdge';
import MainMenuContentView from './MainMenuContentView';
import ShadowView from 'react-native-simple-shadow-view';
import MenuStateContext, { MenuStateProvider } from '../context/MenuStateContext';
//Authorization





const menuContentJSON = {
  
  "general": [
    {
      "sales": {
        meta : [
          {id: 'sales'},
          {iconName: 'exclamation'},
          {label_en: 'Sales'},
          {label_ar: 'مصطنع'},
          {tabPos: 'start'},
          {tabActive:true},
        ],
        tab_data : [
           {key:"initial", label_en:"Initial RE unit",label_ar: 'مصطنع', icon:"init" },
           {key:"final", label_en:"Final RE unit",label_ar: 'مصطنع', icon:"init" },
           {key:"land", label_en:"Land",label_ar: 'مصطنع', icon:"init" },
           {key:"splitmerge", label_en:"Split / Merge",label_ar: 'مصطنع', icon:"init" },
           {key:"lorem", label_en:"Lorem",label_ar: 'مصطنع', icon:"init" },
           {key:"ipsum", label_en:"Ipsum",label_ar: 'مصطنع', icon:"init" },        
  
        ],
      },

      "registration": {
        meta : [
          {id: 'registration'},
          {iconName: 'undo'},
          {label_en: 'Registration'},
          {label_ar: 'مصطنع'},
          {tabPos: 'mid'},
          {tabActive:false},
        ],
        tab_data : [
           {key:"initial", label_en:"Reg RE unit",label_ar: 'مصطنع', icon:"init" },
           {key:"final", label_en:"DeReg RE unit",label_ar: 'مصطنع', icon:"init" },
           {key:"land", label_en:"Reg Land",label_ar: 'مصطنع', icon:"init" },
           {key:"splitmerge", label_en:"Other Reg Opt",label_ar: 'مصطنع', icon:"init" },
           {key:"lorem", label_en:"Lorem",label_ar: 'مصطنع', icon:"init" },
           {key:"ipsum", label_en:"Ipsum",label_ar: 'مصطنع', icon:"init" },        
  
        ],

      },

      "mortgages": {
        meta : [
          {id: 'sales'},
          {iconName: 'exclamation'},
          {label_en: 'Sales'},
          {label_ar: 'مصطنع'},
          {tabPos: 'start'},
          {tabActive:true},
        ],
        tab_data : [
           {key:"initial", label_en:"Initial RE unit",label_ar: 'مصطنع', icon:"init" },
           {key:"final", label_en:"Final RE unit",label_ar: 'مصطنع', icon:"init" },
           {key:"land", label_en:"Land",label_ar: 'مصطنع', icon:"init" },
           {key:"splitmerge", label_en:"Split / Merge",label_ar: 'مصطنع', icon:"init" },
           {key:"lorem", label_en:"Lorem",label_ar: 'مصطنع', icon:"init" },
           {key:"ipsum", label_en:"Ipsum",label_ar: 'مصطنع', icon:"init" },        
  
        ],

      },


    }
  
  ],

  "services": [
    {
      "sales": {
        meta : [
          {id: 'sales'},
          {iconName: 'exclamation'},
          {label_en: 'Sales'},
          {label_ar: 'مصطنع'},
          {tabPos: 'start'},
          {tabActive:true},
        ],
        tab_data : [
           {key:"initial", label_en:"Initial RE unit",label_ar: 'مصطنع', icon:"init" },
           {key:"final", label_en:"Final RE unit",label_ar: 'مصطنع', icon:"init" },
           {key:"land", label_en:"Land",label_ar: 'مصطنع', icon:"init" },
           {key:"splitmerge", label_en:"Split / Merge",label_ar: 'مصطنع', icon:"init" },
           {key:"lorem", label_en:"Lorem",label_ar: 'مصطنع', icon:"init" },
           {key:"ipsum", label_en:"Ipsum",label_ar: 'مصطنع', icon:"init" },        
  
        ],
      },

      "registration": {
        meta : [
          {id: 'registration'},
          {iconName: 'undo'},
          {label_en: 'Registration'},
          {label_ar: 'مصطنع'},
          {tabPos: 'mid'},
          {tabActive:false},
        ],
        tab_data : [
           {key:"initial", label_en:"Reg RE unit",label_ar: 'مصطنع', icon:"init" },
           {key:"final", label_en:"DeReg RE unit",label_ar: 'مصطنع', icon:"init" },
           {key:"land", label_en:"Reg Land",label_ar: 'مصطنع', icon:"init" },
           {key:"splitmerge", label_en:"Other Reg Opt",label_ar: 'مصطنع', icon:"init" },
           {key:"lorem", label_en:"Lorem",label_ar: 'مصطنع', icon:"init" },
           {key:"ipsum", label_en:"Ipsum",label_ar: 'مصطنع', icon:"init" },        
  
        ],

      },

      "mortgages": {
        meta : [
          {id: 'sales'},
          {iconName: 'exclamation'},
          {label_en: 'Sales'},
          {label_ar: 'مصطنع'},
          {tabPos: 'start'},
          {tabActive:true},
        ],
        tab_data : [
           {key:"initial", label_en:"Initial RE unit",label_ar: 'مصطنع', icon:"init" },
           {key:"final", label_en:"Final RE unit",label_ar: 'مصطنع', icon:"init" },
           {key:"land", label_en:"Land",label_ar: 'مصطنع', icon:"init" },
           {key:"splitmerge", label_en:"Split / Merge",label_ar: 'مصطنع', icon:"init" },
           {key:"lorem", label_en:"Lorem",label_ar: 'مصطنع', icon:"init" },
           {key:"ipsum", label_en:"Ipsum",label_ar: 'مصطنع', icon:"init" },        
  
        ],

      },


    }
  
  ],
  "services": [
    {
      "sales": {
        meta : [
          {id: 'sales'},
          {iconName: 'exclamation'},
          {label_en: 'Sales'},
          {label_ar: 'مصطنع'},
          {tabPos: 'start'},
          {tabActive:true},
        ],
        tab_data : [
           {key:"initial", label_en:"Initial RE unit",label_ar: 'مصطنع', icon:"init" },
           {key:"final", label_en:"Final RE unit",label_ar: 'مصطنع', icon:"init" },
           {key:"land", label_en:"Land",label_ar: 'مصطنع', icon:"init" },
           {key:"splitmerge", label_en:"Split / Merge",label_ar: 'مصطنع', icon:"init" },
           {key:"lorem", label_en:"Lorem",label_ar: 'مصطنع', icon:"init" },
           {key:"ipsum", label_en:"Ipsum",label_ar: 'مصطنع', icon:"init" },        
  
        ],
      },

      "registration": {
        meta : [
          {id: 'registration'},
          {iconName: 'undo'},
          {label_en: 'Registration'},
          {label_ar: 'مصطنع'},
          {tabPos: 'mid'},
          {tabActive:false},
        ],
        tab_data : [
           {key:"initial", label_en:"Reg RE unit",label_ar: 'مصطنع', icon:"init" },
           {key:"final", label_en:"DeReg RE unit",label_ar: 'مصطنع', icon:"init" },
           {key:"land", label_en:"Reg Land",label_ar: 'مصطنع', icon:"init" },
           {key:"splitmerge", label_en:"Other Reg Opt",label_ar: 'مصطنع', icon:"init" },
           {key:"lorem", label_en:"Lorem",label_ar: 'مصطنع', icon:"init" },
           {key:"ipsum", label_en:"Ipsum",label_ar: 'مصطنع', icon:"init" },        
  
        ],

      },

      "mortgages": {
        meta : [
          {id: 'mortgages'},
          {iconName: 'exclamation'},
          {label_en: 'Sales'},
          {label_ar: 'مصطنع'},
          {tabPos: 'start'},
          {tabActive:true},
        ],
        tab_data : [
           {key:"initial", label_en:"Initial RE unit",label_ar: 'مصطنع', icon:"init" },
           {key:"final", label_en:"Final RE unit",label_ar: 'مصطنع', icon:"init" },
           {key:"land", label_en:"Land",label_ar: 'مصطنع', icon:"init" },
           {key:"splitmerge", label_en:"Split / Merge",label_ar: 'مصطنع', icon:"init" },
           {key:"lorem", label_en:"Lorem",label_ar: 'مصطنع', icon:"init" },
           {key:"ipsum", label_en:"Ipsum",label_ar: 'مصطنع', icon:"init" },        
  
        ],

      },


    }
  
  ]



}
    



const menuTabContentList = [
  {
    id: 'sales',
    iconName: 'exclamation',
    label: 'Sales',
    tabPos: 'start',
    tabActive:true,
  },
  {
      id: 'registration',
      iconName: 'undo',
      label: 'Registration',
      tabPos: 'mid',
      tabActive:false,
    },
    {
      id: 'mortgages',
      iconName: 'bullhorn',
      label: 'Mortgages',
      tabPos: 'end',
      tabActive:false,
  },


];


function groupExtractor(inputJSON) {
  let groupNames = Object.keys(inputJSON);
  console.log("keys: ", groupNames);
  return groupNames;
}

function tabExtractor(inputJSON, groupname){

  groupname.forEach( (item, index) =>
    console.log(item, "is at" , index)
  ) 


}


 const MenuFrame = props => {

    const [counter, setCounter]  = useState(0);
    const [mainMenuTabState, setMainMenuTabState]  = useState('registration');
    const [fullTabHeader, setFullTabHeader] = useState(menuTabContentList);

    const [selectedMenuGroup, setSelectedMenuGroup] = useState(0);
    
    function updateIndex (selectedIndex) {
        setSelectedMenuGroup(selectedIndex);
      }


      function updateAllTabStates(selectedTab){
        
        //console.log(counter,"***********************")
        for(let i=0;i<menuTabContentList.length;i++){
          
          if (menuTabContentList[i].id == selectedTab){
            menuTabContentList[i].tabActive = true;
            //console.log("target is :", selectedTab,"updating ", menuTabContentList[i].id, " to true")
          } else {
            menuTabContentList[i].tabActive = false;
            //console.log("target is :", selectedTab,"setting ", menuTabContentList[i].id, " to false")
          }      
        }
        //console.log(counter,"^^^^^^^^^^^^^^^^^^^^^^^^^");
        setFullTabHeader(menuTabContentList);
  
      }

    function updateSelectedTab(selectedTab) { 
      
      setCounter(counter+1);
      //console.log(counter,"-----------------------------")     
      //console.log(selectedTab, " was clicked")
      setMainMenuTabState(selectedTab);            
      updateAllTabStates(selectedTab);
                
    }

    

    
    useEffect(() => {          
      let groupNames = groupExtractor(menuContentJSON);
      tabExtractor(menuContentJSON,groupNames);

       console.log('menu tab effect hook triggered - counter is : ', counter )    
    }, [fullTabHeader] );


    const buttons = ['General', 'Services', 'Contact Us'];

    return(

      <MenuStateProvider>
            <View style={styles.menuFrameMasterContainer}>
              <View style={styles.menuFrameInnerContainer}>
                <View style={styles.menuFrameTopButtonGroupContainer}> 
                      <ButtonGroup
                          onPress={updateIndex}                
                          selectedIndex={selectedMenuGroup}
                          buttons={buttons}
                          containerStyle={{flex:1,padding:5, backgroundColor:'transparent', borderColor:'transparent' }}                
                          innerBorderStyle={{color:'transparent'}}
                          buttonStyle={styles.buttonStyle}
                          selectedButtonStyle={styles.selectedButtonStyle}
                      />
                  </View>
                  <View style={styles.menuFrameTopTabContainer}>             
                      <MenuTabStrip content={menuTabContentList} tabClickHook={updateSelectedTab} />            
                  </View>
                  <View style={styles.menuFrameBodyConainer}>
                    <MainMenuContentView/>
                  </View>
              </View>
            </View>
      </MenuStateProvider>

    );
  
};

const styles = StyleSheet.create({
  menuFrameMasterContainer: {    
    flex:1,
    flexDirection:'column',
    backgroundColor: '#f2f3f5',
    borderRadius:20,
  },
  menuFrameInnerContainer: {    
    flex:1,
    marginHorizontal:10,  
    borderRadius:20,
    backgroundColor: 'transparent',
  },
  menuFrameTopButtonGroupContainer:{
    flex:0.08,
    paddingBottom:5,
    flexDirection:'row',
    backgroundColor: 'transparent',
  },
  menuFrameTopTabContainer: {
    flex:0.10,    
    elevation:5,
    justifyContent:'space-evenly',    
    backgroundColor: 'transparent',        
  },
  menuFrameBodyConainer:{
    flex:0.77,    
    elevation:5,
    backgroundColor: 'white',
    marginHorizontal: 0,

  },

  selectedButtonStyle:{
      marginHorizontal:3,
      backgroundColor:'dodgerblue',
      borderRadius:5,
      marginHorizontal:3
  },
  buttonStyle:{

    marginHorizontal:3,
    backgroundColor:'white',
    borderRadius:5,
    marginHorizontal:3
},
  
  tabViewMasterContainer: {
    flex:1,
    flexDirection:'column',    
  },
  vertTabStrip:{            
    flex:0.14,
    marginRight:-10,        
  },
  viewContents:{
    elevation:0,
    margin:3,
    borderColor: 'green',
    backgroundColor:'white',      
    flex:0.8
  }


});
export default MenuFrame;