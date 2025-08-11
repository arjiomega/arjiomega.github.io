# Store Sales Forecasting Model Decay Simulation

Welcome to the Store Sales Forecasting Model Decay Simulation Project!

![sample image](/projects_media/store_sales_forecasting/ssf1.png)

This project's primary objectives are to simulate incoming monthly data, detect data drift, and trigger model retraining.

To simulate incoming daily data, the project uses a schedule that triggers the loading of data partitioned monthly every other minute or what is specified in the crons schedule. The data is then merged with static data (unpartitioned). After that, the model will be trained if there is no model yet to measure reports. If there is a model, the new data will be used to measure the model performance, data drift, and model drift. Depending on the outcome of the report, the project will trigger the retraining process.

[View code on Github](https://github.com/arjiomega/Store-Sales-Forecasting-Model-Decay-Simulation)