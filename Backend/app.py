import pickle
from flask import Flask, jsonify, request, app

app = Flask(__name__)


dt_classifier=pickle.load(open('Backend/models/dt_classifier.pkl'),'rb')
gb_classifier=pickle.load(open('Backend/models/gb_classifier.pkl'),'rb')
knn_classifier=pickle.load(open('Backend/models/knn_classifier.pkl'),'rb')
rf_classifier=pickle.load(open('Backend/models/rf_classifier.pkl'),'rb')
xgb_classifier=pickle.load(open('Backend/models/xgb_classifier.pkl'),'rb')

@app.route("/")
def home():
    return "<p>Hello to RAP</p>"

@app.route("/predict")
def predict():
    
    return

if __name__ == "__main__":
    app.run(debug=True)