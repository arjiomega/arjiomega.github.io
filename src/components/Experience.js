import React from "react";
import TargetedProject from "./TestProject";
import * as Image from "../assets/images/index"; // assuming images or GIFs are here

export const Experience = () => {
  return (
    <div className="experience-container bg-green-100">
      <h1 className="title">Experience</h1>

      {/* ML/AI Engineering Role */}
      <div className="experience">
        <div className="experience-top">
          <div className="experience-top-left">
            <h1 className="position">ML/AI Engineer</h1>
            <h1 className="company">Freelance</h1>
          </div>
          <div className="experience-top-right">
            <h1>July 2023 – Present</h1>
          </div>
        </div>

        {/* All Projects under this role */}
        <TargetedProject
            title="Real-Time Weld Defect Detection System"
            project_overview={`The goal of this project was to develop a real-time AI-powered system to detect welding defects from visual input. The system needed to operate under industrial latency constraints while maintaining high accuracy across a wide range of defect types and environments. Two complementary approaches—object detection and semantic segmentation—were explored to balance inference speed and label precision.`}
            contributions={`• Collaborated with 50+ global engineers to co-develop an AI system for detecting welding defects from visual inputs.
            • Led model deployment efforts, optimizing inference for low-latency industrial constraints.
            • Designed quality monitoring tools to benchmark labelers and streamline annotation workflows.
            • Introduced model-assisted labeling, cutting manual annotation time significantly.
            `}
            techDetails={`• Models: Fine-tuned SSD (object detection) and DeepLabV3 (semantic segmentation) using PyTorch.
            • Deployed real-time inference pipelines with OpenCV + FastAPI/gRPC interfaces for edge devices.
            • Optimized GPU usage to achieve sub-second latency under industrial conditions.
            • Reached 95% mIoU using custom evaluation datasets tailored for edge performance validation.
            • Engineered automated label auditing tools to detect mislabeling and improve dataset integrity.
            `}
            media={Image.WeldGif}
            mediaSourceName="AWS Industrial AI Blog"
            mediaSourceURL="https://aws.amazon.com/blogs/industries/artificial-intelligence-in-industrial-welding-produces-near-real-time-insights-through-virtually-100-sample-sizes/"
        />

        <TargetedProject
        title="Soil Nutrient Prediction (IPAGE)"
        project_overview={`Developed a machine learning system to predict soil nutrient levels and optimize fertilizer recommendations for smallholder farms in India. The project aimed to bridge critical data gaps by integrating sparse agronomic datasets and leveraging global open data, improving agricultural efficiency and sustainability.`}
        contributions={`• Initiated the project from scratch with no existing datasets, collaborating with a 50-person international team.
        • Identified and integrated agronomic datasets from multiple countries to overcome local data scarcity.
        • Engineered scientifically grounded features by researching macronutrient interactions and soil-crop dynamics.
        • Tackled inconsistent schemas and sensor failures through robust data cleaning and normalization strategies.
        • Contributed to model interpretability using SHAP to improve trust and understanding among agronomists.`}
        techDetails={`• Data: Aggregated low-volume, multi-source agronomic data (soil tests, crop yield reports, remote sensing).
        • ML: Trained regression models with scikit-learn and tracked experiments using MLflow.
        • Interpretability: Used SHAP to visualize feature impact and guide domain expert feedback loops.
        • Infrastructure: Containerized pipelines using Docker; PostgreSQL for structured data storage.
        • Deployment: Built demo API using AWS Lambda with Terraform for scalable serverless deployment.
        • Evaluation: Measured performance using RMSE and MAPE; tracked business KPIs like Cost Reduction % and Adoption Rate.`}
        media={Image.farmImg}
        />


        <TargetedProject
        title="LLM-Based Customer Service Bots"
        project_overview={`Developed AI-powered customer service chatbots for small and medium-sized businesses using LLaMA 3.2. The bots were designed to understand customer intent, process order-related queries, and provide real-time support—significantly reducing response time and improving user engagement. The system was deployed on AWS and integrated with Facebook Messenger, offering businesses an affordable and scalable support solution.`}
        contributions={`• Fine-tuned LLaMA 3.2 1B model to return structured JSON outputs with fields for intent, order details, and natural language responses.
        • Deployed the system using Docker and FastAPI on AWS EC2 instances, enabling scalable and cost-effective hosting.
        • Connected the bots to Facebook Messenger through Ngrok tunnels, making integration seamless for non-technical business owners.
        • Reduced average customer response time from several hours to just a few seconds, ensuring 24/7 availability even outside regular business hours.
        • Designed and implemented Redis-based request queueing to handle concurrent user traffic for high-demand clients.
        • Led efforts on LLMOps by using MLflow to manage prompt variations and monitor model behavior.
        • Wrote unit and integration tests to ensure robustness and maintainability of both ML and backend components.`}
        techDetails={`• Model: LLaMA 3.2 1B, fine-tuned with Hugging Face Transformers for structured output generation.
        • Backend: FastAPI, Docker, Redis for asynchronous queue management.
        • Deployment: AWS EC2, Ngrok for Messenger API tunneling, container orchestration.
        • Evaluation: Used BLEU and ROUGE scores to assess response quality and alignment with expected output.
        • Integration: Injected dynamic content into prompts via SQL queries and public APIs to improve relevance and accuracy.
        • LLMOps: MLflow used for tracking prompt effectiveness, versioning, and rollback strategies.`}
        media={Image.chatbotImg}
        />


        <TargetedProject
        title="Medical Imaging – Object Detection and Segmentation"
        project_overview={`Developed AI tools for chest X-ray analysis by fine-tuning object detection and segmentation models. The goal was to streamline the annotation process for radiologists, enabling faster and more accurate diagnostic workflows through semi-automated visual labeling. The system aimed to reduce manual workload while maintaining high accuracy and clinical relevance.`}
        contributions={`• Fine-tuned SSD and DeepLabV3 on curated medical imaging datasets, achieving high Intersection over Union (IoU) for key anatomical and pathological regions.
        • Packaged training and inference pipeline using MLflow (via DagsHub) and Docker, ensuring reproducibility and ease of collaboration.
        • Designed a Streamlit-based frontend for real-time visualization and review of model predictions, allowing radiologists to approve or adjust annotations.
        • Collaborated directly with radiologists to validate model output, incorporating their feedback to improve clinical alignment and annotation utility.
        • Reduced annotation time per scan and improved label consistency by enabling assisted-review workflows powered by AI predictions.`}
        techDetails={`• PyTorch for model training and experimentation (SSD and DeepLabV3 architectures).
        • MLflow and DagsHub for experiment tracking and model versioning.
        • Docker for portable deployment and reproducible training environments.
        • Streamlit for building the interactive annotation interface.
        • Integrated evaluation tools to measure IoU and overlay comparisons for visual QA.`}
        media={Image.xrayImg}
        mediaSourceName="Deep Learning-Based Classification and Semantic Segmentation of Lung Tuberculosis Lesions in Chest X-ray Images"
        mediaSourceURL="https://www.mdpi.com/2075-4418/14/9/952"
        />

      </div>

      {/* CFD Engineering Role */}
      <div className="experience">
        <div className="experience-top">
          <div className="experience-top-left">
            <h1 className="position">Computational Fluid Dynamics Engineer</h1>
            <h1 className="company">Freelance</h1>
          </div>
          <div className="experience-top-right">
            <h1>March 2018 – July 2023</h1>
          </div>
        </div>

        <div className="experience-description p-4 text-sm">
          <p>
            • Automated CFD workflows using OpenFOAM and Bash for turbomachinery, cooling systems, and automotive aerodynamics<br />
            • Built scalable pipelines on AWS EC2 for parallel simulation scenarios<br />
            • Focused on optimizing drag and thermal flow through mesh refinement, solver tuning, and result verification
          </p>
        </div>
      </div>
    </div>
  );
};
