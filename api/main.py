from fastapi import FastAPI

app = FastAPI()


# Root
@app.get("/")
async def root():
    return {"message": "Welcome to the Crop Recommendation API"}


# Get all supported regions
@app.get("/regions/")
async def get_regions():
    return {"regions": ["Region1", "Region2", "Region3"]}  # Example data


# Get all supported crops
@app.get("/crops/")
async def get_crops():
    return {"crops": ["Crop1", "Crop2", "Crop3"]}  # Example data


# Get details about a specific crop by Id
@app.get("/crops/{crop_id}")
async def get_crop_details(crop_id: int):
    return {
        "crop_id": crop_id,
        "name": "Crop Name",
        "details": "Crop details here",
    }  # Example data


# Get details about a specific region by Id
@app.get("/regions/{region_id}")
async def get_region_details(region_id: int):
    return {
        "region_id": region_id,
        "name": "Region Name",
        "details": "Region details here",
    }  # Example data


# Get crop recommendation data for a specific region (generic)
@app.get("/regions/data/")
async def get_crop_recommendation_generic():
    return {
        "region": "Region1",
        "recommended_crops": ["Crop1", "Crop2"],
    }  # Example data


# Get crop recommendation data for a specific region by Id
@app.get("/regions/{region_id}/data")
async def get_crop_recommendation_by_region(region_id: int):
    return {
        "region_id": region_id,
        "recommended_crops": ["CropA", "CropB"],
    }  # Example data


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
