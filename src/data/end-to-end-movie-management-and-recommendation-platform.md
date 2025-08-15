# 🎬 Full-Stack Movie Recommendation & Analytics Platform


This project showcases an end-to-end data engineering pipeline integrated with a full-stack web application. It demonstrates data ingestion, transformation, analytics, and machine learning, all within a Netflix-like platform where users can browse movies, add favorites, and provide ratings & reviews.

## 🚀 Features


### 🎭 Full-Stack Application

    Frontend: React-based UI similar to Netflix
    Backend: Django REST API to serve movie data
    User Features: Sign up, browse movies, add favorites, leave ratings & reviews

### 🏗️ Data Engineering & ETL Pipeline

    Data Source: Ingests data from TMDB API
    Storage: Raw data stored in PostgreSQL (staging layer)
    Transformation: Uses dbt to transform raw data into a star schema
    Analytics: Data is visualized using Power BI
    Machine Learning (Planned): Data will be used for movie recommendations

![star_schema](/projects_media/data_engineering/star_schema.png)

### ⚡ Technical Stack
| Component | Technology Used |
| -- | -- |
| Frontend |	React (Netflix-like UI) |
| Backend |	Django (REST API) |
| Database |	PostgreSQL (Staging & Star Schema) |
| ETL Pipeline |	Apache Airflow |
| Transformations |	dbt (Data Build Tool) |
| Analytics |	Power BI |
| Deployment |	Docker Compose |


## 🔀 Data Flow: From TMDB API to Power BI

### 1️⃣ Extract:

    Fetch movie IDs released in a specific monthly range from TMDB API
    Load detailed movie info, credits (cast & crew), reviews

### 2️⃣ Load (ELT Approach):

    Store raw data in PostgreSQL staging tables

### 3️⃣ Transform:

    Use dbt incremental models to build a star schema
    Prevents high compute costs (e.g., past mistake of wasting $300 GCP credits!)

### 4️⃣ Analytics & Visualization:

    Power BI imports transformed data for reporting & insights
    Imported instead of DirectQuery for performance reasons

### 5️⃣ Machine Learning (Future Work):

    Use the historical user ratings to train a recommendation model

## 🔥 Power BI Dashboards

![sample1](/projects_media/data_engineering/bi_sample1.png)
![sample2](/projects_media/data_engineering/bi_sample2.png)


[(View Code on Github)](https://github.com/arjiomega/movie_recommendation_system)