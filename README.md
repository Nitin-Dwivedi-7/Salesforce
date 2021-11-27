# Salesforce
This repository contain an Aura Application for Account object.
This Application shows multiple Account records and if you click on any account then it'll show specific opportunity and contact records in a pop up window.

Component map :- 
                                                                        |--> Account_opportunity_list  |    
          Account_App -->  Account_list  --> Account_list_tabs_screen --|                              | --> Account_ErrorCmp
                               |                                        |--> Account_contact_list      |
                          Account_listController

Here Account_list is the main component which communicate with all the component and its controller Account_listConroller callback the Apex method which fetchs
the Account Record from SF and based on Name of each account it fetchs specific opportunity and contact records  
