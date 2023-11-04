from flask import Flask
from flask import request
from flask_cors import CORS,cross_origin
import pickle
import pandas as pd
import numpy as np
app=Flask(__name__)
cors=CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
modelM=pickle.load(open('LinearRegressionModel.pkl','rb'))
car=pd.read_csv('carDataClean.csv')
years=[]
for i in sorted(car['year'].unique(),reverse=True):
    years.append(int(i))
companies=sorted(car['company'].unique())
models=sorted(car['name'].unique())
fuels=sorted(car['fuel_type'].unique())
companies.insert(0,'Select Company')
@app.route('/',methods=['GET','POST'])
def index():
    return {"companies":companies,"models":models,"years":years,"fuels":fuels}
@app.route('/predict',methods=['POST'])
def predict():
    com=request.form.get('com')
    model=request.form.get('mod')
    fuel=request.form.get('fuel')
    year=int(request.form.get('year'))
    kms=int(request.form.get('kms'))
    prediction=modelM.predict(pd.DataFrame(columns=['name','company','year','kms_driven','fuel_type'],data=np.array([model,com,year,kms,fuel]).reshape(1,5)))
    return str(np.round(prediction[0],2))
if __name__=="__main__":
    app.run()