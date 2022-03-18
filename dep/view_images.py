import numpy as np
import matplotlib.pyplot as plt
import random
import json

images = np.load('dep/images.npy')
labels = np.load('dep/labels.npy')


i = random.randint(0, images.shape[0])
image = np.reshape(images[i], (images[i].shape[0], images[i].shape[1]))
plt.imshow(image, cmap='binary')
plt.savefig('public/data/img.png')

# f = open("public/data/labels.txt", "w")
# imno = str(i)
# speed = str(labels[i])
# f.write(imno+" "+speed)
# f.close()

f=open('public/data/labels.json','w')
image_number=str(i)
speed=str(labels[i])
f.write(json.dumps({"image_number":image_number,"speed":speed}))
f.close()