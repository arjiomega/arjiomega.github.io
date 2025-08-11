# Vision-Based Parking Lot Occupancy Detection: Classical vs. Deep Learning

I built a vision system to detect parking space occupancy using OpenCV. I compared a simple rule-based approach with a MobileNetV2 deep learning model. The deep learning method proved more accurate, especially in challenging conditions.

![Sample Image](/images/parkinglot.gif)

Two main methods were explored: a pixel-based technique and a deep learning approach.


## Pixel-Based Classification

![Sample Image](/images/pixel_parkinglot.png)

This method checks each parking slot by counting nonzero (white) pixels after preprocessing. If the count exceeds a threshold, the slot is marked as occupied.

![Sample Image](/images/pixel_lot_level_parkinglot.png)

White pixels indicate something is present in the slot. The system compares the pixel count to a set threshold to decide if a space is available.

[(View code on GitHub)](https://github.com/arjiomega/CarPark_ComputerVision)


## Deep Learning Approach

This version improves on the pixel-counting method by using a binary image classification model to predict if a parking space is available. It’s more accurate but also more computationally demanding and not suitable for real-time use.

The GIF above shows predictions for each space, frame by frame, using OpenCV.

**Pros:** More stable than the pixel-based method  
**Cons:** Slower, and can mispredict if cars aren’t parked properly (an issue for both methods)

### How It Works

- Each video frame is processed and split into individual parking spaces.
- These spaces are stacked for batch prediction with the trained model.
- For example, with 400 spaces, the input shape is (400, width, height, 3).
- The model outputs a prediction (1 or 0) for each space.
- The frame is updated and displayed using OpenCV.

![Sample Image](/images/dl_parkinglot.png)
![Sample Image](/images/dl2_parkinglot.png)

[(View code on GitHub)](https://github.com/arjiomega/Parking-Lot-Availability-CNN-Classification)