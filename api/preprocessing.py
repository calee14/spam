import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder

# load the data
df = pd.read_csv('../data/spam.csv',delimiter=',',encoding='latin-1')

# drop the null columns
df.drop(['Unnamed: 2', 'Unnamed: 3', 'Unnamed: 4'],axis=1,inplace=True)

# creating input and output datasets
X = df.v2
Y = df.v1
le = LabelEncoder()
Y = le.fit_transform(Y)
Y = Y.reshape(-1,1)

# create the tesing and training data
X_train,X_test,Y_train,Y_test = train_test_split(X,Y,test_size=0.15)
print(X_train.shape, X_test.shape, Y_train.shape, Y_test.shape)

# save data to a picle file
np.save('X_train', X_train)
np.save('y_train', Y_train)
np.save('X_test', X_test)
np.save('y_test', Y_test)
