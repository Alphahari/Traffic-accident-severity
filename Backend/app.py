from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import pickle
import pandas as pd
import numpy as np

app = Flask(__name__)
cors = CORS(app)

@app.route("/")
def hello():
    return "<p>Hello world</p>"

@app.route("/predict", methods=['POST'])
@cross_origin()
def predict_default():
    result = {}
    if request.method == 'POST':
        data = request.get_json()
        modelsToUse = data['modelsToUse']
        userData = data['userData']
        try:
            for mod in modelsToUse:
                fileName = mod['value']
                modelName = mod['key']
                with open(f'Backend/models/{fileName}.pkl', 'rb') as file:
                    model = pickle.load(file)
                file.close()
                newDataFrame = pd.DataFrame(data=[userData], columns=['1st_Road_Class', 'Day_of_Week', 'Junction_Control', 'Junction_Detail', 'Light_Conditions', 'Local_Authority_(District)', 'Pedestrian_Crossing-Human_Control', 'Pedestrian_Crossing-Physical_Facilities', 'Road_Surface_Conditions', 'Road_Type', 'Special_Conditions_at_Site', 'Speed_limit', 'Urban_or_Rural_Area', 'Weather_Conditions'])
                scaler = pickle.load(open('Backend/scaler.pkl', 'rb'))
                newDataArray = scaler.transform(newDataFrame)
                prediction = model.predict(newDataArray)
                prediction_label = prediction[0]
                result.update({modelName: prediction_label})
            return jsonify(result)
        except Exception as error:
            return jsonify({
                "message": "Please check your inputs again!",
                "error": str(error)
            })
if __name__ == "__main__":
    app.run(debug=True)