## Inspiration
Cyclone is a tropical storm with winds blowing in a large spiral around a relatively calm center known as 'eye'. It is formed over warm water. The eye can extend up to 50 Km and the hurricane may extend outward by hundreds of kilometers. Cyclones last from several hours to more than 2 weeks over open waters.
Our main aim was to reduce the number of deaths and destruction to the properties caused by a cyclone. 


## What it does
Tropical cyclones are among the most devastating natural disasters, many models exist for predicting the evolution of cyclones by simulating the dynamics of weather which requires accurate center determination.
Often these models fail to determine dangerous aspects like intensification.
Here the CNN model comes into picture which determines the intensity during the initial stage of cyclone formation when precise center determination becomes difficult, the model is trained with extensive dataset for maximum accuracy and for visualization of these images a website is created.
We have created a user-friendly website with the model trained(in backend). The user chooses the  IR imagery. Once the selection is complete, our model will work on the IR imagery and will predict the intensity of the cyclone. 


## How we built it

Tech Stacks used:
For website’s front-end development:NodeJS, HTML, TailwindCSS, clientSide js, node dependencies 
ejs, express,express(for file upload part).
For website’s back-end development: Python, Flask

For model training:
Python, Machine learning, CNN, Tensorflow(Keras) 

## Challenges we ran into:
- Unavailability of proper labeled dataset
- Conversion of images files(from jpeg to .nc)