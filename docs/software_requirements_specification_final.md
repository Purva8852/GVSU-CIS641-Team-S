
# Overview:
The software requirement specification document outlines the requirements of Team-S project, a ride-sharing application among university students, faculty members and GVSU staff. This document explains about the (ShareRide) App features, traceability, interface and design logics in detail.


# Software Requirements
This section of the document focuses on how the system shall response and what all services are available to the ShareRide users. 
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
| FR6 |Upon completion of application loading, the welcome screen shall display login and Sign up option.|

### Sign Up/User Registration:
| ID | Requirement |
| -------------| ---------- |
| FR7 | Only GVSU staff, students or faculty members shall be allowed for new registration.|
| FR8 | This shall include user's mandatory personal details - Name, Email and Address. And optional details - Phone and vehicle details.
| FR9 | 'Register Me' option shall be included. When user selects this option, a verification link shall be sent to the user.|
| FR10 | Sign up screen shall include login screen navigation.|
| FR11 | After successfully registering, user shall be able to login immediately.|

### Edit Profile
| ID | Requirement |
| -------------| ---------- |
| FR12 | User shall have access to edit profile where user can modify/change address, vehicle details, password and phone number.|
| FR13 | On selecting submit button option, the new/modified details shall get updated in database.|
| FR14 | If password is changed, user shall be redirected to the login page.|
| FR15 | If user does not want to modify any details, this page shall include navigator to post screen/main screen.|
| FR16 | User shall not have access to modify email address and name field.|


### Post/Comment
| ID | Requirement |
| -------------|---------- |
| FR17 | Post screen shall be main screen of application.|
| FR18 | User shall have access to create new post from this screen.|
| FR19 | Logged in user shall have access to see all the previous posts and comments on any post.|
| FR20 | If ride time for any post is due the current time, the post shall automatically get deleted.|
| FR21 | User shall have access to delete only his/her post.|
| FR22 | Admin shall have access to delete all irrelevant posts.|
| FR23 |  While creating post, user shall have access to choose from rider or passenger, enter ride to and from location, and time of ride with available seats and phone being optional.|

### Operational Requirements:
| ID | Requirement |
| -------------| ---------- | 
| FR24 | After successful login or registering, user shall have access to post screen (main board screen)|
| FR25 | Any user shall be allowed to comment on any post.|
| FR26 | After logout user shall have option to login again.|
| FR27 | MyProfile screen shall include user details like name, phone, address, vehicle details.|
| FR28 | Once user has logged in, the application shall store his/her information for using it next time.|

    
## Non-Functional Requirements
### Performance:
| ID | Requirement |
| -------------| ---------- |
| NFR1 | Application shall handle maximum number of 30K users at a time.|
| NFR2 | Performace of the application shall be monitored using AWS cloudwatch.|
| NFR3 | After clicking onto reset password button temporary password shall be sent with a latency of no greater than 1 hour.|
| NFR4 | Each login and registration request shall be processed in maximum of 10 seconds.|
| NFR5 | Application shall take no longer than 3 seconds to load when user tries to open it.|
| NFR6 | All the drawer navigation shall load their respective screens in less 3 seconds.|

### Availability:
| ID | Requirement |
| -------------| ---------- |
| NFR7 | Application shall be up and running 24*7 all the days.|
| NFR8 | Recent or only upcoming posts shall be available for avoiding storage of large data on database.|
| NFR9 | Customer support shall be provided if user faces any issue accessing the application.|
| NFR10 | Temporary password sent to user shall be valid for 4 hours for successful login.|
| NFR11 | After successful login, users email address shall be stored in AsyncStorage.|

### Usability:
| ID | Requirement |
| -------------| ---------- |
| NFR12 | Each application UI screen shall be user friendly and in easily understanble format or readable formate.|
| NFR13 | The user shall experience an aesthetic and minimal design.|
| NFR14 | The application shall consist of standard visual experience for all users.|
| NFR15 | The ride booking shall follow first in first out method.|
| NFR16 | User from any age group shall access app easily.|

### Operational Requirement:
| ID | Requirement |
| -------------| ---------- |
| NFR17 | Application shall be installed or run on both operating systems - Android and iOS.|
| NFR18 |The system front end UI shall be created using react-native.|
| NFR19 | System shall be build using expo CLI.|
| NFR20 | The backend logic shall be implemented using python flask framework.|
| NFR21 | Application shall run on device regardless of OS update or on switching mobile with new operating system.|
| NFR22 | Application shall store all of its users and posts/comments data in NoSQL format in DynamicDB of AWS.|
| NFR23 | Google maps shall be used for entering accurate location while posting a ride detail.|
| NFR24 | CI/CD pipeline shall be used to make application  available by testing and deploying latest updates.|
### Security:
| ID | Requirement |
| -------------| ---------- |
| NFR25 | Customer's personal data shall be stored in database in encrypted format.
| NFR26 | Unsuccessful login of user shall be recorded and audited.
| NFR27 | User data shall not be shared with any other party.|
| NFR28 | No user shall have access to delete any post unless they have created that post.|
| NFR29 | The source coding shall follow secure coding practices.|

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
|1| [Sign In/Login](https://github.com/Purva8852/GVSU-CIS641-Team-S/blob/master/artifacts/functional-models/Use_Case_SignIn.pdf) | FR1, FR3, FR6, FR26|
|2| [Sign Up/Registration](https://github.com/Purva8852/GVSU-CIS641-Team-S/blob/master/artifacts/functional-models/Use_Case_Email_Verification_Registration.pdf) | FR7-11|
|3|[Edit Profile](https://github.com/Purva8852/GVSU-CIS641-Team-S/blob/master/artifacts/functional-models/Use_Case_Edit_Profile.pdf)| FR12-14, FR16|
|4| [Post/Comment](https://github.com/Purva8852/GVSU-CIS641-Team-S/blob/master/artifacts/functional-models/Use_Case_Post_Comment_Details.pdf)| FR18-21, FR25|
## Class Diagram Traceability
| Artifact Name | Requirement ID |
| :-------------: |:----------: |
| [User](https://github.com/Purva8852/GVSU-CIS641-Team-S/blob/master/artifacts/functional-models/ClassDiagram.pdf) | FR1, FR2, FR7, FR8, FR12-FR14 |
| [Vehicle](https://github.com/Purva8852/GVSU-CIS641-Team-S/blob/master/artifacts/functional-models/ClassDiagram.pdf) | FR8 |
| [RideDetails](https://github.com/Purva8852/GVSU-CIS641-Team-S/blob/master/artifacts/functional-models/ClassDiagram.pdf) | FR18, FR20,21 |
| [Post/Comment](https://github.com/Purva8852/GVSU-CIS641-Team-S/blob/master/artifacts/functional-models/ClassDiagram.pdf) | FR17-23 |



## Activity Diagram Traceability
| Artifact ID | Artifact Name | Requirement ID |
| :-------------: | :----------: | :----------: |
| [5](https://github.com/Purva8852/GVSU-CIS641-Team-S/blob/master/artifacts/functional-models/Activity_Diagram_Login.pdf) | Login | FR1-5, NFR2, NFR26 |
|[6](https://github.com/Purva8852/GVSU-CIS641-Team-S/blob/master/artifacts/functional-models/Activity_Diagram_Edit_Profile.pdf)|Edit Profile | FR12-16, NFR25, |
|[7](https://github.com/Purva8852/GVSU-CIS641-Team-S/blob/master/artifacts/functional-models/Activity_Diagram_Sign_In.pdf)|  SignIn | FR2-5, FR8-11, NFR1, NFR3,NFR4, NFR7, NFR10, NFR12, NFR17, NFR16 |


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
