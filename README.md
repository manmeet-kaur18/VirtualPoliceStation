# Virtual Police Station 

## Introduction

A dangerous anachronism, the police have largely failed to evolve from the ruler-supportive, repressive forcescthey were designed to be under Britain’s colonial rule. While sixty years later much of India is in the process of rapid modernization, the police continue to use their old methods. Instead of policing through public consent and participation, the police may sometimes use abuse and threats as a primary crime investigation and law enforcement tactic. The institutional culture of police practically discourages officers from acting otherwise,failing to give them the resources, training, ethical environment, and encouragement to develop professional police tactics. Many officers even told Human Rights Watch that they were ordered or expected to commit abuses.

Traditionally marginalized groups are especially vulnerable to each of the first three abuses. Though stemming from the discriminatory biases of police officers, their vulnerability is also the product of an abusive police culture in which an individual’s ability to pay a bribe, trade on social status or call on political connections often determines whether they will be assisted or abused.

Such abuses contribute to a climate of fear. Many Indians avoid any contact with the police, believing not only that they will not receive assistance but that they risk demands for bribes, illegal detention, torture, or even death. This of course, creates a vicious cycle, as crimes go unreported and unpunished and the pressures on the police to deal with rising criminality increase. However now with the revolutions technology has brought to the living online FIR registration and tracking systems have been deployed by the Police services. This has reduced the chances of human rights violation and abuse usually faced at the police stations thus reducing the fear amongst the people which has helped in better monitoring and registration of crimes.

In these FIR systems, it is often scene that people do not get regular updates and also there is delay in processing of the reported FIRs. In the product focus is to improve this issue by providing the high-end live tracking for the citizens to track their FIRs in every police station they have reported easily on one platform. It is seen that there are different web portals for different police stations so the idea behind this product is to bring all these police stations at one platform to service the citizens nearby their locations and also tracking of criminals can be made easier among all the police stations and leading to less crime in country. Also, In the product focus is to provide a platform where the police can easily track the day-to-day activities of the inmates in their police stations and manage them easily securely and safely. Moreover, this product also focuses on solving the problem of police delay during emergencies so through this product is built in such a way so that it solves the issue by providing the police support in time to the citizen by just pressing one button, to be precise we tend to bridge the gap between police station and citizen by one click.

It is often seen that people in the society needs to be warned about the criminals roaming around the city freely and so the police may need a medium to spread information of these criminals to the citizens and often use newspapers. Technology has grown so much that it has made it easier for sending this information through the social media but this may lead to giving a warning to the criminal leading to his escape from the police. So, in the product this is made possible by a simple criminal information column where only verified as well as trusted citizens can view the list and also can help the police in locating them. We believe that with help of all the responsible citizens who abide by the law of the country may help police in all sort of way in tracing in them without actually telling their real identities.

## Features
### For Police Admin
- The admin of a particular police station can easily add and update the information of their respective police stations in real time.
- Can track the status of the various FIRs that are registered by the citizens for the particular police station. The admin has also been given rights to change the status of these FIRs from filed to tracking and finally to completed with updates in real time being reflected the same on the citizen portal.
- Admin can also send message to the person who filed a particular FIR during the procedure through the web interface.
- He/she can easily track the inmates in the prison which includes their information like wage, name and age and can also update them in real time.
- Admin can also track and update information related to the wanted criminals registered with the particular police station.
- Admin can also track the facial emotions of the prisoners in the jail by the video in real time for 24/7 hours (currently using sample videos to show the functionality working).
- Admin can also handle alerts in real time and reach the spot in few minutes without any delay.

### For Citizen
- The citizen is provided with functionality to alert the police station in real time by just one click though the portal
- He/She can easily track and report the FIRs with a particular police station nearby.
- He/She can easily look into the list of lost and found items as well as view the list of wanted criminals.
- A chatbot has also been provided by the system to help the citizens in case of any technical issues while using the portal or incase of any query related to services.

### For Main Admin
- The main admin can easily add a new police station into the system by just filling a basic form regarding the basic information related to it.

## Tech Stack

- HTML - For making basic structure of web interface
- CSS - css for styling the web interface
- JavaScript - It handles all the client based operations in the portal
- Node.js - It provides the functionality for the server side
- MongoDB - Non-SQL database schema
- Google Maps API - Provides the functionality of finding nearby police station
- Dialogflow - An API for chatbot.
- Face API JS - JavaScript API for face detection, face recognition and face emotion recognition in the browser implemented on top of the tensorflow.js core API

## How to acesss and use the web interface

The web interface can be accessed on the link following link [Virtual Police Station](https://policestationservices.herokuapp.com/).

After landing on the main page of the web interface, a new user can be created by the signup page which will be having the citizen role or we can access the portal for three different by the already existing data in database that are:

> Citizen credentials

```sh
username : Manmeet
role : citizen
password : 12345
```
> Police Station Admin credentials

```sh
username : Admin
role : admin
password : 12345
```
> Main Admin credentials

```sh
username : Amrish
role : main admin
password : 12345
```

## Novelty

- There are many existing systems that are similar to the one which is providing but what makes it unique is its ability to handle the updates regarding the FIRs, inmates and criminals in real time and reflect it in the system with minimal delay.
- The alert system built in the system helps to provide an efficient interface through which citizens can alert nearby police station in single click and can easily get confirmation through their registered emails within few seconds of confirmation by the police admin of the particular police station.
- The prototype face emotion tracking system in the portal can be implemented with real time videos from the camera of the prisons and can easily track each and every inmates through the portal
- Another unique factor that makes it stand out is that currently most of the police stations are having their separatse webpages, which makes it difficult for the citizens to access them and with this system aim was to bring all the police stations on a single platform so that accessing all of them by a single link becomes easier and efficient and each admin can handle their police station and track and update their information securely without any intervention from other police stations data.

## License
MIT
**Free Web based Software**