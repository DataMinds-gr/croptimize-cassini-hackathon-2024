import requests
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Retrieve the API key from the environment variables
api_key = os.getenv("AGROAPPS_API_KEY")

# Define the API endpoint and parameters
url = "https://api.agroapps.gr/weather/meteo/hourly"
params = {
    "lat": 40.648253,
    "lon": 22.961168,
    "from_date": "2024-01-01",
    "to_date": "2024-01-02",
}

# Set the request headers
headers = {
    "apiKey": api_key,
    "User-Agent": "PostmanRuntime/7.42.0",
    "Accept": "*/*",
    "Cache-Control": "no-cache",
    "Postman-Token": "b0506ca0-3859-44e0-876a-91d04b52bb4a",
    "Host": "api.agroapps.gr",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
}

# Make the GET request
response = requests.get(url, headers=headers, params=params)

# Check if the request was successful
if response.status_code == 200:
    # Print or process the response body
    data = response.json()
    print(data)
else:
    print(f"Request failed with status code: {response.status_code}")
