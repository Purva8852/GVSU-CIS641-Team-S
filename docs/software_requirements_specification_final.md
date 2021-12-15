
# Overview:
The software requirement specification document outlines the requirements of Team-S project, a ride-sharing application among university students, faculty members and GVSU staff. This document explains about the (ShareRide) App features, traceability, interfaces and designs logics in detail.


# Software Requirements
This section of the document focuses on what the system shall do and what all services can be available to users of ShareRide application. 
Functional requirements section covers details of user requirements.
Non-functional requirement section provides a user expectation and applies to whole system.

## Functional Requirements
### User Login:
| ID | Requirement |
| -------------| ---------- |
| FR1 | GVSU student, staff and faculty members shall be allowed to use this application. |
| FR2 | If existing user enters wrong credentials, error  message shall be displayed to user. |
| FR3 | Forgot password functionality shall be added inside login page. |
| FR4 | User shall receive temporary password to login into the application using forgot password functionality. |
| FR5 | Help button shall answer user’s basic questions. |
| FR6 |Upon completion of application loading, the welcome screen shall display login and Sign up buttons.|

### Sign Up/User Registration:
| ID | Requirement |
| -------------| ---------- |
| FR1 | Only GVSU staff, student or faculty member shall allow for new registration.|
| FR2 | This shall include user personal details: Name, Email, Address and mandatory and Phone, Vehicle details are optional.|
| FR3 | Register me button shall be included. When user clicks on it, a verification link shall be sent to user.|
| FR4 | Sign up screen shall include login screen navigation.|
| FR5 | After successfully registering, user shall be able to login immediately.|

### Edit Profile
| ID | Requirement |
| -------------| ---------- |
| FR1 | User shall have access to edit profile where he can modify/change address, vehicle details, password and phone number.|
| FR2 | On clicking onto submit button, the new details shall get updated in database.|
| FR3 | If password is changed, user shall come out of application and login again with new created password.|
| FR4 | If user does not want to modify any details, this page shall include navigator to post screen/main screen.|
| FR5 | User shall not have access to modify email address and name field.|

### Post/Comment
| ID | Requirement |
| -------------|---------- |
| FR1 | Post screen shall be main screen of application.|
| FR2 | User shall have access to create new post from this screen.|
| FR3 | Logged in user shall have access to see all the previous post and comment on any post.|
| FR4 | If ride time for any post is less than current time, the post shall get delete automatically.|
| FR5 | User shall have access to delete only his post.|
| FR6 | Admin shall have access to delete all post if found irrelevant.|
| FR7 |  While creating post, user shall have access to choose from rider or passenger, enter ride to and from location, and time of ride with available seats and phone being optional.|

### Operational Requirements:
| ID | Requirement |
| -------------| ---------- | 
| FR1 | After successful login or registering, user shall have access to post screen (main board screen)|
| FR2 | Any user shall be allowed to comment on any post.|
| FR3 | After logout user shall have option to login again.|
| FR4 | MyProfile screen shall include user details like Name, phone, address, vehicle details.|
| FR5 | Once user has logged in, the application shall store his/her information for using it next time.|
| FR6 | Logout screen shall have login screen button.|
    
## Non-Functional Requirements
### Performance:
| ID | Requirement |
| -------------| ---------- |
| FR1 | Application shall handle maximum number of 30K student at a time.|
| FR2 | Performace of the application shall be monitored using AWS cloudwatch.|
| FR3 | After clicking onto reset password button temporary password shall be sent with a latency of no greater than 1 hour.|
| FR4 | Each login and registration request shall be processed in maximum of 10 seconds.|
| FR5 | App shall take no longer than 3 seconds to load when user tries to open it.|
| FR6 | All the drawer navigation shall load their respective screens not greater than 3 seconds.|

### Availability:
| ID | Requirement |
| -------------| ---------- |
| FR1 | Application shall be up and running all the time 24*7 all the days.|
| FR2 | Recent or only upcoming post shall be available for avoid storing large data on database.|
| FR3 | Customer support shall be provided if user faces any issue accessing the application.|
| FR4 | Temporary password sent to user shall be valid for 4 hours for successful login.|
| FR5 | After successful login, users email address shall be stored in AsyncStorage.|

### Usability:
| ID | Requirement |
| -------------| ---------- |
| FR1 | Each application UI screen shall be user friendly and in easily understanble format or readable formate.|
| FR2 | The user shall experience an aesthetic and minimal design.|
| FR3 | The application shall consist of standard visual experience for all users.|
| FR4 | The ride booking shall follow first in first out method.|
| FR5 | Each application UI screen shall be user friendly and in easily understanble format or readable formate.|

### Operational Requirement:
| ID | Requirement |
| -------------| ---------- |
| FR1 | Application shall be installed or run on both operating system - Android and iOS.|
| FR2 |The system front end UI shall be created using react-native.|
| FR3 | System shall be build using expo CLI.|
| FR4 | The backend logic shall be implemented using python flask framework.|
| FR5 | Application shall run on device regardless of OS update or on changing mobile with new Operating system.|
| FR6 | Application shall store all of its user and post/comment data in NoSQL format in DynamicDB of AWS.|
| FR7 | Google maps shall be used for entering accurate location while posting a ride detail.|
| FR8 | CI/CD pipeline shall be used to make application be available by testing and deploying latest updates.|
### Security:
| ID | Requirement |
| -------------| ---------- |
| FR1 | Customer personal data shall be stored in database in encrypted format.
| FR2 | Unsuccessful login of user shall be recorded and audited.
| FR3 | User data shall not be shared with any other party.|
| FR4 | No user shall have access to delete any post unless they have created that post.|
| FR5 | The source coding shall follow secure coding practices.|

# Change Management Plan:

This section will describe a change management plan for ShareRide application. It will focus on training users, platform availability, performance and issue handling process.


## Why Shareride App?
ShareRide is a cross-platform mobile application for Grand Valley State
University, where all students and faculty members can join and share rides. Any
member of our application can ask for a ride by simply posting a plan, and whichever
member who has a vehicle can pick up the member who asked for a ride. Alternatively,
any member who already owns a vehicle can post his/her plan to visit somewhere, and
whoever fits the schedule can join the trip in first-come-first-serve basis.
## Training Strategy:
We will train people/students by proposing this system to the students during
Students orientation which happens at the start of every new semester and help them
login to the platform using their GVSU email. Like Uber, the first ride will have some
offers. The information about the application will be promoted in the form of posters all
over the campus where the QR code of the app will be provided in the posters.
## Integration within GVSU ecosystem:
The ShareRide application will be integrated on myBanner website, a GVSU
official portal. Since the application is designed for GVSU’s students, it would be
available to them on their official website. Students can get to know about the application
and download the application with the QR code in myBanner.
## Performance Issue and Monitoring:
We will continuously monitor the application’s performance and fix bugs. The application follows CI/CD pipeline, deployed on AWS CodePipeline which tests the code
before deploying.
## Availability of the Mobile Application:
The application will be available in both commanly used operating system - Android and iOS.

# Traceability links
This section represents relationship between requirements and other project artifacts such as class diagram, Use case diagram and activity diagram.
## Use Case Diagram Traceability
| Artifact ID | Artifact Name | Requirement ID |
| :-------------: | :----------: | :----------: |
|1| Sign In/Login | FR1, FR3, FR6|
|1| Sign Up/Registration| FR1, FR2, FR3, FR4, FR5|
|1| Edit Profile| FR1, FR2, FR3, FR5|
|1| Post/Comment| FR2, FR3, FR4, FR5|
## Class Diagram Traceability
| Artifact Name | Requirement ID |
| :-------------: |:----------: |
| classPlayer | NFR3, FR5 |
| … | … | … |


## Activity Diagram Traceability
| Artifact ID | Artifact Name | Requirement ID |
| :-------------: | :----------: | :----------: |
| <filename> | Handle Player Input | FR1-5, NFR2 |
| … | … | … |




# Software Artifacts
 [1 - Sign In/Login UseCase](https://github.com/Purva8852/GVSU-CIS641-Team-S/blob/master/artifacts/functional-models/Use_Case_SignIn.pdf)

 [2 -  Sign Up/Registration UseCase](https://github.com/Purva8852/GVSU-CIS641-Team-S/blob/master/artifacts/functional-models/Use_Case_Email_Verification_Registration.pdf)

[3 - Edit Profile UseCase](https://github.com/Purva8852/GVSU-CIS641-Team-S/blob/master/artifacts/functional-models/Use_Case_Edit_Profile.pdf)

[4 - Post/Comment UseCase](https://github.com/Purva8852/GVSU-CIS641-Team-S/blob/master/artifacts/functional-models/Use_Case_Post_Comment_Details.pdf)

 [5 -  Login Activity](https://github.com/Purva8852/GVSU-CIS641-Team-S/blob/master/artifacts/functional-models/Activity_Diagram_Login.pdf)

 [6 -  Edit Profile Activity](https://github.com/Purva8852/GVSU-CIS641-Team-S/blob/master/artifacts/functional-models/Activity_Diagram_Edit_Profile.pdf)

[7 -  SignIn Activity](https://github.com/Purva8852/GVSU-CIS641-Team-S/blob/master/artifacts/functional-models/Activity_Diagram_Sign_In.pdf)

[8 - Behavioral Diagram](https://github.com/Purva8852/GVSU-CIS641-Team-S/blob/master/artifacts/functional-models/Behavioral_Diagram_Sequence_StateMachine.pdf)

[9 - Combined Class Diagram](https://github.com/Purva8852/GVSU-CIS641-Team-S/blob/master/artifacts/functional-models/ClassDiagram.pdf)

[10 - Combined Use Case and Activity Diagram](https://github.com/Purva8852/GVSU-CIS641-Team-S/blob/master/artifacts/functional-models/UseCasesAndADs.pdf)
