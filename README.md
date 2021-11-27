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

Below Some Screen Shots of UI :-

![Aura_Account(opp,con)1](https://user-images.githubusercontent.com/61201056/143672145-9f92d12f-aa67-46cc-bc5a-96daecb3ca2d.PNG)
![Aura_Account(opp,con)2](https://user-images.githubusercontent.com/61201056/143672148-ab445084-e393-4e4a-ba09-8cac01c13488.PNG)
![Aura_Account(opp,con)3](https://user-images.githubusercontent.com/61201056/143672150-3df415fc-e123-4be0-b0f0-d333eca6ab16.PNG)
![Aura_Account(opp,con)4](https://user-images.githubusercontent.com/61201056/143672151-88a17618-be07-4994-bce8-bce14f51b77d.PNG)
![Aura_Account(opp,con)5](https://user-images.githubusercontent.com/61201056/143672152-e0ec62ac-a033-4ed8-b7d6-acacf18275b5.PNG)
